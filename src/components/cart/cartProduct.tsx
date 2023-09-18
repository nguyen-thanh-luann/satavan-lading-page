import { TrashIconOutline } from '@/assets'
import {
  changeProductUomTypeToReactSelectType,
  formatMoneyVND,
  generateProductSlug,
  isArrayHasValue,
} from '@/helper'
import { useAsync, useModal } from '@/hooks'
import { cartAPI } from '@/services'
import {
  CartProduct as ICartProduct,
  MutateProductParams,
  ReactSelectType,
  UpdateCartItemReq,
  UpdateCartProductType,
} from '@/types'
import classNames from 'classnames'
import Link from 'next/link'
import Select from 'react-select'
import { twMerge } from 'tailwind-merge'
import { CustomImage } from '../customImage'
import { CustomInputQuantity, InputCheckbox } from '../inputs'
import { ModalConfirm } from '../modal'
import { Spinner } from '../spinner'
import { CartProductVariants } from './cartProductVariants'
import { CartProductPromotion } from './productPromotion'

interface CartProductProps extends MutateProductParams {
  data: ICartProduct
  className?: string
  company_id: number
  category_id: number
  onToggleCheck?: (product: ICartProduct) => void
  onDelete: (product: ICartProduct) => void
  onUpdate: (product: ICartProduct, type: UpdateCartProductType) => void
}

export const CartProduct = ({
  data,
  className,
  company_id,
  category_id,
  onDelete,
  onToggleCheck,
  onUpdate,
  ...indexes
}: CartProductProps) => {
  const { visible, openModal, closeModal } = useModal()
  const { asyncHandler: toggleCheckHandler, isLoading: isToggleChecking } = useAsync()
  const { asyncHandler: updateQuantityHandler, isLoading: isQuantityUpdating } = useAsync()
  const { asyncHandler: updateProductHandler } = useAsync()

  // distinguish product or combo
  const isCombo = data?.combo_id?.combo_id

  const productSlug = !isCombo
    ? `/${generateProductSlug(data?.product_id?.product_name, data?.product_id?.product_id)}`
    : `/combo/${generateProductSlug(data?.combo_id?.combo_name, data?.combo_id?.combo_id)}`

  const handleChangeProductUom = (props: ReactSelectType) => {
    //check data valid
    if (!isArrayHasValue(data?.rel_uom_ids) || !props || data?.uom_id?.uom_id === props?.value)
      return

    const newUom = data?.product_id?.rel_uom_ids?.find((uom) => uom.uom_id === props?.value)

    if (newUom) {
      const newPrice =
        data?.product_id?.price_list?.[data.product_id?.product_id]?.[newUom?.uom_id] ||
        data?.product_id?.price_unit

      updateProductHandler({
        fetcher: cartAPI.updateCartItem({
          cart_product_id: data.shopping_cart_product_id,
          is_check: data.is_check,
          price_unit: newPrice,
          quantity: data?.quantity,
          uom_id: newUom?.uom_id,
        }),
        onSuccess: (res: any) => onUpdate(res, 'uom'),
        config: {
          showSuccessMsg: false,
        },
      })
    }
  }

  const hanldeDeleteCartProduct = () => {
    updateProductHandler({
      fetcher: cartAPI.deleteCartProduct({
        cart_product_ids: [data.shopping_cart_product_id],
      }),
      onSuccess: () => onDelete?.(data),
      config: { method: 'GET', showErrorMsg: true, showBackdrop: true },
    })
  }

  const handleToggleCheckProduct = () => {
    toggleCheckHandler({
      fetcher: cartAPI.updateCartItem({
        is_check: !data.is_check,
        cart_product_id: data.shopping_cart_product_id,
        price_unit: data.price_unit,
        quantity: data.quantity,
      }),
      onSuccess: onToggleCheck,
      config: {
        showBackdrop: false,
        showSuccessMsg: false,
        setLoadingState: true,
      },
    })
  }

  const handleChangeQuantity = (quantity: number) => {
    if (isQuantityUpdating) return

    if (quantity <= 0) {
      openModal()
      return
    }

    updateQuantityHandler({
      fetcher: cartAPI.updateCartItem({
        cart_product_id: data.shopping_cart_product_id,
        price_unit: data.price_unit,
        is_check: data.is_check,
        quantity,
      }),
      onSuccess: (res: ICartProduct) => onUpdate(res, 'quantity'),
      config: {
        showSuccessMsg: false,
        showBackdrop: false,
        setLoadingState: true,
      },
    })
  }

  const handleUpdateProduct = (params: Partial<UpdateCartItemReq>, type: UpdateCartProductType) => {
    updateProductHandler({
      fetcher: cartAPI.updateCartItem({
        cart_product_id: data.shopping_cart_product_id,
        is_check: data.is_check,
        price_unit: data.price_unit,
        quantity: data.quantity,
        ...params,
      }),
      onSuccess: (res: any) => onUpdate(res, type),
      config: {
        showSuccessMsg: false,
      },
    })
  }

  return (
    <div className={classNames('p-12', className)}>
      <div className={twMerge(classNames('bg-white flex md:gap-24 items-center'))}>
        {/* product info */}
        <div className="flex-1 flex items-center">
          <div className="w-32">
            {isToggleChecking ? (
              <Spinner />
            ) : (
              <InputCheckbox isChecked={data.is_check} onCheck={handleToggleCheckProduct} />
            )}
          </div>

          <div className="mr-10">
            <CustomImage
              src={
                !isCombo
                  ? data?.product_id.representation_image.image_url
                  : data?.combo_id?.attachment_cloud_id?.url
              }
              className="w-60 h-60"
              imageClassName="w-60 h-60 object-cover"
            />
          </div>

          <div className="w-full flex-1">
            <Link
              href={productSlug}
              className="text-base text-text-color font-bold leading-8 line-clamp-2 hover:text-primary mb-8"
            >
              {!isCombo ? data?.product_id?.product_name : data?.combo_id?.combo_name}
            </Link>

            {/* attribute */}
            <div>
              {!isCombo && data?.product_id?.attribute_ids?.length > 0 ? (
                <CartProductVariants
                  data={data}
                  selectedVariants={data?.product_id?.attribute_ids}
                  onChange={({ price_unit, product_id }) =>
                    handleUpdateProduct({ price_unit, product_id }, 'variant')
                  }
                />
              ) : null}
            </div>

            {/* mobile view */}
            <div className="md:hidden flex flex-wrap justify-between items-center">
              <div>
                <p className="text-base text-primary font-bold leading-8 line-clamp-1 mt-8">
                  {formatMoneyVND(data?.price_unit)}
                </p>

                {data?.price_unit < data?.product_id?.origin_price_unit ? (
                  <p className="text-gray-400 text-xs font-medium leading-7 line-through">
                    {formatMoneyVND(data?.product_id?.origin_price_unit || 0)}
                  </p>
                ) : null}
              </div>

              <div className="flex justify-start mt-8">
                {data?.rel_uom_ids?.length > 1 ? (
                  <Select
                    isSearchable={false}
                    styles={{
                      control: (provided) => ({
                        ...provided,
                        '& .indicatorContainer': {
                          display: 'none',
                        },
                      }),
                    }}
                    className="text-base min-w-[80px] border-primary"
                    components={{ IndicatorSeparator: () => null }}
                    defaultValue={changeProductUomTypeToReactSelectType(data?.uom_id, true)}
                    options={data?.rel_uom_ids.map((productUom) =>
                      changeProductUomTypeToReactSelectType(productUom, true)
                    )}
                    onChange={(val: any) => handleChangeProductUom(val)}
                  />
                ) : (
                  <div>
                    <p className="text-base line-clamp-1">{data?.uom_id?.uom_name}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="md:hidden flex justify-between items-center mt-8">
              <CustomInputQuantity
                defaultValue={data?.quantity}
                disabled={isQuantityUpdating}
                onChangeQuantity={handleChangeQuantity}
              />

              <div className="cursor-pointer" onClick={openModal}>
                <TrashIconOutline className="text-red w-16 h-16 active:opacity-50 " />
              </div>
            </div>
          </div>
        </div>

        {/* price */}
        <div className="w-[115px] text-start hidden md:block">
          <p className="text-md text-primary font-bold leading-8 line-clamp-1">
            {formatMoneyVND(data?.price_unit)}
          </p>

          {!isCombo && data?.price_unit < data?.product_id?.origin_price_unit ? (
            <p className="text-gray-400 text-xs font-medium leading-7 line-through">
              {formatMoneyVND(data?.product_id?.origin_price_unit || 0)}
            </p>
          ) : null}

          {isCombo && data?.price_unit < data?.combo_id?.origin_price_unit ? (
            <p className="text-gray-400 text-xs font-medium leading-7 line-through">
              {formatMoneyVND(data?.product_id?.origin_price_unit || 0)}
            </p>
          ) : null}
        </div>

        {/* quantity */}
        <div className="w-[115px] text-start hidden md:block">
          <CustomInputQuantity
            defaultValue={data?.quantity}
            disabled={isQuantityUpdating}
            onChangeQuantity={handleChangeQuantity}
          />
        </div>

        {/* uom */}
        <div className="w-[130px] text-start hidden md:block">
          {data?.rel_uom_ids?.length > 1 ? (
            <Select
              isSearchable={false}
              className="text-base min-w-[80px] border-primary w-fit"
              components={{ IndicatorSeparator: () => null }}
              defaultValue={changeProductUomTypeToReactSelectType(data?.uom_id, false)}
              options={data?.rel_uom_ids.map((productUom) =>
                changeProductUomTypeToReactSelectType(productUom, false)
              )}
              onChange={(val: any) => handleChangeProductUom(val)}
            />
          ) : (
            <div>
              <p className="text-base line-clamp-1">{data?.uom_id?.uom_name}</p>
            </div>
          )}
        </div>

        <div className="hidden md:flex w-32 cursor-pointer" onClick={openModal}>
          <TrashIconOutline className="text-red w-16 h-16 active:opacity-50 " />
        </div>
      </div>

      {data?.has_promotion ? (
        <CartProductPromotion {...indexes} companyId={company_id} product={data} />
      ) : null}

      <ModalConfirm
        visible={visible}
        title={`Xóa sản phẩm đã chọn?`}
        denyTitle="Hủy"
        onConfirm={hanldeDeleteCartProduct}
        onDeny={closeModal}
      />
    </div>
  )
}
