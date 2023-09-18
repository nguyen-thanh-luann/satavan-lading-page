import {
  boCongThuong,
  facebookIcon,
  linkedIcon,
  logoWhite,
  ncsc,
  youtubeIcon,
  zaloIcon,
} from '@/assets'
import classNames from 'classnames'
import { toast } from 'react-hot-toast'
import { SubmitEmailForm } from '../form'
import { Image } from '../image'

interface FooterProps {
  className?: string
}

export const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={classNames(`relative footer w-full bg-black py-40 px-12`, className)}>
      <div className="flex items-center justify-center mb-16">
        <Image src={logoWhite} imageClassName="object-contain w-[200px] h-[70px]" />
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="h-[230px] overscroll-auto scrollbar-hide">
            <p className="text-md text-primary-gradient mb-24 font-bold">Satavan.com</p>
            <p className="text-sm text-white mb-12">Về chúng tôi</p>
            <p className="text-sm text-white mb-12">Điều khoản sử dụng</p>
            <p className="text-sm text-white mb-12">Bảng giá</p>
            <p className="text-sm text-white mb-12">Tuyển dụng</p>
            <p className="text-sm text-white">Profile sản phẩm</p>
          </div>

          <div className="my-24 hidden lg:block">
            <p className="text-md text-primary-gradient font-bold mb-12">Theo dõi chúng tôi trên</p>
            <div className="grid grid-cols-4 w-fit gap-12">
              <Image src={facebookIcon} imageClassName="w-[32px] h-[32px] aspect-1 rounded-lg" />

              <Image src={youtubeIcon} imageClassName="w-[32px] h-[32px] aspect-1 rounded-lg" />

              <Image src={linkedIcon} imageClassName="w-[32px] h-[32px] aspect-1 rounded-lg" />

              <Image src={zaloIcon} imageClassName="w-[32px] h-[32px] aspect-1 rounded-lg" />
            </div>
          </div>
        </div>

        <div className="">
          <div className="h-[230px] overscroll-auto scrollbar-hide">
            <p className="text-md text-primary-gradient  mb-24 font-bold">Sản phẩm</p>
            <p className="text-sm text-white mb-12">Phần mềm DMS plus</p>
            <p className="text-sm text-white mb-12">Quản lý bảo hành</p>
            <p className="text-sm text-white mb-12">Quản lý giao vận Shipper</p>
            <p className="text-sm text-white">Website cao cấp cho doanh nghiệp</p>
          </div>

          <div className="my-24 hidden lg:block">
            <Image src={boCongThuong} imageClassName="w-[70%]" />
          </div>
        </div>

        <div className="">
          <div className="h-[230px] overscroll-auto scrollbar-hide">
            <p className="text-md text-primary-gradient  mb-24 font-bold">Chuyên ngành</p>
            <p className="text-sm text-white mb-12">Giải pháp cho ngành mắt kính</p>
            <p className="text-sm text-white mb-12">Giải pháp cho ngành nguyên liệu</p>
            <p className="text-sm text-white mb-12">Giải pháp cho ngành dược phẩm</p>
            <p className="text-sm text-white mb-12">Giải pháp cho ngành hàng tiêu dùng</p>
            <p className="text-sm text-white">Giải pháp cho ngành In ấn</p>
          </div>

          <div className="my-24 hidden lg:block">
            <Image src={ncsc} imageClassName="w-[60%]" />
          </div>
        </div>

        <div className="">
          <p className="text-md text-primary-gradient  mb-24 font-bold">Liên hệ chúng tôi</p>

          <p className="text-sm mb-12 text-white">
            Tên công ty: CTY TNHH TIN HỌC VÀ CNTT ĐỊA LÝ ITGIS
          </p>

          <p className="text-sm mb-12 text-white">Mã số thuế: 0312933354</p>

          <p className="text-sm mb-12 text-white">
            Trụ sở: 238/12 Lê Văn Quới, P.Bình Hưng Hòa A, Q.Bình Tân, TP.Hồ Chí Minh
          </p>
          <p className="text-sm mb-12 text-white">
            Chi nhánh: A10.08, Block A, Tầng 10, Officetel Sky Center, 5B Phổ Quang, Tân Bình, TP.Hồ
            Chí Minh
          </p>

          <p className="text-base mb-12 font-bold text-white">Đăng ký</p>
          <p className="text-sm mb-12 text-white">
            Đăng ký để theo dõi thiết kế web mới và cập nhật mới nhất.
          </p>

          <SubmitEmailForm
            onSubmit={() => {
              toast.success('Comming soon!')
            }}
          />
        </div>
      </div>

    </footer>
  )
}
