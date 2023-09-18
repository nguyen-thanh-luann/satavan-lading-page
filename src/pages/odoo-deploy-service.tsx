import { deployBanner, deployBannerMobile } from '@/assets'
import { Button, Image, ReasonChooseUs, ServiceViewItem } from '@/components'
import { DOMAIN_URL, WEB_DESCRIPTION, WEB_TITTLE, thumbnailImageUrl } from '@/constants'
import { ODOO_DEPLOY_SERVICES } from '@/document'
import { Main } from '@/templates'

const OdooDeployServicePage = () => {
  return (
    <Main title={WEB_TITTLE} description={WEB_DESCRIPTION}>
      <div className="">
        {/* banner */}
        <div className="relative">
          <Image
            src={deployBanner}
            imageClassName="hidden md:block md:aspect-3/1 object-cover w-full"
          />

          <Image
            src={deployBannerMobile}
            imageClassName="aspect-1/1 md:hidden object-cover w-full"
          />

          <div className="absolute top-0 right-0 left-0 bottom-0 grid grid-cols-1 md:grid-cols-2">
            <div className=""></div>

            <div className="w-[70%] flex flex-col justify-center px-12">
              <p className="text-2xl md:text-3xl mb-12 font-bold">
                Dịch vụ triển khai <span className="text-primary-gradient">Odoo</span>
              </p>

              <p className="text-sm md:text-base mb-12">
                Chúng tôi cung cấp các giải pháp Odoo mạnh mẽ và linh hoạt giúp bạn biến tầm nhìn
                của mình thành hiện thực.
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

            <p className="text-center text-xl font-bold mb-12">Dịch vụ triển khai</p>

            <p className="text-center text-base text-gray mb-32">
              Tính linh hoạt, khả năng mở rộng và độ tin cậy cho các phiên bản Odoo của bạn.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {ODOO_DEPLOY_SERVICES?.map((item, index) => (
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

export default OdooDeployServicePage

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
