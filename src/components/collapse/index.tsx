import { useModal } from '@/hooks'
import classNames from 'classnames'
import React, { ReactElement } from 'react'

interface CollapseProps {
  label: ReactElement
  children: ReactElement
  expandIcon?: ReactElement
  contractIcon?: ReactElement

  iconPosition?: 'left' | 'right'
  className?: string
  labelClassName?: string

  defaultExpand?: boolean
}

export const Collapse = ({
  label,
  children,
  className,
  defaultExpand = false,
  iconPosition = 'left',
  expandIcon,
  contractIcon,
  labelClassName,
}: CollapseProps) => {
  const { visible, toggle } = useModal(defaultExpand)

  return (
    <div onClick={toggle} className={classNames('animate-fade cursor-pointer', className)}>
      <div className={classNames('flex items-center gap-8', labelClassName)}>
        {iconPosition === 'left' && !visible && <div className="animate-fade">{expandIcon}</div>}
        {iconPosition === 'left' && visible && <div className="animate-fade">{contractIcon}</div>}

        <div className="flex-1">{label}</div>

        {iconPosition === 'right' && !visible && <div className="animate-fade">{expandIcon}</div>}
        {iconPosition === 'right' && visible && <div className="animate-fade">{contractIcon}</div>}
      </div>

      <div className={classNames('animate-fade', visible ? 'block' : 'hidden')}>{children}</div>
    </div>
  )
}
