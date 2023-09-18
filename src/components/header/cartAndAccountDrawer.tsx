import { CartIcon, LogoutIconOutline, UserCircleIcon } from '@/assets'
import classNames from 'classnames'
import React from 'react'
import Fade from 'react-reveal/Fade'
import { Badge, Dropdown } from 'antd'
import type { MenuProps } from 'antd'
import useSWR from 'swr'
import { STATIC_PATH, SWR_KEY } from '@/constants'
import { cartAPI } from '@/services'
import router from 'next/router'
import { toast } from 'react-hot-toast'
import { useAuth, useModal, useUser } from '@/hooks'
import { CustomImage } from '../customImage'
import { ModalConfirm } from '../modal'

interface CartAndAccountDrawerProps {
  className?: string
}

export const CartAndAccountDrawer = ({ className }: CartAndAccountDrawerProps) => {
  const { data: cartLength } = useSWR(SWR_KEY.cart_count, () =>
    cartAPI.getCartLength().then((res) => res?.data?.cart_product_count || 0)
  )
  const { userInfo } = useUser({})  

  const { logout } = useAuth()

  const { closeModal, openModal, visible: showModalConfirm } = useModal()

  const hanldeLogout = () => {
    logout(() => {
      closeModal()
      router.push('/')
    })
  }

  const handleCartClick = () => {
    router.push(STATIC_PATH.shoppingCart)
  }

  const accountOption: MenuProps['items'] = [
    {
      key: 1,
      label: 'Trang cá nhân',
      icon: <UserCircleIcon className="w-18 h-18" />,
      onClick: () => {
        toast.success('Comming soon!')
      },
    },
    {
      key: 2,
      label: 'Đăng xuất',
      icon: <LogoutIconOutline className="w-18 h-18" />,
      danger: true,
      onClick: () => {
        openModal()
      },
    },
  ]

  return (
    <>
      <Fade right>
        <div
          className={classNames('rounded-full bg-gray-100 gap-12 p-4 flex items-center', className)}
        >
          <div
            onClick={handleCartClick}
            className="flex-center w-36 h-36 hover:bg-gray-200 rounded-full cursor-pointer"
          >
            <Badge count={cartLength} showZero size="small">
              <CartIcon className="text-xl" />
            </Badge>
          </div>

          {userInfo ? (
            <Dropdown placement="bottomRight" menu={{ items: accountOption }}>
              <div className="cursor-pointer">
                <CustomImage
                  src={userInfo?.account?.avatar_url?.url || ''}
                  imageClassName="w-36 h-36 object-cover rounded-full"
                />
              </div>
            </Dropdown>
          ) : (
            <div
              onClick={() => {
                router.push(STATIC_PATH.login)
              }}
              className="flex-center w-36 h-36 hover:bg-gray-200 rounded-full cursor-pointer"
            >
              <UserCircleIcon className="text-xl" />
            </div>
          )}
        </div>
      </Fade>

      <ModalConfirm
        visible={showModalConfirm}
        title="Bạn có chắc muốn đăng xuất?"
        onConfirm={hanldeLogout}
        onDeny={closeModal}
      />
    </>
  )
}
