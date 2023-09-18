import { BUSINESS_AREAS, INTERESTED_PRODUCTS, POSITION, WORKFORCE_SIZE } from '@/constants'
import { contactShema } from '@/schema'
import { AddressPickerRes, GetContactParams } from '@/types'
import { yupResolver } from '@hookform/resolvers/yup'
import classNames from 'classnames'
import { useForm } from 'react-hook-form'
import { Button } from '../button'
import { InputField, SelectField } from '../inputs'
import { AddressPickerV2 } from './addressPickerV2'
import { toast } from 'react-hot-toast'

interface ContactFormProps {
  className?: string
  onSubmit?: (props: GetContactParams) => void
}

export const ContactForm = ({ className, onSubmit: onExternalSubmit }: ContactFormProps) => {
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(contactShema),
    mode: 'all',
  })

  const hanldeSubmitForm = (data: any) => {
    onExternalSubmit?.(data)

    toast.success('Comming soon!')
    resetForm()
  }

  const resetForm = () => {
    reset({
      userName: '',
      email: '',
      phone: '',
      companyName: '',
    })
  }

  return (
    <div className={classNames('', className)}>
      <form onSubmit={handleSubmit(hanldeSubmitForm)}>
        <div className="mb-12">
          <InputField
            control={control}
            name="userName"
            type="text"
            label="Họ và tên"
            placeholder="Nhập họ và tên"
            required
          />
        </div>

        <div className="mb-12 flex flex-wrap flex-col md:flex-row gap-24">
          <div className="flex-1">
            <InputField
              control={control}
              name="email"
              type="text"
              label={`Email`}
              placeholder={`Email`}
              inputClassName=""
              required
            />
          </div>

          <div className="flex-1">
            <InputField
              control={control}
              name="phone"
              type="text"
              label={`Số điện thoại`}
              placeholder={`Số điện thoại`}
              inputClassName=""
              required
            />
          </div>
        </div>

        <div className="mb-12">
          <label className="text-base">Địa chỉ</label>

          <div className="mt-12">
            <AddressPickerV2
              onSubmit={(data: AddressPickerRes) => {
                console.log({ data })
              }}
            />
          </div>
        </div>

        <div className="mb-12 flex flex-wrap flex-col md:flex-row gap-24">
          <div className="flex-1">
            <InputField
              control={control}
              name="companyName"
              type="text"
              label="Tên công ty"
              className="p-0"
              placeholder="Nhập tên công ty"
            />
          </div>
        </div>

        <div className="mb-12 flex flex-wrap flex-col md:flex-row gap-24">
          <div className="flex-1">
            <SelectField
              control={control}
              name="workforceSize"
              label="Quy mô nhân sự"
              placeholder="Chọn quy mô nhân sự"
              options={WORKFORCE_SIZE}
              required
            />
          </div>

          <div className="flex-1">
            <SelectField
              control={control}
              name="position"
              placeholder="Chức vụ"
              label="Chức vụ"
              options={POSITION}
            />
          </div>
        </div>

        <div className="mb-12 flex flex-wrap flex-col md:flex-row gap-24">
          <div className="flex-1">
            <SelectField
              control={control}
              name="businessArea"
              placeholder="Chọn lĩnh vực/ngành"
              label="Lĩnh vực/ngành"
              options={BUSINESS_AREAS}
              required
            />
          </div>
        </div>

        <div className="mb-12">
          <SelectField
            control={control}
            name="interestedProduct"
            label="Sản phẩm bạn quan tâm"
            placeholder="Chọn giải pháp bạn quan tâm"
            options={INTERESTED_PRODUCTS}
            required
          />
        </div>

        <div>
          <Button
            title="Gửi thông tin"
            className="bg-primary-gradient w-full py-8"
            textClassName="text-white text-sm"
          />
        </div>
      </form>
    </div>
  )
}
