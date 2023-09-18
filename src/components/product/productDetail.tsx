import { companyIconSm } from '@/assets'
import { DOMAIN_URL, SWR_KEY } from '@/constants'
import {
  changeProductUomTypeToReactSelectType,
  formatMoneyVND,
  generateProductSlug,
  isArrayHasValue,
  isObjectHasValue,
} from '@/helper'
import { useAddToCart, useUser, useWishlist } from '@/hooks'
import { productAPI } from '@/services'
import { ProductDetail as IProductDetail, Product, ReactSelectType } from '@/types'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import Select from 'react-select'
import { useSWRConfig } from 'swr'
import { twMerge } from 'tailwind-merge'
import { AntImageCustom } from '../antImageCustom'
import { CustomImage } from '../customImage'
import { Divider } from '../divider'
import { Image } from '../image'
import { CustomInputQuantity } from '../inputs'
import { ShareSocial } from '../shareSocial'
import { Star } from '../star'
import ProductImg from './productImage'
import { ProductVariants } from './productVariants'
import WishlistBtn from './wishlistBtn'
import { Button } from '../button'
import { Spinner } from '../spinner'

interface ProductDetailProps {
  data: IProductDetail
  className?: string
  onChangeVariant?: (product: Product) => void
  type?: 'detail' | 'modal'
}

export const ProductDetail = ({ data, className, type = 'detail' }: ProductDetailProps) => {
  const isCombo = data?.product_type === 'combo'

  const router = useRouter()
  const { mutate } = useSWRConfig()

  const { userInfo } = useUser({})

  const { addWhishlist, deleteWhishlist, isLoading: isToggleWishlist } = useWishlist({})
  const { addToCart, isAddingTocart } = useAddToCart()

  const [quantity, setQuantity] = useState<number>(1)
  const [currentProduct, setCurrentProduct] = useState<IProductDetail>(data)

  const handleAddToCart = (product: Product) => {
    if (isAddingTocart) return
  
    if (!userInfo?.account?.partner_id) {
      router.push(`${DOMAIN_URL}/login`)
      return
    }

    addToCart({
      ...product,
      quantity: quantity,
    })
  }

  const handleToggleWishlist = (productDetail: IProductDetail) => {
    if (!userInfo?.account?.partner_id) {
      toast.error('Vui lòng đăng nhập!')
      return
    }

    if (data?.liked) {
      deleteWhishlist(productDetail)
    } else {
      addWhishlist(productDetail)
    }
  }

  const handleChangeVariant = (product: Product) => {
    setCurrentProduct({
      ...currentProduct,
      product_id: product.product_id,
      product_name: product?.product_name,
      representation_image: product?.representation_image,
      image_ids: product?.image_ids,
      star_rating: product?.star_rating,
      rating_count: product?.rating_count,
      sold_quantity: product?.sold_quantity,
      product_available: product?.product_available,
      price_unit: product?.price_unit,
      origin_price_unit: product?.origin_price_unit,
      uom_id: product?.uom_id,
      attribute_minor_ids: product?.attribute_minor_ids, //update or not??? ask later!
      attribute_ids: product?.attribute_ids,
    })

    if (type === 'detail') {
      updateProductDescription(currentProduct?.product_id, product?.product_id)
    }
  }

  const updateProductDescription = async (current_product_id: number, new_product_id: number) => {
    try {
      const res: any = await productAPI.getProductDescription(new_product_id)

      mutate(`${SWR_KEY.get_product_description}_${current_product_id}`, res?.data, false)
    } catch (e) {
      console.log(e)
    }
  }

  const hanldeAttributeClick = (attribute_id: number, child_id: number, filterable: boolean) => {
    if (!filterable) return

    router.push(`/search?attributes_${attribute_id}=${child_id}`)
  }

  const hanldeCateoryClick = (category_id: number) => {
    if (!category_id) return
    router?.push(`/search?category_${category_id}=${category_id}`)
  }

  const handleChangeProductUom = (props: ReactSelectType) => {
    //check data valid
    if (
      !isArrayHasValue(currentProduct?.rel_uom_ids) ||
      !props ||
      currentProduct?.uom_id?.uom_id === props.value
    )
      return

    const newUom = currentProduct?.rel_uom_ids?.find((uom) => uom.uom_id === props?.value)

    if (newUom) {
      const newPrice =
        currentProduct?.price_list?.[currentProduct.product_id]?.[newUom?.uom_id] ||
        currentProduct?.price_unit

      setCurrentProduct({ ...currentProduct, uom_id: newUom, price_unit: newPrice })
    }
  }

  return (
    <div
      className={twMerge(`bg-white p-0 py-24 md:p-24 flex flex-col md:flex-row gap-24`, className)}
    >
      <div className="w-full md:w-[440px] px-12">
        {isCombo ? (
          <div className="mb-12">
            <AntImageCustom
              src={currentProduct?.attachment_cloud_id?.image_url}
              className="rounded-md mx-auto w-fit"
              imageClassName="rounded-md object-cover aspect-1 mx-auto"
            />
          </div>
        ) : (
          <div className="mb-12">
            {currentProduct?.representation_image?.image_url ? (
              <ProductImg
                representation_image={currentProduct?.representation_image}
                images_ids={currentProduct?.image_ids}
                type="detail"
                className="w-full"
              />
            ) : (
              <Image src={companyIconSm} imageClassName="w-[440px] h-[440px] object-cover" />
            )}
          </div>
        )}

        {/* like & share */}
        <div className="flex justify-between flex-wrap">
          <div className="mr-8 flex items-center">
            <p className="text-text-color text-base font-semibold mr-12">Chia sẻ: </p>
            <ShareSocial
              title={currentProduct?.product_name}
              slug={`${DOMAIN_URL}/${generateProductSlug(
                currentProduct?.product_name,
                currentProduct?.product_id
              )}`}
            />
          </div>

          {!isCombo && (
            <WishlistBtn
              status={data?.liked || false}
              like_count={data?.liked_count}
              onChange={() => handleToggleWishlist(data)}
              isLoading={isToggleWishlist}
            />
          )}
        </div>
      </div>

      {/* infomation */}
      <div className="flex-1 p-12">
        <p className="text-text-color text-xl font-semibold leading-10 mb-16">
          {currentProduct?.product_name || currentProduct?.combo_name}
        </p>

        {!isCombo && (
          <div className="flex mb-16">
            <Star
              readonly
              ratingValue={currentProduct?.star_rating * 20}
              size={18}
              className="mb-12"
            />

            <Divider />

            <p className="text-base">{`${currentProduct?.rating_count || 0} Đánh giá`}</p>

            <Divider />

            <p className="text-base">{`${currentProduct?.sold_quantity || 0} Đã bán`}</p>
          </div>
        )}

        {!isCombo && (
          <p className="text-base mb-16">{`Tồn kho khả dụng: ${
            currentProduct?.stock_quantity?.factor || 0
          }`}</p>
        )}

        <div className="flex h-fit gap-12 items-center mb-16">
          <p className="text-red text-xl font-semibold">
            {formatMoneyVND(currentProduct?.price_unit || 0)}
            {!isCombo && (
              <span className="text-text-color text-sm ml-4">{`/ ${currentProduct?.uom_id?.uom_name}`}</span>
            )}
          </p>

          <p
            className={classNames(
              'text-gray-400 text-base font-medium line-through',
              currentProduct?.price_unit < currentProduct?.origin_price_unit ? '' : 'hidden'
            )}
          >
            {formatMoneyVND(currentProduct?.origin_price_unit || 0)}
          </p>
        </div>

        {/* category */}
        {isObjectHasValue(currentProduct?.category_id) ? (
          <div
            onClick={() => hanldeCateoryClick(currentProduct?.category_id?.category_id)}
            className="flex items-center gap-8 mb-8"
          >
            <p className="text-base font-semibold">Danh mục: </p>

            <p className="text-base cursor-pointer !text-primary">{`${currentProduct?.category_id?.category_name}`}</p>
          </div>
        ) : null}

        {/* attribute */}
        {currentProduct?.attribute_minor_ids?.length > 0 ? (
          <div className="mb-16 overflow-scroll scrollbar-hide">
            {currentProduct?.attribute_minor_ids?.map((attribute) => {
              const filterable = attribute?.filterable

              return (
                <div key={attribute?.attribute_id} className="flex flex-wrap gap-8 mb-8">
                  <p className="title-base font-semibold min-w-fit">
                    {attribute?.attribute_name}:{' '}
                  </p>

                  <div className="flex flex-1 flex-wrap items-center gap-8">
                    {attribute?.value_ids?.map((value) => (
                      <p
                        onClick={() =>
                          hanldeAttributeClick(attribute?.attribute_id, value?.value_id, filterable)
                        }
                        key={value?.value_id}
                        className={`text-base min-w-fit ${
                          filterable ? '!text-primary cursor-pointer active:opacity-50' : ''
                        }`}
                      >
                        {value?.value_name}
                      </p>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        ) : null}

        {/* variant */}
        {data?.rel_attribute_ids?.length > 0 ? (
          <div className="mb-16">
            <ProductVariants
              data={data}
              selectedVariants={currentProduct?.attribute_ids}
              onChangeVariant={handleChangeVariant}
            />
          </div>
        ) : null}

        {/* combo list item */}
        {isCombo && isArrayHasValue(currentProduct?.item_ids) && (
          <div className="mb-16">
            <p className="text-base mb-8">{`Danh sách sản phẩm`}</p>

            <div className="flex flex-wrap gap-12 items-center">
              {currentProduct?.item_ids?.map((item) => (
                <div key={item?.item_id} className="border border-gray-200 rounded-lg w-[150px]">
                  <CustomImage
                    src={item?.product_id?.representation_image?.image_url}
                    className="rounded-lg w-[150px] mb-8 overflow-hidden"
                    imageClassName="rounded-lg object-cover w-[150px] h-[150px]"
                  />

                  <div className="p-4">
                    <p className="h-[40px] text-sm line-clamp-2 w-full mb-8">
                      {`x${item?.quantity} ${item?.product_id?.product_name}`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center gap-12 mb-16">
          <p className="text-base">{`Số lượng`}</p>

          <CustomInputQuantity
            defaultValue={quantity}
            onChangeQuantity={(q: number) => setQuantity(q)}
          />
        </div>

        {!isCombo && (
          <div>
            <Select
              isSearchable={false}
              className="text-base min-w-[80px] border-primary mb-12 w-fit"
              components={{ IndicatorSeparator: () => null }}
              defaultValue={changeProductUomTypeToReactSelectType(data?.uom_id, true)}
              options={data?.rel_uom_ids.map((productUom) =>
                changeProductUomTypeToReactSelectType(productUom, true)
              )}
              onChange={(val: any) => handleChangeProductUom(val)}
            />
          </div>
        )}

        <div className="flex gap-12 items-center">
          <Button
            onClick={() => handleAddToCart(currentProduct)}
            title={isAddingTocart ? '' : 'Chọn mua'}
            icon={isAddingTocart ? <Spinner className="!text-white !fill-primary" /> : undefined}
            className="rounded-[8px] p-8 bg-primary border border-primary min-w-[167px] max-w-[30%]"
            textClassName="text-white text-base"
          />
        </div>
      </div>
    </div>
  )
}
