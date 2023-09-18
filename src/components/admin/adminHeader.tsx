import { BellIconOutline, NoteIconOutline, SettingIconOutline } from '@/assets'
import classNames from 'classnames'
import { toast } from 'react-hot-toast'
import { SearchForm } from '../form'
import { AdminAccountDrawer } from './adminAccountDrawer'

interface AdminHeaderProps {
  className?: string
}

export const AdminHeader = ({ className }: AdminHeaderProps) => {
  return (
    <div
      className={classNames(
        'border-b border-gray-200 bg-white flex justify-between p-12 shadow-sm',
        className
      )}
    >
      <div className="flex items-center gap-12">
        <div
          onClick={() => {
            toast.success('Comming soon!')
          }}
          className="rounded-full bg-gray-100 p-8 cursor-pointer hover:bg-gray-200"
        >
          <div className=" w-[24px] h-[24px] flex-center">
            <NoteIconOutline className="" />
          </div>
        </div>

        <div
          onClick={() => {
            toast.success('Comming soon!')
          }}
          className="rounded-full bg-gray-100 p-8 cursor-pointer hover:bg-gray-200"
        >
          <div className=" w-[24px] h-[24px] flex-center">
            <SettingIconOutline className="" />
          </div>
        </div>

        <div
          onClick={() => {
            toast.success('Comming soon!')
          }}
          className="rounded-full bg-gray-100 p-8 cursor-pointer hover:bg-gray-200"
        >
          <div className=" w-[24px] h-[24px] flex-center">
            <BellIconOutline className="" />
          </div>
        </div>

        <SearchForm buttonClassName="hidden" placeholder="Search..." />
      </div>

      <div>
        <AdminAccountDrawer />
      </div>
    </div>
  )
}
