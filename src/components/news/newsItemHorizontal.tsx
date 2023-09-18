import { News } from '@/types'
import classNames from 'classnames'
import React from 'react'
import { CustomImage } from '../customImage'
import router from 'next/router'
import { generateProductSlug } from '@/helper'
import { STATIC_PATH } from '@/constants'

interface NewsItemHorizontalProps {
  data: News
  className?: string
  imageClassName?: string
  titleClassName?: string
  contentClassName?: string
}

export const NewsItemHorizontal = ({
  data,
  className,
  imageClassName,
  contentClassName,
  titleClassName,
}: NewsItemHorizontalProps) => {
  const handleClick = () => {
    router.push({
      pathname: STATIC_PATH.newsDetail,
      query: {
        id: `${generateProductSlug(data?.title, data?.new_id)}`,
      },
    })
  }

  return (
    <div className={classNames('flex gap-16', className)}>
      <CustomImage
        onClick={handleClick}
        src={data?.banner_cloud_storage_id?.image_url}
        imageClassName={classNames('object-cover w-[150px] cursor-pointer rounded-lg', imageClassName)}
      />

      <div>
        <p
          onClick={handleClick}
          className={classNames(
            'text-base font-bold mb-8 cursor-pointer hover:text-primary duration-200 line-clamp-2',
            titleClassName
          )}
        >
          {data?.title}
        </p>

        <p className={classNames('text-sm text-gray line-clamp-2', contentClassName)}>
          {data?.short_content}
        </p>
      </div>
    </div>
  )
}
