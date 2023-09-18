import { CreateNewsParams, UpdateNewsParams } from '@/types'
import classNames from 'classnames'
import React from 'react'

interface NewsFormProps {
  className?: string
  type?: 'create' | 'update'
  onSubmit?: (data: UpdateNewsParams | CreateNewsParams) => void
}

export const NewsForm = ({className}: NewsFormProps) => {
  return <div className={classNames('', className)}>NewsForm</div>
}
