import { REASON_CHOOSE_US } from '@/document'
import classNames from 'classnames'
import React from 'react'
import { Image } from '../image'

interface ReasonChooseUsProps {
  className?: string
}

export const ReasonChooseUs = ({ className }: ReasonChooseUsProps) => {
  return (
    <div className={classNames('px-12 py-32', className)}>
      <p className="text-center text-xl font-bold mb-32">Tại sao chọn chúng tôi?</p>

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {REASON_CHOOSE_US?.map((item, index) => (
            <div key={index} className="flex items-start gap-8">
              <Image
                src={item.icon}
                imageClassName="min-w-[42px] w-[42px] h-[42px] object-contain"
                className="w-[42px]"
              />

              <div>
                <p className="text-base font-bold mb-8">{item?.title}</p>

                <p className="text-sm text-gray">{item?.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
