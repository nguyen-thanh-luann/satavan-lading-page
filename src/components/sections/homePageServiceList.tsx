import { SERVICE_LIST } from '@/document'
import classNames from 'classnames'
import React from 'react'
import { Image } from '../image'
import { Button } from '../button'
import router from 'next/router'
import { STATIC_PATH } from '@/constants'
import Fade from 'react-reveal/Fade'

interface HomePageServiceListProps {
  className?: string
}

export const HomePageServiceList = ({ className }: HomePageServiceListProps) => {
  return (
    <div
      className={classNames(
        'bg-home-services-background bg-cover bg-no-repeat bg-center p-12',
        className
      )}
    >
      <div className="container">
        <div className="flex-center">
          <Button
            title="Đối với Odoo"
            className="rounded-lg bg-primary-gradient-100 p-8 my-16"
            textClassName="text-primary-gradient text-sm font-bold"
            disabled
          />
        </div>

        <p className="text-center text-2xl mb-16">Dịch vụ của chúng tôi</p>

        <p className="text-center text-base text-gray mb-16">
          Rất nhiều dịch vụ Odoo giúp bạn nâng cao công việc kinh doanh tuyệt vời của mình.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-16">
          {SERVICE_LIST?.map((item, index) => (
            <Fade key={index} bottom>
              <div
                key={index}
                className={classNames(
                  `relative group bg-white border border-gray-100 hover:shadow-md rounded-xl w-[350px] h-[320px] animate-fade`
                )}
              >
                <div className="absolute top-0 bottom-0 right-0 left-0 z-50  flex flex-col items-center justify-center p-12 animate-fade">
                  <div className="mb-12">{item?.iconHome}</div>

                  <p className="text-base text-center font-bold mb-16">{item.title}</p>
                  <p className="text-sm text-center text-gray group-hover:text-black mb-16">
                    {item.full_content}
                  </p>

                  <div className="animate-fade h-[40px]">
                    <Button
                      title="Xem thêm"
                      className="rounded-lg bg-primary-gradient h-[40px] px-8 !hidden group-hover:!block animate-fade"
                      textClassName="text-white"
                      onClick={() => {
                        router.push(item?.path || '/')
                      }}
                    />
                  </div>
                </div>

                <div
                  className={classNames(
                    'absolute hidden group-hover:block animate-fade z-10 top-0 bottom-0 left-0 right-0'
                  )}
                >
                  <Image
                    src={item?.background}
                    imageClassName="w-full h-full object-contain opacity-30"
                  />
                </div>
              </div>
            </Fade>
          ))}
        </div>

        <div className="flex-center my-16">
          <Button
            title="Xem tất cả dịch vụ"
            className="rounded-lg bg-primary-gradient p-8"
            textClassName="text-white"
            onClick={() => {
              router.push(STATIC_PATH.service)
            }}
          />
        </div>
      </div>
    </div>
  )
}
