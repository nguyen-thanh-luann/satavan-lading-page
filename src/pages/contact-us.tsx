import {
  LocationOutlineIcon,
  WarningCircleIconOutline,
  homeBanner,
  homeBannerMobile,
} from '@/assets'
import { Image } from '@/components'
import { ContactForm } from '@/components/form'
import { DOMAIN_URL, WEB_DESCRIPTION, WEB_TITTLE, thumbnailImageUrl } from '@/constants'
import { Main } from '@/templates'

const ContactUsPage = () => {
  return (
    <Main title={WEB_TITTLE} description={WEB_DESCRIPTION}>
      <div className="">
        {/* banner */}

        <div className="relative">
          <Image
            src={homeBanner}
            imageClassName="hidden md:block md:aspect-3/1 object-cover w-full"
          />

          <Image src={homeBannerMobile} imageClassName="aspect-1/1 md:hidden object-cover w-full" />

          <div className="absolute top-0 right-0 left-0 bottom-0 grid grid-cols-1 md:grid-cols-2">
            <div className=""></div>

            <div className="w-[70%] flex flex-col justify-center px-12">
              <p className="text-2xl md:text-3xl mb-12 font-bold">
                Chúng tôi rất muốn nghe ý kiến từ bạn
              </p>

              <p className="text-sm md:text-base mb-12">
                Cho dù bạn có câu hỏi về dịch vụ của chúng tôi, cần bản demo hay bất kỳ điều gì
                khác, nhóm của chúng tôi sẵn lòng trả lời tất cả các câu hỏi của bạn.
              </p>
            </div>
          </div>
        </div>

        <section className="container px-12 py-32 flex flex-col-reverse md:flex-row gap-32">
          <div className="flex-1">
            <div className="mb-12">
              <div className="flex items-center gap-8 text-md mb-8">
                <WarningCircleIconOutline className="font-bold" />
                <p className="font-bold">Thông tin</p>
              </div>

              <p className="uppercase mb-8">CTY TNHH TIN HỌC VÀ CNTT ĐỊA LÝ ITGIS</p>
             
              <p className="text-base mb-8">Mã số thuế: 0312933354</p>

              <p className="text-base mb-8">
                Hotline:{' '}
                <a href="tel:0909099580" className="text-primary">
                  +84 909 099 580
                </a>
              </p>

              <p className="text-base mb-8">
                Email:{' '}
                <a href="mailto:biz@satavan.vn" className="text-primary">
                  biz@satavan.vn
                </a>
              </p>
            </div>

            <div className="mb-12">
              <div className="flex items-center gap-8 text-md mb-8">
                <LocationOutlineIcon className="font-bold" />
                <p className="font-bold">Địa chỉ</p>
              </div>

              <ul className="list-disc px-12">
                <li className="text-base mb-8">
                  Trụ sở: 238/12 Lê Văn Quới, P.Bình Hưng Hòa A, Q.Bình Tân, TP.Hồ Chí Minh.
                </li>
                <li className="text-base">
                  Văn phòng: A10.08, Block A, Tầng 10, Officetel Sky Center, 5B Phổ Quang, Tân Bình,
                  TP.Hồ Chí Minh.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex-1">
            <div className="rounded-lg shadow-lg p-12 border border-gray-200">
              <p className="text-md font-bold mb-8">Liên hệ với chúng tôi</p>
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </Main>
  )
}

export default ContactUsPage

export const getStaticProps = async () => {
  return {
    props: {
      openGraphData: [
        {
          property: 'og:image',
          content: thumbnailImageUrl,
          key: 'ogimage',
        },
        {
          property: 'og:image:alt',
          content: thumbnailImageUrl,
          key: 'ogimagealt',
        },
        {
          property: 'og:image:width',
          content: '400',
          key: 'ogimagewidth',
        },
        {
          property: 'og:image:height',
          content: '300',
          key: 'ogimageheight',
        },
        {
          property: 'og:url',
          content: DOMAIN_URL,
          key: 'ogurl',
        },
        {
          property: 'og:image:secure_url',
          content: thumbnailImageUrl,
          key: 'ogimagesecureurl',
        },
        {
          property: 'og:title',
          content: WEB_TITTLE,
          key: 'ogtitle',
        },
        {
          property: 'og:description',
          content: WEB_DESCRIPTION,
          key: 'ogdesc',
        },
        {
          property: 'og:type',
          content: 'website',
          key: 'website',
        },
      ],
    },
  }
}
