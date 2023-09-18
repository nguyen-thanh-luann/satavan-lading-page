import { isArrayHasValue } from '@/helper'
import { ImageId } from '@/types'
import classNames from 'classnames'
import { useState } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import { Swiper, SwiperSlide } from 'swiper/react'
import { twMerge } from 'tailwind-merge'
import { AntImageCustom } from '../antImageCustom'
import { CustomImage } from '../customImage'

interface IProductImage {
  images_ids?: ImageId[]
  representation_image: ImageId
  type: 'modal' | 'detail' | 'variation'
  isStock?: boolean
  className?: string
}

export const ProductImg = ({
  type,
  className,
  representation_image,
  images_ids = [],
}: IProductImage) => {
  const [swiper, setSwiper] = useState<any>({})
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const imageList = [representation_image, ...images_ids]

  return (
    <>
      <div className={twMerge(classNames(`relative ${type === 'modal' ? '' : ''}`, className))}>
        <div className="mb-12">
          <Swiper
            slidesPerView={1}
            loop={false}
            onInit={(ev) => {
              ev.init()
              setSwiper(ev)
            }}
            onSlideChange={(e) => setActiveIndex(e.activeIndex)}
          >
            {isArrayHasValue(imageList)
              ? imageList.map((img, index) => (
                  <SwiperSlide className="cursor-pointer mx-auto" key={index}>
                    <div>
                      <AntImageCustom
                        src={img.image_url}
                        className="rounded-md mx-auto w-fit"
                        imageClassName="rounded-md object-cover aspect-1 mx-auto"
                      />
                    </div>
                  </SwiperSlide>
                ))
              : null}
          </Swiper>
        </div>

        <ScrollContainer mouseScroll={true} className="flex gap-12">
          {imageList.map((img, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  swiper?.slideTo(index)
                }}
                className={`w-[64px] min-w-[64px] border border-gray-300 rounded-lg cursor-pointer duration-150 ease-in-out ${
                  index === activeIndex ? '!border-primary' : ''
                }`}
              >
                <CustomImage
                  src={img?.image_url}
                  className="rounded-lg h-[64px]"
                  imageClassName="rounded-lg aspect-1 object-cover h-[64px]"
                />
              </div>
            )
          })}
        </ScrollContainer>
      </div>
    </>
  )
}

export default ProductImg
