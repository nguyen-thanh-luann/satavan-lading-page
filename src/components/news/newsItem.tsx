import { News } from '@/types'
import classNames from 'classnames'
import moment from 'moment'
require('moment/locale/vi')

import { generateProductSlug } from '@/helper'
import { useRouter } from 'next/router'
import { twMerge } from 'tailwind-merge'
import { CustomImage } from '../customImage'
import { STATIC_PATH } from '@/constants'

interface NewsItemProps {
  data: News
  className?: string
  imageClassName?: string
  imagePhotoClassName?: string
  titleClassName?: string
  shortContentClassName?: string
}

export const NewsItem = ({
  data,
  className,
  imageClassName,
  imagePhotoClassName,
  titleClassName,
  shortContentClassName,
}: NewsItemProps) => {
  const newsSlug = `${generateProductSlug(data?.title, data?.new_id)}`

  const router = useRouter()
  return (
    <div className={twMerge(classNames(`group border border-gray-200 shadow-sm bg-white rounded-[10px] overflow-hidden`, className))}>
      <div
        onClick={() => {
          router.push({
            pathname: STATIC_PATH.newsDetail,
            query: {
              id: newsSlug,
            },
          })
        }}
        className="cursor-pointer"
      >
        <CustomImage
          src={data?.banner_cloud_storage_id?.url}
          imageClassName={classNames(
            'object-cover aspect-1 rounded-tl-lg rounded-tr-lg hover:scale-110 duration-200 ease-in-out',
            imageClassName
          )}
          className={classNames(
            'h-[210px] overflow-hidden rounded-tl-lg rounded-tr-lg mb-12',
            imagePhotoClassName
          )}
        />

        <div className="p-12">
          <p className="text-gray text-sm mb-8 capitalize">
            {moment(data?.release_date).locale('vi').format('dddd, DD/MM/YYYY')}
          </p>
          <p
            className={classNames(
              'text-text-color font-bold text-md mb-8 line-clamp-2 h-[50px] group-hover:text-primary-gradient duration-200 ease-in-out',
              titleClassName
            )}
          >
            {data?.title}
          </p>
          <p
            className={classNames('text-text-color text-base line-clamp-2', shortContentClassName)}
          >
            {data?.short_content}
          </p>
        </div>
      </div>
    </div>
  )
}
