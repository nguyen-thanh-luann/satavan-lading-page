import { empty } from '@/assets'
import { STATIC_PATH } from '@/constants'
import classNames from 'classnames'
import { twMerge } from 'tailwind-merge'
import { Button } from '../button'
import { NotFound } from '../notFound'
import router from 'next/router'

interface CartEmptyProps {
  className?: string
}

export const CartEmpty = ({ className }: CartEmptyProps) => {
  return (
    <div className={twMerge(classNames('mt-50 max-w-[90%] mx-auto', className))}>
      <NotFound image={empty} notify="Bạn chưa có sản phẩm nào trong giỏ, đặt hàng ngay!" />

      <Button
        onClick={() => {
          router.push(STATIC_PATH.apps)
        }}
        title="Đặt hàng"
        className="rounded-md bg-primary mx-auto mt-32 py-8 w-[364px] max-w-[90%]"
        textClassName="text-white text-base font-semibold"
      />
    </div>
  )
}
