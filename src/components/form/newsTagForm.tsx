import { TimesIcon } from '@/assets'
import { newsTagSchema } from '@/schema'
import { CreateTagParams, Tag, UpdateTagParams } from '@/types'
import { yupResolver } from '@hookform/resolvers/yup'
import classNames from 'classnames'
import { useForm } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import { Button } from '../button'
import { InputField } from '../inputs'

interface NewsTagFormProps {
  className?: string
  onSubmit?: (data: UpdateTagParams | CreateTagParams) => void
  onClose?: () => void
  type?: 'create' | 'update'
  defaultTag?: Tag
}

export const NewsTagForm = ({
  className,
  onSubmit,
  onClose,
  type = 'create',
  defaultTag,
}: NewsTagFormProps) => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(newsTagSchema),
    mode: 'all',
  })

  const handleSubmitForm = async (data: any) => {
    onSubmit?.({
      tag_name: data?.tagName || '',
    })
  }

  return (
    <div className={twMerge(classNames('p-16', className))}>
      <div className="flex items-center justify-between mb-16">
        <p className="text-md">{type === 'create' ? 'Tạo tag mới' : 'Cập nhật tag'}</p>

        {onClose && (
          <div
            onClick={() => {
              onClose?.()
            }}
          >
            <TimesIcon className="text-gray text-base cursor-pointer" />
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="mb-12">
          <InputField
            control={control}
            defaultValue={defaultTag?.tag_name}
            name="tagName"
            type="text"
            placeholder={`Nhập tên tag`}
            label="Tên tag"
            inputClassName="rounded-[10px] p-[12px]"
          />
        </div>

        <div className="flex justify-end gap-12">
          <Button
            onClick={() => {
              onClose?.()
            }}
            title={'Đóng'}
            className={`w-fit bg-white border border-red mb-12 rounded-md px-24`}
            textClassName={`!text-red`}
          />

          <Button
            type="submit"
            title={type === 'create' ? 'Thêm' : 'Cập nhật'}
            className={`w-fit bg-primary-gradient mb-12 rounded-md px-24`}
            textClassName={`!text-white`}
          />
        </div>
      </form>
    </div>
  )
}
