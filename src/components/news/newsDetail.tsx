import { NewsDetail as INewsDetail } from '@/types'
import classNames from 'classnames'
import React from 'react'
import moment from 'moment'
require('moment/locale/vi')

interface NewDetailProps {
  className?: string
  data: INewsDetail
}

export const NewsDetail = ({className, data}: NewDetailProps) => {
  return (
    <div className={classNames('post-content', className)}>
      <p className="text-2xl md:text-3xl font-bold mb-12">{data?.title}</p>

      <p className="text-base text-gray capitalize mb-8">
        {moment(data?.release_date).locale('vi').format('dddd, DD/MM/YYYY')}
      </p>

      <div dangerouslySetInnerHTML={{ __html: data?.content + '' }}></div>
    </div>
  )
}
