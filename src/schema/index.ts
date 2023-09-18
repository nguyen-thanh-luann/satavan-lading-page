import { EMAIL_SCHEMA, PHONE_SCHEMA } from '@/constants'
import * as Yup from 'yup'

export const phoneNumberSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(PHONE_SCHEMA, 'Vui lòng nhập số điện thoại hợp lệ')
    .required('Vui lòng nhập số điện thoại'),
})

export const createPasswordSchema = Yup.object().shape({
  newPassword: Yup.string()
    .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
    .required('Vui lòng nhập mật khẩu'),
  reNewPassword: Yup.string()
    .oneOf([Yup.ref('newPassword')], 'Mật khẩu xác nhận phải trùng với mật khẩu mới')
    .required('Vui lòng nhập mật khẩu xác nhận'),
})

export const changePasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
    .required('Vui lòng nhập mật khẩu'),
  newPassword: Yup.string()
    .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
    .required('Vui lòng nhập mật khẩu'),
  reNewPassword: Yup.string()
    .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
    .oneOf([Yup.ref('newPassword')], 'Mật khẩu xác nhận phải trùng với mật khẩu mới')
    .required('Vui lòng nhập mật khẩu xác nhận'),
})

export const passwordSchema = Yup.object().shape({
  password: Yup.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
})

export const loginSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(PHONE_SCHEMA, 'Vui lòng nhập số điện thoại hợp lệ')
    .required('Vui lòng nhập số điện thoại'),
  password: Yup.string()
    .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
    .required('Vui lòng nhập mật khẩu'),
})

export const contactShema = Yup.object().shape({
  userName: Yup.string()
    .min(2, 'Tên phải có tối thiểu 2 ký tự')
    .max(50, 'Tên không vượt quá 30 ký tự')
    .required('Vui lòng nhập tên'),
  email: Yup.string().matches(
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    'Vui lòng nhập đúng định dạng email'
  ),
  phone: Yup.string()
    .matches(PHONE_SCHEMA, 'Vui lòng nhập số điện thoại hợp lệ')
    .required('Vui lòng nhập số điện thoại'),
  note: Yup.string().optional(),
})

export const newsCategorySchema = Yup.object().shape({
  categoryName: Yup.string()
    .min(2, 'Tên phải có tối thiểu 2 ký tự')
    .max(50, 'Tên không vượt quá 30 ký tự')
    .required('Vui lòng nhập tên danh mục'),
})

export const newsTagSchema = Yup.object().shape({
  tagName: Yup.string()
    .min(2, 'Tên phải có tối thiểu 2 ký tự')
    .max(50, 'Tên không vượt quá 30 ký tự')
    .required('Vui lòng nhập tên tag'),
})

export const newsSchema = Yup.object().shape({
  title: Yup.string().min(2, 'Tiêu đề phải có tối thiểu 2 ký tự'),
  // content: Yup.string().optional(),
})

export const emailSchema = Yup.object().shape({
  email: Yup.string().matches(EMAIL_SCHEMA, 'Vui lòng nhập đúng định dạng email'),
})

export const AddressSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Tên không hợp lệ').required('Vui lòng nhập Họ Tên'),
  street: Yup.string().required('Vui lòng nhập địa chỉ cụ thể'),
  phone: Yup.string()
    .matches(PHONE_SCHEMA, 'Vui lòng nhập số điện thoại hợp lệ')
    .required('Vui lòng nhập số điện thoại'),
  state: Yup.object()
    .shape({
      value: Yup.number().required(),
      label: Yup.string().required(),
    })
    .required('Vui lòng chọn điạ tỉnh thành phố'),
  district: Yup.object()
    .shape({
      value: Yup.number().required(),
      label: Yup.string().required(),
    })
    .required('Vui lòng chọn điạ chỉ quận huyện'),
  ward: Yup.object()
    .shape({
      value: Yup.number().required(),
      label: Yup.string().required(),
    })
    .required('Vui lòng chọn điạ chỉ phường xã'),
})