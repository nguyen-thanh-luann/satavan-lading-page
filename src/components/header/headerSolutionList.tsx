import { HEADER_SOLUTIONS_DATA } from '@/document'
import classNames from 'classnames'

interface HeaderSolutionListProps {
  className?: string
  titleClassName?: string
  shortContentClassName?: string
}

export const HeaderSolutionList = ({ className, titleClassName }: HeaderSolutionListProps) => {
  return (
    <div className={classNames('grid grid-cols-1 md:grid-cols-3 gap-16 w-fit', className)}>
      {HEADER_SOLUTIONS_DATA.map((solution, index) => (
        <div key={index} className="flex gap-12">
          <div className="">{solution?.iconHeader}</div>
          <div className="">
            <div className="w-full border-b border-primary">
              <p className={classNames('text-base font-bold mb-8', titleClassName)}>
                {solution?.title}
              </p>
            </div>

            {solution?.list_service?.map((service, index) => (
              <div key={index} className="p-4">
                <p className="text-base">{service?.title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
