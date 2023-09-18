import { PenIconOutline, ThreeDotsIcon, TrashIconOutline } from '@/assets'
import { News } from '@/types'
import { Dropdown, MenuProps } from 'antd'
import classNames from 'classnames'
import React from 'react'

interface NewsAdminItemProps {
  className?: string
  data: News
  onEdit?: (data: News) => void
  onDelete?: (data: News) => void
}

export const NewsAdminItem = ({ className, data, onDelete, onEdit }: NewsAdminItemProps) => {
  const handleEditNews = () => {
    onEdit?.(data)
  }

  const handleDeleteNews = () => {
    onDelete?.(data)
  }

  const options: MenuProps['items'] = [
    {
      key: 1,
      label: 'Edit',
      icon: <PenIconOutline />,
      onClick: () => {
        handleEditNews()
      },
    },
    {
      key: 2,
      label: 'Delete',
      icon: <TrashIconOutline />,
      danger: true,
      onClick: () => {
        handleDeleteNews()
      },
    },
  ]

  return (
    <div className={classNames('flex items-center justify-between p-8', className)}>
      <div className="">
        <p className="text-base line-clamp-1">{data?.title}</p>
      </div>

      <Dropdown placement="bottomRight" menu={{ items: options }}>
        <div className="w-[32px] h-[32px] flex-center rounded-full bg-gray-100 p-8 cursor-pointer">
          <ThreeDotsIcon className="text-gray z-10" />
        </div>
      </Dropdown>
    </div>
  )
}
