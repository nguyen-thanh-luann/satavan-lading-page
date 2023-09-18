import React from 'react'
import { Image } from '../image'
import { mapVietNam } from '@/assets'
import { BUSINESS_RESULT } from '@/document'
import Fade from 'react-reveal/Fade'

export const BusinessResultSection = () => {
  return (
    <div className="bg-secondary">
      <div className="container py-32 px-12 grid grid-cols-1 md:grid-cols-2">
        <div className="">
          <p className="text-2xl md:text-3xl text-center md:text-start text-primary-gradient mb-12">
            Satavan luôn đồng hành cùng bạn
          </p>
          <p className="text-3xl md:text-4xl font-bold mb-12 text-center md:text-start">
            Trên hành trình lập nghiệp kinh doanh đầy tự hào.
          </p>

          <div className="grid grid-cols-2 gap-24 md:gap-32">
            {BUSINESS_RESULT?.map((item, index) => (
              <Fade key={index} bottom>
                <div
                  key={index}
                  className="bg-white rounded-lg p-12 md:p-24 flex flex-col items-center justify-center"
                >
                  <div className="mb-8 w-[50px] h-[50px]">{item.icon}</div>

                  <p className="text-3xl font-bold mb-8 text-center">{item.title}</p>
                  <p className="text-md text-center">{item.content}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
        <div className="relative">
          <Image
            src={mapVietNam}
            imageClassName="object-contain w-full aspect-1"
            className="absolute"
          />
        </div>
      </div>
    </div>
  )
}
