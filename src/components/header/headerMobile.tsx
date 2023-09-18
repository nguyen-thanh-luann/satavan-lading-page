import { MenuIcon, RightIcon, TimesIcon, logo } from '@/assets'
import { useClickOutside, useModal } from '@/hooks'
import classNames from 'classnames'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { Image } from '../image'
import { Modal } from '../modal'
import { HEADER_MOBILE_DATA } from '@/document'
import { useRouter } from 'next/router'

interface HeaderMobileProps {
  className?: string
}

export const HeaderMobile = ({ className }: HeaderMobileProps) => {
  const router = useRouter()
  const { visible, closeModal, toggle } = useModal()
  const optionModalRef = useRef<HTMLDivElement>(null)
  const [expandChild, setExpandChild] = useState<number>()

  const hanldeExpandChild = (props: number) => {
    if (expandChild === props) {
      setExpandChild(undefined)
    } else {
      setExpandChild(props)
    }
  }

  useClickOutside([optionModalRef], () => closeModal())

  return (
    <div
      className={twMerge(
        classNames(
          'h-header_mobile_height sticky top-0 z-100 backdrop-blur-[90px] bg-transparent',
          className
        )
      )}
    >
      <div className={`w-full flex items-center`}>
        <div className="px-12 flex items-center justify-between w-full">
          <div className="flex-1">
            <Link href="/">
              <Image src={logo} className="w-[190px]" imageClassName="w-[190px] h-[56px]" />
            </Link>
          </div>

          <div onClick={() => toggle()} className="cursor-pointer rounded-full bg-white">
            <MenuIcon className="w-[32px] h-[32px] text-gray" />
          </div>
        </div>
      </div>

      <Modal
        visible={visible}
        animationType="slideDown"
        headerClassName="hidden"
        modalClassName="h-[80vh] w-full fixed top-0 left-0 right-0"
      >
        <div ref={optionModalRef} className="min-h-[350px]">
          <div className="h-header_mobile_height px-12 flex items-center justify-between w-full">
            <div className="flex-1">
              <Link href="/">
                <Image src={logo} className="w-[190px]" imageClassName="w-[190px] h-[56px]" />
              </Link>
            </div>

            <div onClick={() => toggle()} className="cursor-pointer rounded-full bg-white">
              <TimesIcon className="w-[32px] h-[32px] p-8 text-gray" />
            </div>
          </div>

          <div className="max-h-[80vh] overflow-auto">
            {HEADER_MOBILE_DATA.map((item, index) => {
              return (
                <div key={index}>
                  <div
                    key={index}
                    className="group cursor-pointer flex items-center justify-between p-12"
                  >
                    <div
                      onClick={() => {
                        if (item?.path !== '') {
                          router.push(item?.path)
                        }
                      }}
                      className="flex items-center gap-8"
                    >
                      <div
                        className={classNames(
                          'group-hover:text-primary'
                          // isActive ? 'text-primary' : ''
                        )}
                      >
                        {item.icon}
                      </div>
                      <p
                        className={classNames(
                          'text-base group-hover:text-primary-gradient'
                          // isActive ? 'text-primary-gradient' : ''
                        )}
                      >
                        {item.title}
                      </p>
                    </div>

                    {item?.child && (
                      <div
                        onClick={() => {
                          hanldeExpandChild(index)
                        }}
                        className="flex-1 flex justify-end"
                      >
                        <RightIcon
                          className={classNames(
                            'text-sm group-hover:text-primary animate-fade',
                            expandChild === index ? 'rotate-90' : ''
                          )}
                        />
                      </div>
                    )}
                  </div>

                  <div
                    className={classNames(
                      'px-24 grid grid-cols-2 gap-12',
                      expandChild === index ? 'block' : 'hidden'
                    )}
                  >
                    {item?.child?.map((child, index) => (
                      <div
                        onClick={() => {
                          if (child?.path !== '') {
                            router.push(child?.path)
                          }
                        }}
                        key={index}
                        className="flex gap-12 items-center"
                      >
                        <div>
                          {child.iconHeader}
                        </div>

                        <div>
                          <p className={classNames('text-base font-bold mb-8 line-clamp-2')}>
                            {child?.title}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Modal>
    </div>
  )
}
