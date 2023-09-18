import { HEADER_JOBS_DATA } from '@/document'
import classNames from 'classnames'

interface HeaderJobListProps {
  className?: string
  titleClassName?: string
  shortContentClassName?: string
}

export const HeaderJobList = ({
  className,
  titleClassName,
  shortContentClassName,
}: HeaderJobListProps) => {
  return (
    <div className={classNames('grid grid-cols-1 md:grid-cols-2 gap-16', className)}>
      {HEADER_JOBS_DATA.map((job, index) => (
        <div key={index} className="flex gap-12">

          <div className=''>
            {job.iconHeader}
          </div>

          <div className="">
            <p className={classNames('text-base font-bold', titleClassName)}>{job?.title}</p>
            <p className={classNames('text-sm text-gray', shortContentClassName)}>
              {job?.short_content}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
