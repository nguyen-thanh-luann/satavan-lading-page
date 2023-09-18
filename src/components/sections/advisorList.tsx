import { ADVISOR_BOARD } from '@/document'
import classNames from 'classnames'
import { Image } from '../image'
import Fade from 'react-reveal/Fade'


interface AdvisorListProps {
  className?: string
}

export const AdvisorList = ({ className }: AdvisorListProps) => {
  return (
    <div className={classNames('advisor-list grid grid-cols-1 md:grid-cols-2 gap-12', className)}>
      {ADVISOR_BOARD?.map((item, index) => (
        <Fade bottom key={index}>
          <div
            key={index}
            className={classNames(
              `bg-white p-24 border border-gray-100 border-t-[5px] rounded-xl`,
              item.decorColor
            )}
          >
            <div className="flex items-center gap-12 mb-12 ">
              <Image
                src={item?.image}
                imageClassName="object-cover rounded-full aspect-1 min-w-[60px] w-[60px]"
                className=""
              />

              <p className="text-2xl text-center mb-8">{item?.name}</p>
            </div>

            <div className="p-12">{item?.story}</div>
          </div>
        </Fade>
      ))}
    </div>
  )
}
