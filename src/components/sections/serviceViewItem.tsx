import classNames from 'classnames'
import React, { ReactElement } from 'react'

interface ServicePageItemProps {
  className?: string
  icon?: ReactElement
  title?: string
  content?: string

  titleClassName?: string
  contentClassName?: string
}

export const ServiceViewItem = ({
  icon,
  title,
  content,
  className,
  titleClassName,
  contentClassName,
}: ServicePageItemProps) => {
  return (
    <div className={classNames('bg-white flex items-start rounded-lg gap-8 p-12', className)}>
      {icon && icon}

      <div>
        {title && <p className={classNames('text-base font-bold mb-8', titleClassName)}>{title}</p>}

        {content && <p className={classNames('text-base', contentClassName)}>{content}</p>}
      </div>
    </div>
  )
}
