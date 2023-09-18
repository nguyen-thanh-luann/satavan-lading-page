import { DownIcon, logo } from '@/assets'
import { STATIC_PATH } from '@/constants'
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button } from '../button'
import { Image } from '../image'
import { HeaderJobList } from './headerJobList'
import { HeaderServiceList } from './headerServiceList'
import { HeaderSolutionList } from './headerSolutionList'
import Zoom from 'react-reveal/Zoom'

interface HeaderProps {
  className?: string
}

export const Header = ({ className = '' }: HeaderProps) => {
  const router = useRouter()

  return (
    <div
      className={classNames(
        `h-header_height sticky top-0 backdrop-blur-[90px] bg-transparent w-full flex items-center z-100 px-12`,
        className
      )}
    >
      <div className="container flex items-center justify-between">
        <div className="">
          <Link href="/">
            <Image
              src={logo}
              className="w-[160px]"
              imageClassName="object-contain w-[160px] h-[56px]"
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-16">
          <div
            className="cursor-pointer"
            onClick={() => {
              router.push('/')
            }}
          >
            <p
              className={classNames(
                'text-base font-medium hover:text-primary-gradient',
                router.pathname === '/' ? 'text-primary-gradient' : ''
              )}
            >
              Trang chủ
            </p>
          </div>

          <div className="group relative">
            <div
              onClick={() => {
                router.push(STATIC_PATH.service)
              }}
              className="cursor-pointer flex items-center gap-8"
            >
              <p
                className={classNames(
                  'text-base font-medium group-hover:text-primary-gradient',
                  router.pathname === STATIC_PATH.service ? 'text-primary-gradient' : ''
                )}
              >
                Dịch vụ
              </p>

              <DownIcon
                className={classNames(
                  'text-xs group-hover:text-primary',
                  router.pathname === STATIC_PATH.service ? 'text-primary' : ''
                )}
              />
            </div>

            <div className="hidden group-hover:block absolute right-[-500%]">
              <Zoom duration={400}>
                <div className="p-12 mt-12 rounded-md box-shadow-sm max-h-[80vh] overflow-auto scrollbar-hide w-[700px] bg-white ">
                  <HeaderServiceList />
                </div>
              </Zoom>
            </div>
          </div>

          <div className="group relative">
            <div className="cursor-pointer flex items-center gap-8">
              <p
                className={classNames(
                  'text-base font-medium group-hover:text-primary-gradient',
                  router.pathname === STATIC_PATH.solution ? 'text-primary-gradient' : ''
                )}
              >
                Giải pháp
              </p>

              <DownIcon
                className={classNames(
                  'text-xs group-hover:text-primary',
                  router.pathname === STATIC_PATH.solution ? 'text-primary' : ''
                )}
              />
            </div>

            <div className="hidden group-hover:block absolute right-[-200%]">
              <Zoom duration={400}>
                <div className="p-12 mt-12 rounded-md box-shadow-sm max-h-[80vh] overflow-auto scrollbar-hide w-[700px] bg-white ">
                  <HeaderSolutionList />
                </div>
              </Zoom>
            </div>
          </div>

          <div className="group relative">
            <div className="cursor-pointer flex items-center gap-8">
              <p
                className={classNames(
                  'text-base font-medium group-hover:text-primary-gradient',
                  router.pathname === STATIC_PATH.job ? 'text-primary-gradient' : ''
                )}
              >
                Ngành nghề
              </p>

              <DownIcon
                className={classNames(
                  'text-xs group-hover:text-primary',
                  router.pathname === STATIC_PATH.job ? 'text-primary' : ''
                )}
              />
            </div>

            <div className="hidden group-hover:block absolute right-[-100%]">
              <Zoom duration={400}>
                <div className="p-12 mt-12 box-shadow-sm max-h-[80vh] overflow-auto scrollbar-hide w-[700px] bg-white rounded-md border border-gray-100 ">
                  <HeaderJobList className="" />
                </div>
              </Zoom>
            </div>
          </div>

          <div
            className="cursor-pointer"
            onClick={() => {
              router.push(STATIC_PATH.aboutUs)
            }}
          >
            <p
              className={classNames(
                'text-base font-medium hover:text-primary-gradient',
                router.pathname === STATIC_PATH.aboutUs ? 'text-primary-gradient' : ''
              )}
            >
              Về chúng tôi
            </p>
          </div>

          <Button
            title="Đăng ký dịch vụ"
            className="rounded-lg bg-primary-gradient p-8"
            textClassName="text-white"
            onClick={() => {
              router.push(STATIC_PATH.contactUs)
            }}
          />
        </div>
      </div>
    </div>
  )
}
