import { newsCategorySchema } from '@/schema'
import { CreateNewsCategoryParams, NewsCategory, UpdateNewsCategoryParams } from '@/types'
import { yupResolver } from '@hookform/resolvers/yup'
import classNames from 'classnames'
import { useForm } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import { Button } from '../button'
import { InputField } from '../inputs'
import { TimesIcon } from '@/assets'

interface NewsCategoryFormProps {
  className?: string
  onSubmit?: (data: UpdateNewsCategoryParams | CreateNewsCategoryParams) => void
  onClose?: () => void
  type?: 'create' | 'update'
  defaultNewsCategory?: NewsCategory
}

export const NewsCategoryForm = ({
  className,
  onSubmit,
  onClose,
  type = 'create',
  defaultNewsCategory
}: NewsCategoryFormProps) => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(newsCategorySchema),
    mode: 'all',
  })

  const handleSubmitForm = async (data: any) => {
    onSubmit?.({
      category_name: data?.categoryName || '',
    })
  }

  return (
    <div className={twMerge(classNames('p-16', className))}>
      <div className="flex items-center justify-between mb-16">
        <p className="text-md">{type === 'create' ? 'Thêm danh mục' : 'Cập nhật danh mục'}</p>

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
            name="categoryName"
            defaultValue={defaultNewsCategory?.category_name}
            type="text"
            placeholder={`Nhập tên danh mục`}
            label="Tên danh mục"
            inputClassName="rounded-[10px] p-[12px]"
          />
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            title={type === 'create' ? 'Thêm' : 'Cập nhật'}
            className={`w-fit bg-primary-gradient mb-12 rounded-lg px-24`}
            textClassName={`title !text-white`}
          />
        </div>
      </form>
    </div>
  )
}
