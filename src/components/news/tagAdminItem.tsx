import { PenIconOutline, ThreeDotsIcon, TrashIconOutline } from '@/assets'
import { Tag } from '@/types'
import type { MenuProps } from 'antd'
import { Checkbox, Dropdown } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import classNames from 'classnames'

interface TagAdminItemProps {
  className?: string
  data: Tag
  tagIconClassName?: string
  tagIconContainer?: string
  onEdit?: (data: Tag) => void
  onDelete?: (data: Tag) => void
  onCheck?: (data: Tag) => void
  onUnCheck?: (data: Tag) => void
}

export const TagAdminItem = ({
  data,
  className,
  onEdit,
  onDelete,
  onCheck,
  onUnCheck,
}: TagAdminItemProps) => {
  const handleEditTag = () => {
    onEdit?.(data)
  }

  const handleDeleteTag = () => {
    onDelete?.(data)
  }

  const hanldeCheckTag = (e: CheckboxChangeEvent) => {
    if (e?.target?.checked) {
      onCheck?.(data)
    } else {
      onUnCheck?.(data)
    }
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
    <div className={classNames('flex items-center justify-between p-8', className)}>
      <div className="">
        <Checkbox onChange={hanldeCheckTag}>
          <p className="text-base line-clamp-1">{data?.tag_name}</p>
        </Checkbox>
      </div>

      <Dropdown placement="bottomRight" menu={{ items: options }}>
        <div className="w-[32px] h-[32px] flex-center rounded-full bg-gray-100 p-8 cursor-pointer">
          <ThreeDotsIcon className="text-gray z-10" />
        </div>
      </Dropdown>
    </div>
  )
}
