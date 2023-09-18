import { useClickOutside } from '@/hooks'
import classNames from 'classnames'
import { ReactElement, useRef } from 'react'

interface BottomSheetProps {
  children: ReactElement
  className?: string
  containerClassName?: string
  childrenClassName?: string
  onClickOutside?: () => void
}

export const BottomSheet = ({
  className,
  children,
  containerClassName,
  childrenClassName,
  onClickOutside,
}: BottomSheetProps) => {
  const childrenRef = useRef<HTMLDivElement>(null)

  useClickOutside([childrenRef], () => {
    onClickOutside?.()
  })

  return (
    <div className={classNames('fixed w-full z-[1000] bottom-0', className)}>
      <div
        className={classNames('relative h-[100vh] bg-black-400 animate-fade', containerClassName)}
      >
        <div
          ref={childrenRef}
          className={classNames(
            'absolute bottom-0 p-12 bg-white min-h-[150px] w-full rounded-tl-2xl rounded-tr-2xl animate-fade',
            childrenClassName
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
