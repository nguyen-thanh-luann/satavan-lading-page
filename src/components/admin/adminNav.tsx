import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'
import { Image } from '../image'
import { logo } from '@/assets'
import { ADMIN_NAV_DATA } from '@/document'
import router from 'next/router'

interface AdminNavProps {
  className?: string
}

export const AdminNav = ({ className }: AdminNavProps) => {
  return (
    <div className={classNames('bg-white h-[100vh] shadow-lg', className)}>
      <div className="p-12">
        <Link href="/">
          <Image
            src={logo}
            className="w-[160px]"
            imageClassName="object-contain w-[160px] h-[56px]"
          />
        </Link>
      </div>

      <div className="px-12">
        {ADMIN_NAV_DATA?.map((item, index) => (
          <div
            onClick={() => {
              router.push(item.path)
            }}
            key={index}
            className={classNames(
              'p-12 cursor-pointer rounded-md group flex items-center gap-4 hover:bg-gray-200',
              item.path === router.pathname ? 'bg-gray-200' : ''
            )}
          >
            <div className="w-24 h-24 flex-center">{item.icon}</div>

            <p className={classNames('text-base', item?.path === router.pathname ? '' : '')}>
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
