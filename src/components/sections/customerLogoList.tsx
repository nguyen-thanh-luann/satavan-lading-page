import { CUSTOMER_LIST } from '@/document'
import classNames from 'classnames'
import { Image } from '../image'
import Fade from 'react-reveal/Fade'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface CustomerLogoListProps {
  className?: string
}

export const CustomerLogoList = ({ className }: CustomerLogoListProps) => {
  return (
    <div className={classNames('', className)}>
      <div className="grid grid-cols-4 md:grid-cols-6 gap-24">
        {CUSTOMER_LIST?.map((item, index) => (
          <Fade key={index} bottom>
            <div key={index} className="">
              <Image
                key={index}
                src={item?.logo}
                className="max-h-[120px] w-full aspect-1"
                imageClassName="object-contain w-full h-full hover:scale-125 duration-200"
              />
            </div>
          </Fade>
        ))}
      </div>
    </div>
  )
}
