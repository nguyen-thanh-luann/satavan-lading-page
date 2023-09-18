import {
  bookBlock,
  cloudNoBg,
  codeSymbol,
  computerNoBg,
  heartNoBg,
  penNoBg,
  storeNoBg,
} from '@/assets'
import { Button, Image, ServiceViewItem } from '@/components'
import { DOMAIN_URL, WEB_DESCRIPTION, WEB_TITTLE, thumbnailImageUrl } from '@/constants'
import {
  ODOO_DEPLOY_SERVICES,
  ODOO_DEVELOP_SERVICES,
  ODOO_DEV_SERVICES,
  ODOO_OPERATE_SERVICES,
  ODOO_POS_IOT_SERVICES,
  ODOO_SUPPORT_SERVICES,
  ODOO_TRAINING_SERVICES,
  ODOO_WEB_TOPIC_SERVICES,
} from '@/document'
import { Main } from '@/templates'
import router from 'next/router'
import Fade from 'react-reveal/Fade'

const ServicePage = () => {
  return (
    <Main title={WEB_TITTLE} description={WEB_DESCRIPTION}>
      <div className="">
        <div className="flex-center my-12">
          <Button
            title="Tất cả dịch vụ"
            onClick={() => {
              router.push('/service')
            }}
            className="bg-primary-100 px-12 py-4"
            textClassName="text-primary-gradient font-bold text-sm"
            disabled
          />
        </div>

        <p className="text-md font-bold text-center mb-12">Dịch vụ Odoo của chúng tôi</p>

        <p className="text-base text-gray text-center mb-12">
          Rất nhiều dịch vụ Odoo giúp bạn nâng cao công việc kinh doanh tuyệt vời của mình.
        </p>

        {/*  */}
        <div className="bg-secondary p-12 mb-16">
          <div className="container">
            <Image
              src={codeSymbol}
              imageClassName="rounded-full w-[60px] h-[60px] object-contain"
              className="flex-center my-16"
            />

            <p className="text-md text-center mb-16">Dịch vụ phát triển Odoo</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              {ODOO_DEVELOP_SERVICES?.map((item, index) => (
                <Fade bottom key={index}>
                  <ServiceViewItem
                    key={index}
                    icon={
                      <Image
                        src={item?.icon}
                        imageClassName="rounded-xl w-[42px] h-[42px] object-contain"
                      />
                    }
                    className="items-center border border-gray-100"
                    title={item?.title}
                    titleClassName="font-normal mb-0"
                  />
                </Fade>
              ))}
            </div>

            <div className="flex-center">
              <Button
                title="Xem chi tiết"
                className="rounded-lg bg-primary-gradient p-8 w-fit px-24"
                textClassName="text-white"
                onClick={() => {
                  router.push('/odoo-develop-service')
                }}
              />
            </div>
          </div>
        </div>

        {/*  */}

        <div className="bg-white p-12 mb-16">
          <div className="container">
            <Image
              src={bookBlock}
              imageClassName="rounded-full w-[60px] h-[60px] object-contain"
              className="flex-center my-16"
            />

            <p className="text-md text-center mb-16">Dịch vụ triển khai Odoo</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              {ODOO_DEPLOY_SERVICES?.map((item, index) => (
                <Fade bottom key={index}>
                  <ServiceViewItem
                    key={index}
                    icon={
                      <Image
                        src={item?.icon}
                        imageClassName="rounded-xl w-[42px] h-[42px] object-contain"
                      />
                    }
                    className="items-center border border-gray-100"
                    title={item?.title}
                    titleClassName="font-normal mb-0"
                  />
                </Fade>
              ))}
            </div>

            <div className="flex-center">
              <Button
                title="Xem chi tiết"
                className="rounded-lg bg-primary-gradient p-8 w-fit px-24"
                textClassName="text-white"
                onClick={() => {
                  router.push('/odoo-deploy-service')
                }}
              />
            </div>
          </div>
        </div>

        {/*  */}
        <div className="bg-secondary p-12 mb-16">
          <div className="container">
            <Image
              src={penNoBg}
              imageClassName="rounded-full w-[60px] h-[60px] object-contain"
              className="flex-center my-16"
            />

            <p className="text-md text-center mb-16">
              Trang web, Thương mại điện tử & Chủ đề của Odoo
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              {ODOO_WEB_TOPIC_SERVICES?.map((item, index) => (
                <Fade bottom key={index}>
                  <ServiceViewItem
                    key={index}
                    icon={
                      <Image
                        src={item?.icon}
                        imageClassName="rounded-xl w-[42px] h-[42px] object-contain"
                      />
                    }
                    className="items-center border border-gray-100"
                    title={item?.title}
                    titleClassName="font-normal mb-0"
                  />
                </Fade>
              ))}
            </div>

            <div className="flex-center">
              <Button
                title="Xem chi tiết"
                className="rounded-lg bg-primary-gradient p-8 w-fit px-24"
                textClassName="text-white"
                onClick={() => {
                  router.push('/odoo-web-service')
                }}
              />
            </div>
          </div>
        </div>

        {/*  */}
        <div className="bg-white p-12 mb-16">
          <div className="container">
            <Image
              src={heartNoBg}
              imageClassName="rounded-full w-[60px] h-[60px] object-contain"
              className="flex-center my-16"
            />

            <p className="text-md text-center mb-16">Hỗ trợ Odoo</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              {ODOO_SUPPORT_SERVICES?.map((item, index) => (
                <Fade bottom key={index}>
                  <ServiceViewItem
                    key={index}
                    icon={
                      <Image
                        src={item?.icon}
                        imageClassName="rounded-xl w-[42px] h-[42px] object-contain"
                      />
                    }
                    className="items-center border border-gray-100"
                    title={item?.title}
                    titleClassName="font-normal mb-0"
                  />
                </Fade>
              ))}
            </div>

            <div className="flex-center">
              <Button
                title="Xem chi tiết"
                className="rounded-lg bg-primary-gradient p-8 w-fit px-24"
                textClassName="text-white"
                onClick={() => {
                  router.push('/odoo-support-service')
                }}
              />
            </div>
          </div>
        </div>

        {/*  */}
        <div className="bg-secondary p-12 mb-16">
          <div className="container">
            <Image
              src={storeNoBg}
              imageClassName="rounded-full w-[60px] h-[60px] object-contain"
              className="flex-center my-16"
            />

            <p className="text-md text-center mb-16">Phát triển Odoo POS và IoT</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              {ODOO_POS_IOT_SERVICES?.map((item, index) => (
                <Fade bottom key={index}>
                  <ServiceViewItem
                    key={index}
                    icon={
                      <Image
                        src={item?.icon}
                        imageClassName="rounded-xl w-[42px] h-[42px] object-contain"
                      />
                    }
                    className="items-center border border-gray-100"
                    title={item?.title}
                    titleClassName="font-normal mb-0"
                  />
                </Fade>
              ))}
            </div>

            <div className="flex-center">
              <Button
                title="Xem chi tiết"
                className="rounded-lg bg-primary-gradient p-8 w-fit px-24"
                textClassName="text-white"
                onClick={() => {
                  router.push('/odoo-pos-iot-service')
                }}
              />
            </div>
          </div>
        </div>

        {/*  */}
        <div className="bg-white p-12 mb-16">
          <div className="container">
            <Image
              src={cloudNoBg}
              imageClassName="rounded-full w-[60px] h-[60px] object-contain"
              className="flex-center my-16"
            />

            <p className="text-md text-center mb-16">Dịch vụ vận hành Odoo</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              {ODOO_OPERATE_SERVICES?.map((item, index) => (
                <Fade bottom key={index}>
                  <ServiceViewItem
                    key={index}
                    icon={
                      <Image
                        src={item?.icon}
                        imageClassName="rounded-xl w-[42px] h-[42px] object-contain"
                      />
                    }
                    className="items-center border border-gray-100"
                    title={item?.title}
                    titleClassName="font-normal mb-0"
                  />
                </Fade>
              ))}
            </div>

            <div className="flex-center">
              <Button
                title="Xem chi tiết"
                className="rounded-lg bg-primary-gradient p-8 w-fit px-24"
                textClassName="text-white"
                onClick={() => {
                  router.push('/odoo-operate-service')
                }}
              />
            </div>
          </div>
        </div>

        {/*  */}
        <div className="bg-secondary p-12 mb-16">
          <div className="container">
            <Image
              src={penNoBg}
              imageClassName="rounded-full w-[60px] h-[60px] object-contain"
              className="flex-center my-16"
            />

            <p className="text-md text-center mb-16">Đào tạo Odoo</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              {ODOO_TRAINING_SERVICES?.map((item, index) => (
                <Fade bottom key={index}>
                  <ServiceViewItem
                    key={index}
                    icon={
                      <Image
                        src={item?.icon}
                        imageClassName="rounded-xl w-[42px] h-[42px] object-contain"
                      />
                    }
                    className="items-center border border-gray-100"
                    title={item?.title}
                    titleClassName="font-normal mb-0"
                  />
                </Fade>
              ))}
            </div>

            <div className="flex-center">
              <Button
                title="Xem chi tiết"
                className="rounded-lg bg-primary-gradient p-8 w-fit px-24"
                textClassName="text-white"
                onClick={() => {
                  router.push('/odoo-training-service')
                }}
              />
            </div>
          </div>
        </div>

        {/*  */}
        <div className="bg-white p-12 mb-16">
          <div className="container">
            <Image
              src={computerNoBg}
              imageClassName="rounded-full w-[60px] h-[60px] object-contain"
              className="flex-center my-16"
            />

            <p className="text-md text-center mb-16">Thuê Lập trình viên Odoo</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              {ODOO_DEV_SERVICES?.map((item, index) => (
                <Fade bottom key={index}>
                  <ServiceViewItem
                    key={index}
                    icon={
                      <Image
                        src={item?.icon}
                        imageClassName="rounded-xl w-[42px] h-[42px] object-contain"
                      />
                    }
                    className="items-center border border-gray-100"
                    title={item?.title}
                    titleClassName="font-normal mb-0"
                  />
                </Fade>
              ))}
            </div>

            <div className="flex-center">
              <Button
                title="Xem chi tiết"
                className="rounded-lg bg-primary-gradient p-8 w-fit px-24"
                textClassName="text-white"
                onClick={() => {
                  router.push('/odoo-dev-service')
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Main>
  )
}

export default ServicePage

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
