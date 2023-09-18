import { developBanner, developBannerMobile } from '@/assets'
import { Button, Image, ReasonChooseUs, ServiceViewItem } from '@/components'
import { DOMAIN_URL, WEB_DESCRIPTION, WEB_TITTLE, thumbnailImageUrl } from '@/constants'
import { ODOO_DEVELOP_SERVICES } from '@/document'
import { Main } from '@/templates'

const OdooDevelopServicePage = () => {
  return (
    <Main title={WEB_TITTLE} description={WEB_DESCRIPTION}>
      <div className="">
        {/* banner */}
        <div className="relative">
          <Image
            src={developBanner}
            imageClassName="hidden md:block md:aspect-3/1 object-cover w-full"
          />

          <Image
            src={developBannerMobile}
            imageClassName="aspect-1/1 md:hidden object-cover w-full"
          />

          <div className="absolute top-0 right-0 left-0 bottom-0 grid grid-cols-1 md:grid-cols-2">
            <div className=""></div>

            <div className="w-[70%] flex flex-col justify-center px-12">
              <p className="text-2xl md:text-3xl mb-12 font-bold">
                <span className="text-primary-gradient text-3xl text-center">
                  Dịch vụ phát triển{' '}
                </span>
                Odoo
              </p>

              <p className="text-sm md:text-base mb-12">
                Chúng tôi giúp bạn phát triển doanh nghiệp của mình bằng cách cung cấp rất nhiều
                dịch vụ phát triển Odoo dưới một mái nhà duy nhất.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-secondary">
          <div className="container p-16">
            <div className="flex-center mb-12">
              <Button
                title="Dịch vụ của chúng tôi"
                className="rounded-lg bg-primary-gradient-100 p-8"
                textClassName="text-primary-gradient text-sm"
                disabled
              />
            </div>

            <p className="text-center text-xl font-bold mb-12">Những điều chúng tôi làm tốt nhất</p>

            <p className="text-center text-base text-gray mb-32">
              Các dịch vụ phát triển để định hình các ứng dụng Odoo theo nhu cầu kinh doanh của bạn.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {ODOO_DEVELOP_SERVICES?.map((item, index) => (
                <ServiceViewItem
                  key={index}
                  icon={
                    <Image
                      src={item?.icon}
                      imageClassName="min-w-[46px] w-[46px] h-[46px] aspect-1/1"
                    />
                  }
                  className="border border-gray-100"
                  title={item?.title}
                  content={item.content}
                  contentClassName="text-sm text-gray"
                  titleClassName=""
                />
              ))}
            </div>
          </div>
        </div>

        <ReasonChooseUs />
      </div>
    </Main>
  )
}

export default OdooDevelopServicePage

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
