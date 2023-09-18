import { PenIconOutline, ThreeDotsIcon, TrashIconOutline } from '@/assets'
import { NewsCategory } from '@/types'
import classNames from 'classnames'
import React from 'react'
import type { MenuProps } from 'antd'
import { Dropdown } from 'antd'

interface NewsCategoryAdminItemProps {
  className?: string
  data: NewsCategory
  onDelete?: (props: NewsCategory) => void
  onEdit?: (props: NewsCategory) => void
}

export const NewsCategoryAdminItem = ({
  className,
  data,
  onDelete,
  onEdit,
}: NewsCategoryAdminItemProps) => {
  const handleEditTag = () => {
    onEdit?.(data)
  }

  const handleDeleteTag = () => {
    onDelete?.(data)
  }

  const options: MenuProps['items'] = [
    {
      key: 1,
      label: 'Edit',
      icon: <PenIconOutline />,
      onClick: () => {
        handleEditTag()
      },
    },
    {
      key: 2,
      label: 'Delete',
      icon: <TrashIconOutline />,
      danger: true,
      onClick: () => {
        handleDeleteTag()
      },
    },
  ]

  return (
    <div className={classNames('p-8 flex items-center justify-between', className)}>
      <p className="text-base line-clamp-1">{data?.category_name}</p>

      <Dropdown placement="bottomRight" menu={{ items: options }}>
        <div className="w-[32px] h-[32px] flex-center rounded-full bg-gray-100 p-8 cursor-pointer">
          <ThreeDotsIcon className="text-gray z-10" />
        </div>
      </Dropdown>

      {/* <div
        onClick={() => {
          onDelete?.(data)
        }}
      >
        <TrashIconOutline className="text-red cursor-pointer" />
      </div> */}
    </div>
  )
}
