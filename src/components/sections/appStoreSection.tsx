import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'
import { Image } from '../image'
import { downloadAppStore, downloadGooglePlay } from '@/assets'

interface AppStoreSectionProps {
  className?: string
}

export const AppStoreSection = ({className}: AppStoreSectionProps) => {
  return (
    <div className={classNames('', className)}>
      <p className="text-center text-2xl md:text-3xl text-white font-bold mb-12">
        Ứng dụng Satavan service đã có mặt trên các nền tảng
      </p>
      <div className="flex flex-wrap justify-center gap-12 items-center">
        <Link href="https://play.google.com/store/apps/details?id=com.satavan.app" target="_blank">
          <Image
            src={downloadAppStore}
            className=""
            imageClassName="object-contain w-[200px] h-[50px]"
          />
        </Link>

        <Link href="https://play.google.com/store/apps/details?id=com.satavan.app" target="_blank">
          <Image
            src={downloadGooglePlay}
            className=""
            imageClassName="object-contain w-[200px] h-[50px]"
          />
        </Link>
      </div>
    </div>
  )
}
