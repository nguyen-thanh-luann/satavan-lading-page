import {
  FeatherOutlineIcon,
  SettingIconOutline,
  TelePhoneIconOutline,
  UserCircleIcon,
} from '@/assets'
import { STATIC_PATH } from '@/constants'
import { SERVICE_LIST } from '@/document'
import classNames from 'classnames'
import router from 'next/router'
import { Button } from '../button'

interface HeaderServiceListProps {
  className?: string
  titleClassName?: string
  shortContentClassName?: string
}

export const HeaderServiceList = ({
  className,
  titleClassName,
  shortContentClassName,
}: HeaderServiceListProps) => {
  return (
    <div className={classNames('', className)}>
      <p className="text-sm text-primary-gradient font-bold mb-12">Dịch vụ</p>

      <div
        className={classNames(
          'grid grid-cols-1 md:grid-cols-2 max-h-[400px] overflow-auto scrollbar-hide gap-16 mb-12'
        )}
      >
        {SERVICE_LIST.map((service, index) => (
          <div
            key={index}
            onClick={() => {
              router.push(service?.path || '/')
            }}
            className="flex gap-16 cursor-pointer"
          >
            <div className="mb-12">{service?.iconHeader}</div>
            <div className="">
              <p className={classNames('text-base font-bold hover:text-primary-gradient', titleClassName)}>{service?.title}</p>
              <p className={classNames('text-sm text-gray', shortContentClassName)}>
                {service?.short_content}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm text-primary-gradient font-bold mb-12">Liên kết khác</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-12">
        <div className="flex items-center gap-12">
          <FeatherOutlineIcon />

          <p className="text-sm">Blog</p>
        </div>

        <div className="flex items-center gap-12">
          <TelePhoneIconOutline />

          <p className="text-sm">Liên hệ với chúng tôi</p>
        </div>

        <div className="flex items-center gap-12">
          <SettingIconOutline />

          <p className="text-sm">Công cụ miễn phí</p>
        </div>

        <div className="flex items-center gap-12">
          <UserCircleIcon />

          <p className="text-sm">Về chúng tôi</p>
        </div>
      </div>

      <div className="flex-center">
        <Button
          title="Tất cả dịch vụ"
          onClick={() => {
            router.push(STATIC_PATH.service)
          }}
          className="bg-primary-100 py-4 px-12"
          textClassName="text-primary-gradient font-bold text-sm"
        />
      </div>
    </div>
  )
}
