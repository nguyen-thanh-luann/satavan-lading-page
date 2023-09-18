import {
  angryIcon,
  heartIcon,
  laughIcon,
  likeIcon,
  sadIcon,
  wowIcon,
  thumbnailImage,
} from '@/assets'
import { OptionType } from '@/types'

export * from './regex'
export * from './swrKey'
export * from './socketKey'

export const API_URL = process.env.NEXT_PUBLIC_API_URL
export const DOMAIN_URL = process.env.NEXT_PUBLIC_DOMAIN_URL
export const ZALO_OA_ID = process.env.NEXT_PUBLIC_ZALO_OA_ID
export const FACEBOOK_PAGE_ID = process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID
export const FACEBOOK_APP_ID = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID
export const TINYMCE_EDITOR_KEY = process.env.NEXT_PUBLIC_TINY_EDITOR_KEY

export const PHONE_SCHEMA = /((^(\+84|84|0|0084){1})(3|5|7|8|9))+([0-9]{8})$/
export const EMAIL_SCHEMA = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

export const DEFAULT_LIMIT = 20
export const RESEND_OTP_TIMEOUT = 60
export const LIMIT_ATTACHMENT = 10

export const HEADER_HEIGHT = 84

export const DESKTOP_WIDTH = 1024
export const TABLET_WIDTH = 900
export const MOBILE_WIDTH = 300

export const WEB_TITTLE = 'Satavan'
export const WEB_DESCRIPTION = 'Kiến tạo doanh nghiệp số'

export const FACEBOOK_LINK = 'https://www.facebook.com/phanmemsatavan'
export const CONTACT_EMAIL_ADDRESS = 'biz@gmail.com'
export const CONTACT_PHONE_NUMBER = '0909099580'
export const thumbnailImageUrl = thumbnailImage?.default?.src || ''

export const MESSAGE_OPTION_MENU_SIZE = {
  width: 180,
  height: 168,
}

export const MESSAGE_STATUS = {
  pending: 'Đang gửi',
  rejected: 'Gửi lỗi',
  fulfilled: 'Đã gửi',
}

export const MESSAGE_EMOTION_ICON = {
  laugh: laughIcon,
  heart: heartIcon,
  sad: sadIcon,
  wow: wowIcon,
  like: likeIcon,
  angry: angryIcon,
}

export const PRODUCT_FILTER_TABS: OptionType<string>[] = [
  { label: 'Tất cả', value: 'default' },
  { label: 'Bán chạy', value: 'sold_quantity' },
  { label: 'Sản phẩm mới', value: 'new_product' },
  { label: 'Giá thấp đến cao', value: 'price_increase' },
  { label: 'Giá cao đến thấp', value: 'price_decrease' },
]

export const DATA_GENDER: OptionType<string>[] = [
  { label: 'Nam', value: 'male' },
  { label: 'Nữ', value: 'female' },
  { label: 'Khác', value: 'other' },
]

export const VNPAY_STATUS_NAME = {
  '00': '	Giao dịch thành công',
  '07': '	Trừ tiền thành công. Giao dịch bị nghi ngờ (liên quan tới lừa đảo, giao dịch bất thường).',
  '09': '	Giao dịch không thành công do: Thẻ/Tài khoản của khách hàng chưa đăng ký dịch vụ InternetBanking tại ngân hàng.',
  '10': '	Giao dịch không thành công do: Khách hàng xác thực thông tin thẻ/tài khoản không đúng quá 3 lần',
  '11': '	Giao dịch không thành công do: Đã hết hạn chờ thanh toán. Xin quý khách vui lòng thực hiện lại giao dịch.',
  '12': '	Giao dịch không thành công do: Thẻ/Tài khoản của khách hàng bị khóa.',
  '13': '	Giao dịch không thành công do Quý khách nhập sai mật khẩu xác thực giao dịch (OTP). Xin quý khách vui lòng thực hiện lại giao dịch.',
  '24': '	Giao dịch không thành công do: Khách hàng hủy giao dịch',
  '51': '	Giao dịch không thành công do: Tài khoản của quý khách không đủ số dư để thực hiện giao dịch.',
  '65': '	Giao dịch không thành công do: Tài khoản của Quý khách đã vượt quá hạn mức giao dịch trong ngày.',
  '75': '	Ngân hàng thanh toán đang bảo trì.',
  '79': '	Giao dịch không thành công do: KH nhập sai mật khẩu thanh toán quá số lần quy định. Xin quý khách vui lòng thực hiện lại giao dịch',
  '99': '	Các lỗi khác (lỗi còn lại, không có trong danh sách mã lỗi đã liệt kê)',
} as any

export const STATIC_PATH = {
  service: '/service',
  odooDevelopService: '/odoo-develop-service',
  odooDeployService: '/odoo-deploy-service',
  odooWebService: '/odoo-web-service',
  odooSupportService: '/odoo-support-service',
  odooPosIotService: '/odoo-pos-iot-service',
  odooOperateService: '/odoo-operate-service',
  odooTrainingService: '/odoo-training-service',
  odooDevService: '/odoo-dev-service',
  contactUs: '/contact-us',
  solution: '/solution',
  job: '/job',
  aboutUs: '/about-us',
  news: '/news',
  newsDetail: '/news-detail',
  login: '/login',
  apps: '/apps',
  shoppingCart: '/shopping-cart',
  checkout: '/checkout',
  checkoutSuccess: '/checkout-success',
}

export const POSITION = [
  {
    label: 'Chủ doanh nghiệp/CEO',
    value: 'CEO',
  },
  {
    label: 'Quản lí',
    value: 'Quản lí',
  },
  {
    label: 'Nhân viên',
    value: 'Nhân viên',
  },
]

export const BUSINESS_AREAS = [
  {
    label: 'Thực phẩm',
    value: 'Thực phẩm',
  },
  {
    label: 'Cơ khí và linh kiện máy móc',
    value: 'Cơ khí và linh kiện máy móc',
  },
  {
    label: 'Bất động sản',
    value: 'Bất động sản',
  },
  {
    label: 'Bao bì và giấy',
    value: 'Bao bì và giấy',
  },
  {
    label: 'Công trình',
    value: 'Công trình',
  },
  {
    label: 'Điện tử',
    value: 'Điện tử',
  },
  {
    label: 'Vật liệu xây dựng',
    value: 'Vật liệu xây dựng',
  },
  {
    label: 'Nội thất và gỗ',
    value: 'Nội thất và gỗ',
  },
  {
    label: 'Ngành nhựa',
    value: 'Ngành nhựa',
  },
  {
    label: 'May mặc',
    value: 'May mặc',
  },
  {
    label: 'khác',
    value: 'khác',
  },
]

export const WORKFORCE_SIZE = [
  {
    label: '1-5',
    value: '1-5',
  },
  {
    label: '6-10',
    value: '6-10',
  },
  {
    label: '11-30',
    value: '11-30',
  },
  {
    label: '31-50',
    value: '31-50',
  },
  {
    label: '51-100',
    value: '51-100',
  },
  {
    label: '101-200',
    value: '101-200',
  },
  {
    label: '201-500',
    value: '201-500',
  },
  {
    label: '501-1000',
    value: '501-1000',
  },
  {
    label: 'Trên 1000 người',
    value: 'Trên 1000 người',
  },
]

export const INTERESTED_PRODUCTS = [
  {
    label: 'Quản lí doanh nghiệp - Cloud ERP',
    value: 'Quản lí doanh nghiệp - Cloud ERP',
  },
  {
    label: 'Quản lí dịch vụ cho thuê',
    value: 'Quản lí dịch vụ cho thuê',
  },
  {
    label: 'Quản lí công việc',
    value: 'Quản lí công việc',
  },
  {
    label: 'Đề xuất và xét duyệt các đề xuất',
    value: 'Đề xuất và xét duyệt các đề xuất',
  },
  {
    label: 'Quản lí chi tiêu trong doanh nghiệp',
    value: 'Quản lí chi tiêu trong doanh nghiệp',
  },
  {
    label: 'Ứng dụng giao hàng nội bộ theo kế hoạch',
    value: 'Ứng dụng giao hàng nội bộ theo kế hoạch',
  },
  {
    label: 'Mobile hóa các nghiệp vụ doanh nghiệp',
    value: 'Mobile hóa các nghiệp vụ doanh nghiệp',
  },
  {
    label: 'Thiết kế website bán hàng cao cấp cho doanh nghiệp',
    value: 'Thiết kế website bán hàng cao cấp cho doanh nghiệp',
  },
  {
    label: 'Quản lí chuỗi cung ứng toàn diện',
    value: 'Quản lí chuỗi cung ứng toàn diện',
  },
]