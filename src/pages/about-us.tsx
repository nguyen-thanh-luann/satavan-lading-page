import {
  gitlabIcon,
  homeBanner,
  homeBannerMobile,
  htmlIcon,
  jsIcon,
  mysqlIcon,
  odooIcon,
  pythonIcon,
  reactIcon,
  sassIcon,
  vscodeIcon
} from '@/assets'
import { ActivityList, AdvisorList, AppStoreSection, CustomerLogoList, Image } from '@/components'
import { DOMAIN_URL, WEB_DESCRIPTION, WEB_TITTLE, thumbnailImageUrl } from '@/constants'
import { Main } from '@/templates'
import { Autoplay, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'

const AboutUsPage = () => {
  const TECH_ICONS = [
    {
      icon: sassIcon,
    },
    {
      icon: jsIcon,
    },
    {
      icon: vscodeIcon,
    },
    {
      icon: pythonIcon,
    },
    {
      icon: odooIcon,
    },
    {
      icon: reactIcon,
    },
    {
      icon: htmlIcon,
    },
    {
      icon: gitlabIcon,
    },
    {
      icon: mysqlIcon,
    },
  ]

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
                <span className="text-primary-gradient">Tạo ảnh hưởng lớn.</span>
              </p>

              <p className="text-sm md:text-base mb-12">
                Nhóm nhỏ nhưng hùng mạnh, tạo ra lợi ích cho các doanh nghiệp.
              </p>
            </div>
          </div>
        </div>

        {/* vision section */}
        <div className="bg-primary-gradient-100">
          <div className="container py-32">
            <p className="text-center text-2xl md:text-3xl mb-12">Tầm nhìn của chúng tôi</p>

            <p className="text-center text-base">
              Tại Satavan, chúng tôi có một tầm nhìn khá đơn giản, cung cấp cho bạn các giải pháp
              cực kỳ mạnh mẽ nhưng đơn giản để sử dụng. Chúng tôi không chỉ bán sản phẩm hay cung
              cấp giải pháp phần mềm. Thay vì chỉ làm việc, chúng tôi thích xem các giải pháp của
              chúng tôi đang chuyển đổi hoạt động kinh doanh của khách hàng như thế nào. Chúng tôi
              đảm bảo rằng khách hàng của chúng tôi cực kỳ hài lòng với các giải pháp của chúng tôi.
            </p>
          </div>
        </div>

        {/* section customer */}
        <div className="bg-white py-32 px-12">
          <div className="container">
            <p className="text-center text-2xl md:text-3xl mb-12">
              Khách hàng tiêu biểu của chúng tôi
            </p>
            <p className="text-center text-base mb-12">
              Khách hàng hài lòng với dịch vụ đang sử dụng
            </p>

            <CustomerLogoList />
          </div>
        </div>

        {/* section activity */}
        <div className="bg-white bg-home-services-background bg-cover bg-no-repeat bg-center py-32 px-12">
          <div className="container">
            <p className="text-center text-2xl md:text-3xl mb-12">Hoạt động của chúng tôi</p>
            <p className="text-center text-base mb-12">
              Luôn lắng nghe, thấu hiểu nhu cầu của khách hàng
            </p>

            <ActivityList />
          </div>
        </div>

        {/* section advisor */}
        <div className="bg-white py-32 px-12">
          <div className="container">
            <p className="text-center text-2xl md:text-3xl mb-16">Ban cố vấn chuyên môn</p>

            <AdvisorList />
          </div>
        </div>

        {/* tech list section */}
        <div className="bg-primary-gradient-100">
          <div className="container py-32">
            <p className="text-center text-2xl md:text-3xl mb-16">Công nghệ chúng tôi sử dụng</p>

            <Swiper
              slidesPerView={8}
              spaceBetween={12}
              slidesPerGroup={1}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              breakpoints={{
                300: {
                  slidesPerView: 4,
                },
                900: {
                  slidesPerView: 6,
                },
                1024: {
                  slidesPerView: 8,
                },
              }}
            >
              <div>
                {TECH_ICONS?.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div>
                      <Image
                        src={item.icon}
                        imageClassName="object-contain w-full h-[80px] aspect-1"
                        className="w-full"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </div>

        {/* app store & gg play */}
        <div className="bg-primary-gradient py-32 px-12">
          <AppStoreSection className="container" />
        </div>
      </div>
    </Main>
  )
}

export default AboutUsPage

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
