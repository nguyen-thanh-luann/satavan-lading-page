import { homeBanner, homeBannerMobile, touchingImage } from '@/assets'
import {
  ActivityList,
  AppStoreSection,
  BusinessResultSection,
  Button,
  CustomerLogoList,
  HomePageServiceList,
  Image,
  MultiTaskIntroSection,
  NewsSection
} from '@/components'
import { DOMAIN_URL, WEB_DESCRIPTION, WEB_TITTLE, thumbnailImageUrl } from '@/constants'
import { OUR_DIFFERENCE } from '@/document'
import { Main } from '@/templates'
import Fade from 'react-reveal/Fade'

const HomePage = () => {
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
              <Fade right>
                <p className="text-2xl md:text-3xl mb-12 font-bold">
                  <span className="text-primary-gradient">Điểm đến duy nhất </span>
                  cho tất cả các nhu cầu kinh doanh của bạn
                </p>
              </Fade>

              <Fade bottom>
                <p className="text-sm md:text-base mb-12">
                  Chúng tôi cung cấp các giải pháp Odoo mạnh mẽ và linh hoạt giúp bạn biến tầm nhìn
                  của mình thành hiện thực.
                </p>
              </Fade>

              <Fade bottom>
                <Button
                  title="Dịch vụ của chúng tôi"
                  className="rounded-lg bg-primary-gradient p-8 w-fit"
                  textClassName="text-white text-sm md:text-base"
                />
              </Fade>
            </div>
          </div>
        </div>

        <HomePageServiceList />

        {/* section customer */}
        <div className="bg-white py-32 px-12">
          <div className="container">
            <p className="text-center text-2xl md:text-3xl mb-12">
              Khách hàng tiêu biểu của chúng tôi
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

        {/* section result*/}
        <BusinessResultSection />

        {/* section mookup */}
        <div className="container py-32 px-12">
          <div>
            <p className="text-center text-2xl md:text-3xl mb-12">
              Điều gì tạo nên sự khác biệt của Satavan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              {OUR_DIFFERENCE?.map((item, index) => (
                <div key={index} className="flex gap-12 items-start mb-12 last:mb-0">
                  <div className="min-w-[60px] w-[60px] h-[60px]">{item.icon}</div>
                  <div>
                    <p className="text-lg md:text-xl font-bold">{item.title}</p>
                    <p className="text-base text-gray">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="">
              <Image
                src={touchingImage}
                imageClassName="object-contain aspect-1 w-full h-[300px] md:h-[450px]"
                className=""
              />
            </div>
          </div>
        </div>

        {/* section advisor */}
        {/* <div className="bg-secondary py-32 px-12">
          <div className="container">
            <p className="text-center text-2xl md:text-3xl mb-16">Ban cố vấn chuyên môn</p>

            <AdvisorList />
          </div>
        </div> */}

        {/* multitask section */}
        <div className="bg-secondary py-32 px-12">
          <MultiTaskIntroSection className='container'/>
        </div>

        {/* section news */}

        <NewsSection className="container py-32 px-12" />

        {/* app store & gg play */}
        <div className="bg-primary-gradient py-32 px-12">
          <AppStoreSection className="container" />
        </div>
      </div>
    </Main>
  )
}

export default HomePage

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
