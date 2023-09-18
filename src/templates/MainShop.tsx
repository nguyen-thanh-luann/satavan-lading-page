import { ReactNode } from 'react'

import { Backdrop, ContactOptions, Footer, HeaderShop, HeaderShopMobile } from '@/components'
import type { MetaProps } from '@/layouts'
import { Meta } from '@/layouts'
import { Toaster } from 'react-hot-toast'

type IMainShopProps = MetaProps & {
  children: ReactNode
}

export const MainShop = ({ children, ...attributes }: IMainShopProps) => {
  return (
    <div className="w-full text-gray-700 antialiased bg-background">
      <Meta {...attributes} />

      <div className="sticky z-[99] bg-white">
        <HeaderShop className="hidden xl:flex" />

        <HeaderShopMobile className="flex xl:hidden" />

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

        <ContactOptions />
      </div>

      <div className="md:sticky md:bottom-0 z-[10]">
        <Footer />
      </div>
    </div>
  )
}
