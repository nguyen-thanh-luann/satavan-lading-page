import { emailSchema } from '@/schema'
import { LoginFormParams } from '@/types'
import { yupResolver } from '@hookform/resolvers/yup'
import classNames from 'classnames'
import { useForm } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import { InputField } from '../inputs'

interface SubmitEmailFormProps {
  className?: string
  onSubmit?: (data: LoginFormParams) => void
  placeHolder?: string
  label?: string
  inputClassName?: string
  buttonClassName?: string
  buttonLabel?: string
}

export const SubmitEmailForm = ({
  className,
  onSubmit,
  placeHolder = 'Nhập địa chỉ email của bạn',
  label,
  inputClassName,
  buttonClassName,
  buttonLabel = 'Đăng ký',
}: SubmitEmailFormProps) => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(emailSchema),
    mode: 'all',
  })

  const handleSubmitEmail = async (data: any) => {
    onSubmit?.(data)
  }

  return (
    <div className={twMerge(classNames('', className))}>
      <form onSubmit={handleSubmit(handleSubmitEmail)}>
        <div className="flex">
          <InputField
            control={control}
            name="email"
            type="email"
            placeholder={placeHolder}
            label={label}
            inputClassName={classNames(
              'text-sm w-full px-12 py-8 rounded-tl-md rounded-bl-md rounded-tr-none rounded-br-none outline-none',
              inputClassName
            )}
            messageClassName='hidden'
          />

          <button
            className={classNames(
              'bg-primary-gradient text-sm text-white px-24 min-w-fit rounded-tr-md rounded-br-md',
              buttonClassName
            )}
          >
            {buttonLabel}
          </button>
        </div>
      </form>
    </div>
  )
}
