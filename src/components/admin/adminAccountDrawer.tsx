import { LogoutIconOutline, UserCircleIcon } from '@/assets'
import { STATIC_PATH } from '@/constants'
import { useAuth, useModal, useUser } from '@/hooks'
import classNames from 'classnames'
import router from 'next/router'
import { toast } from 'react-hot-toast'
import { CustomImage } from '../customImage'
import { ModalConfirm } from '../modal'
import type { MenuProps } from 'antd'
import { Dropdown } from 'antd'

interface AccountDrawerProps {
  className?: string
}

export const AdminAccountDrawer = ({ className }: AccountDrawerProps) => {
  const { userInfo } = useUser({})
  const { logout } = useAuth()
  const { closeModal, openModal, visible: showModalConfirm } = useModal()

  const hanldeLogout = () => {
    logout(() => {
      closeModal()
      router.push(STATIC_PATH.login)
    })
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
    <div className={classNames('', className)}>
      <div className="relative">
        <Dropdown placement="bottomRight" menu={{ items: accountOption }}>
          <div className="">
            <CustomImage
              src={userInfo?.account?.avatar_url?.image_url || ''}
              imageClassName="rounded-full w-[36px] h-[36px]"
              className="cursor-pointer"
            />
          </div>
        </Dropdown>

        <ModalConfirm
          visible={showModalConfirm}
          title="Bạn có chắc muốn đăng xuất?"
          onConfirm={hanldeLogout}
          onDeny={closeModal}
        />
      </div>
    </div>
  )
}
