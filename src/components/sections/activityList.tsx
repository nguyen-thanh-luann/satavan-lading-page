import { ACTIVITIES } from '@/document'
import classNames from 'classnames'
import React from 'react'
import { Image } from '../image'
import Fade from 'react-reveal/Fade'

interface ActivityListProps {
  className?: string
}

export const ActivityList = ({ className }: ActivityListProps) => {
  return (
    <div className={classNames('grid grid-cols-2 md:grid-cols-4 gap-16', className)}>
      {ACTIVITIES?.map((item, index) => (
        <Fade bottom key={index}>
          <div key={index} className="overflow-hidden rounded-lg">
            <Image
              src={item?.image}
              imageClassName="object-cover rounded-lg aspect-1 hover:scale-150 duration-200"
            />
          </div>
        </Fade>
      ))}
    </div>
  )
}
