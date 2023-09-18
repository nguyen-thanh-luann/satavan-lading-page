import { ReactNode } from 'react'

import { Backdrop } from '@/components'
import type { MetaProps } from '@/layouts'
import { Meta } from '@/layouts'
import { Toaster } from 'react-hot-toast'

type IMainProps = MetaProps & {
  children: ReactNode
}

export const MainNoFooterAndHeader = ({ children, ...attributes }: IMainProps) => {
  return (
    <div className="w-full text-gray-700 antialiased bg-background">
      <Meta {...attributes} />

      <Backdrop />

      <Toaster
        position="top-center"
        reverseOrder={true}
        toastOptions={{
          duration: 2000,
          style: {
            fontSize: '1.4rem',
          },
        }}
      />

      <div className="mb-bottom_nav_height md:mb-0">{children}</div>

      {/* <ContactOptions /> */}
    </div>
  )
}
