import classNames from 'classnames'
import React from 'react'

interface NewsItemHorizontalLoadingProps {
  titleClassName?: string
  contentClassName?: string
  imageClassName?: string
  className?: string
}

export const NewsItemHorizontalLoading = ({titleClassName, imageClassName, contentClassName, className}: NewsItemHorizontalLoadingProps) => {
  return (
    <div className={classNames('animate-pulse rounded-md bg-white flex gap-12', className)}>
      <div className={classNames('rounded-lg h-[70px] w-[70px] bg-gray-300', imageClassName)}></div>
      <div className="">
        <div
          className={classNames('w-[150px] mb-12 h-[10px] rounded-md bg-gray-300', titleClassName)}
        ></div>
        <div
          className={classNames('w-[30%] mb-12 h-[10px] rounded-md bg-gray-300', contentClassName)}
        ></div>
      </div>
    </div>
  )
}
