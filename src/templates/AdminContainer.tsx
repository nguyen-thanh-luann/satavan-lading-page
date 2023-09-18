import { AdminHeader, AdminNav } from '@/components'
import classNames from 'classnames'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface AdminContainerProps {
  children: ReactNode
  className?: string
}

export const AdminContainer = ({ children, className }: AdminContainerProps) => {
  return (
    <div className={twMerge(classNames(`flex`, className))}>
      <div className="w-fit min-w-[250px] h-[100vh]">
        <AdminNav />
      </div>

      <div className="flex-1 relative h-[100vh] overflow-scroll scrollbar-hide">
        <AdminHeader className="sticky top-0 z-[99]" />

        <div className="">{children}</div>
      </div>
    </div>
  )
}
