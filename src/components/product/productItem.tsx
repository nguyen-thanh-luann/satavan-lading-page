import { DOMAIN_URL } from '@/constants'
import {
  formatMoneyVND,
  generateProductSlug,
  isObjectHasValue,
} from '@/helper'
import { useAddToCart, useModal, useUser } from '@/hooks'
import { setProduct } from '@/store'
import { Product } from '@/types'
import { Tooltip } from 'antd'
import classNames from 'classnames'
import router from 'next/router'
import { useDispatch } from 'react-redux'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { twMerge } from 'tailwind-merge'
import { CustomImage } from '../customImage'
import { ModalProductDetail } from '../modal'
import { Star } from '../star'
import { ProductItemLoading } from './productItemLoading'
import { Spinner } from '../spinner'
import { ProductCartIcon } from '@/assets'

interface ProductItemProps {
  data: Product
  className?: string
  isLoading?: boolean
}

type properyType = 'attribute' | 'category'

export interface ProductPropertyClick {
  type: properyType
  category_id?: number
  attribute_id?: number
  attribute_value_id?: number
}

export const ProductItem = ({ data, className, isLoading }: ProductItemProps) => {
  const isCombo = data?.product_type === 'combo'
  const productSlug = !isCombo
    ? `/${generateProductSlug(data?.product_name, data?.product_id)}`
    : `/combo/${generateProductSlug(data?.combo_name, data?.combo_id)}`

  const dispatch = useDispatch()

  const { addToCart, isAddingTocart } = useAddToCart()
  const { userInfo } = useUser({ })

  const {
    visible: showProductDetailModal,
    closeModal: closeProductDetailModal,
    openModal: openProductDetailModal,
  } = useModal()

  const handleAddToCart = (product: Product) => {
    if (isAddingTocart) return

    if (!userInfo?.account?.partner_id) {
      router.push(`${DOMAIN_URL}/login`)
      return
    }

    if (product.has_variant) {
      hanldeOpenModalDetail()
    } else {
      addToCart(product)
    }
  }

  const hanldeOpenModalDetail = () => {
    dispatch(setProduct(data))
    openProductDetailModal()
  }

  const hanldeCloseModalDetail = () => {
    dispatch(setProduct(undefined))
    closeProductDetailModal()
  }

  const onProductClick = () => {
    router.push(productSlug)
  }

  return (
    <>
      {!isLoading && isObjectHasValue(data) ? (
        <div
          className={twMerge(
            classNames(
              'product-item rounded-[6px] bg-product-item-background hover:shadow-shadow-3 overflow-hidden duration-200 ease-in-out border border-gray-100 hover:box-shadow-sm',
              className
            )
          )}
        >
          {/* image group */}
          <div className="relative">
            <div
              onClick={onProductClick}
              className="mb-8 rounded-tl-[6px] rounded-tr-[6px] max-h-[230px] relative overflow-hidden cursor-pointer"
            >
              <CustomImage
                src={
                  !isCombo
                    ? data?.representation_image?.image_url
                    : data?.attachment_cloud_id?.image_url
                }
                imageClassName="object-contain w-full h-full hover:scale-110 duration-200 ease-in-out aspect-[2/1]"
                className="aspect-[2/1]"
              />
            </div>
          </div>

          {/*product info*/}
          <div className="px-8 md:px-16 pb-8 md:pb-16 relative">
            <Tooltip title={data?.product_name || data?.combo_name} open={false}>
              <div onClick={onProductClick} className="relative group cursor-pointer w-full">
                <p className="h-[45px] line-clamp-2 w-full text-text-color text-base font-bold mb-8 group-hover:text-primary duration-200 ease-in-out">
                  {data?.product_name || data?.combo_name}
                </p>
              </div>
            </Tooltip>

            <div className="relative">
              {/* price */}
              <div className="mb-8 flex items-center">
                <div className="flex items-center flex-1 flex-wrap">
                  <p className="text-orange text-base font-bold leading-9 mr-10">
                    {formatMoneyVND(data?.price_unit || 0)}
                  </p>
                </div>

                <div
                  onClick={() => handleAddToCart(data)}
                  className=" bg-primary h-[30px] w-[30px] min-w-[30px] rounded-full flex-center cursor-pointer"
                >
                  {isAddingTocart ? (
                    <Spinner className="!text-primary !fill-white" />
                  ) : (
                    <ProductCartIcon className="text-white w-16 h-16" />
                  )}
                </div>
              </div>

              {/*rate & sale count */}
              <div className="flex items-end flex-wrap">
                <p className="text-gray-300 text-xs font-bold">
                  {`Đã bán: ${data?.sold_quantity || 0}`}
                </p>

                {!isCombo && <div className="mx-6 w-0 h-14 border border-gray-200"></div>}

                {!isCombo && <Star readonly ratingValue={data?.star_rating * 20} size={14} />}
              </div>
            </div>
          </div>

          <ModalProductDetail isOpen={showProductDetailModal} onClose={hanldeCloseModalDetail} />
        </div>
      ) : (
        <ProductItemLoading />
      )}
    </>
  )
}
