import { DEFAULT_LIMIT, SWR_KEY } from '@/constants'
import { isArrayHasValue } from '@/helper'
import { useNews } from '@/hooks'
import classNames from 'classnames'
import React from 'react'
import { NewsItemHorizontalLoading } from './newsItemHorizontalLoading'
import { NewsItemHorizontal } from './newsItemHorizontal'
import Fade from 'react-reveal/Fade'

import { Pagination } from 'antd'


interface RelatedNewsProps {
  category_id: number
  className?: string
}

export const RelatedNews = ({ category_id, className }: RelatedNewsProps) => {
  const { data: newsList, isValidating: isLoadingNewsList, total, paginate } = useNews({
    key: `${SWR_KEY.news}`,
    params: {
      category_id,
      limit: DEFAULT_LIMIT,
    },
  })

  if (!isArrayHasValue(newsList)) return null

  return (
    <div className={classNames('', className)}>
      <p className="text-xl uppercase font-bold border-b-2 border-primary w-fit text-primary-gradient mb-12">
        Bài viết Liên quan
      </p>

      {isLoadingNewsList
        ? Array.from({ length: DEFAULT_LIMIT })?.map((_, index) => (
            <NewsItemHorizontalLoading key={index} className="mb-12 last:mb-0" />
          ))
        : newsList?.map((news) => (
            <Fade key={news.new_id} bottom>
              <NewsItemHorizontal
                key={news.new_id}
                data={news}
                className="mb-12 last:mb-0 border-b border-gray-200 last:border-none py-12"
                imageClassName="min-w-[150px] w-[150px]"
              />
            </Fade>
          ))}

      <div className="flex-center">
        <Pagination
          defaultCurrent={1}
          total={total}
          onChange={(page) => {
            paginate({
              page,
            })
          }}
        />
      </div>
    </div>
  )
}
