import classNames from 'classnames'
import React from 'react'
import { Image } from '../image'
import { multiTask } from '@/assets'
import { MULTI_TASK_INTRO } from '@/document'
import Fade from 'react-reveal/Fade'


interface MultiTaskIntroSectionProps {
  className?: string
}

export const MultiTaskIntroSection = ({className}: MultiTaskIntroSectionProps) => {
  return (
    <div className={classNames('grid grid-cols-1 md:grid-cols-2 gap-12', className)}>
      <div>
        <Image
          src={multiTask}
          imageClassName="object-contain aspect-1 w-full h-[300px] md:h-[450px]"
          className=""
        />
      </div>
      <div>
        <p className="text-center text-2xl md:text-3xl mb-12">
          Nền tảng tích hợp đa nhiệm
        </p>
        <p className='text-center text-base md:text-md mb-12'>Sức mạnh của tự động hóa tất cả người dùng, trên các chức năng và ứng dụng kinh doanh</p>
        {MULTI_TASK_INTRO.map((item, index) => (
          <Fade bottom key={index}>
            <div key={index} className="flex gap-12 items-start mb-12 last:mb-0">
              <div className="min-w-[60px] w-[60px] h-[60px]">{item.icon}</div>
              <div>
                <p className="text-lg md:text-xl font-bold">{item.title}</p>
                <p className="text-base text-gray">{item.content}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  )
}
