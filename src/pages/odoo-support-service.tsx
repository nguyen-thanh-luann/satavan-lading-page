import {
  AccessGradientIcon,
  BriefCaseGradientIcon,
  ClockGradientIcon,
  MinusIcon,
  PlusIcon,
  QuestionIcon,
  TelePhoneIconOutline,
  TelegramIconOutline,
  UserGradientIcon,
  supportBanner,
  supportBannerMobile
} from '@/assets'
import { ClockOutline } from '@/assets/icons/clockOutline'
import { Button, Collapse, Image, ReasonChooseUs, ServiceViewItem } from '@/components'
import { DOMAIN_URL, WEB_DESCRIPTION, WEB_TITTLE, thumbnailImageUrl } from '@/constants'
import { ODOO_SUPPORT_SERVICES } from '@/document'
import { Main } from '@/templates'

const QUESTIONS = [
  {
    icon: <TelePhoneIconOutline className="text-primary text-lg" />,
    ask: 'Phương tiện liên lạc để được hỗ trợ là gì?',
    answer: (
      <p>
        Bạn có thể liên hệ với chúng tôi qua Zalo, hotline, Email, Facebook và cá phương tiện truyền
        thông khác,
      </p>
    ),
  },
  {
    icon: <TelegramIconOutline className="text-primary text-lg" />,
    ask: 'Làm cách nào tôi có thể theo dõi trạng thái gói hỗ trợ của mình?',
    answer: (
      <p>
        Sau khi mua gói hỗ trợ của chúng tôi, chúng tôi sẽ cấp cho bạn quyền truy cập vào Cổng thông
        tin của chúng tôi. Nơi bạn có thể có một cái nhìn tổng quan đầy đủ về dự án của bạn. Bạn có
        thể xem chi tiết đầy đủ và chuỗi liên lạc về các truy vấn của mình.
      </p>
    ),
  },
  {
    icon: <ClockOutline className="text-primary text-lg" />,
    ask: 'Thời gian hỗ trợ?',
    answer: (
      <p>
        Thời gian hỗ trợ thông thường của chúng tôi là từ 10:00 sáng đến 7:00 tối theo Giờ chuẩn Ấn
        Độ (IST) từ Thứ Hai đến Thứ Sáu, trừ tất cả các ngày lễ. Nhưng bạn có thể liên hệ với chúng
        tôi bất cứ lúc nào, các thành viên trong nhóm của chúng tôi cũng thường trả lời sau giờ hành
        chính.
      </p>
    ),
  },
  {
    icon: <QuestionIcon className="text-primary text-lg" />,
    ask: 'Những gì được bao gồm trong hỗ trợ miễn phí?',
    answer: (
      <div>
        <p>Miễn phí không giới hạn chỉ khả dụng nếu các điều kiện sau được đáp ứng:</p>

        <ul className="list-disc">
          <li>
            Nó chỉ khả dụng cho các ứng dụng của chúng tôi được mua từ Cửa hàng ứng dụng Odoo.
          </li>
          <li>Hỗ trợ miễn phí có giá trị trong 60 ngày kể từ ngày mua.</li>
          <li>Bạn có thể hỏi bất kỳ câu hỏi chức năng nào liên quan đến ứng dụng đó.</li>
          <li>
            Chúng tôi cũng cung cấp các bản sửa lỗi không giới hạn cho các ứng dụng của mình nếu lỗi
            xảy ra với vanilla Odoo.
          </li>
          <li>Nó không bao gồm tùy chỉnh mới.</li>
        </ul>
      </div>
    ),
  },
]

const OdooSupportServicePage = () => {
  return (
    <Main title={WEB_TITTLE} description={WEB_DESCRIPTION}>
      <div className="">
        {/* banner */}
        <div className="relative">
          <Image
            src={supportBanner}
            imageClassName="hidden md:block md:aspect-3/1 object-cover w-full"
          />

          <Image
            src={supportBannerMobile}
            imageClassName="aspect-1/1 md:hidden object-cover w-full"
          />

          <div className="absolute top-0 right-0 left-0 bottom-0 grid grid-cols-1 md:grid-cols-2">
            <div className=""></div>

            <div className="w-[70%] flex flex-col justify-center px-12">
              <p className="text-2xl md:text-3xl mb-12 font-bold">
                Nhận <span className="text-primary-gradient">hỗ trợ nhanh </span>
                Đối với Odoo{' '}
              </p>

              <p className="text-sm md:text-base mb-12">
                Nhận hỗ trợ nhanh hơn để tiếp tục điều hành doanh nghiệp của bạn một cách liền mạch.
              </p>
            </div>
          </div>
        </div>

        <section className="bg-secondary">
          <div className="container p-32">
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
              {ODOO_SUPPORT_SERVICES?.map((item, index) => (
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
        </section>

        <section>
          <div className="container grid grid-cols-1 md:grid-cols-3 gap-12 p-32">
            <div>
              <p className="text-2xl font-bold mb-8">
                Tại sao chúng tôi là lựa chọn tốt nhất cho{' '}
                <span className="text-primary-gradient">Hỗ trợ Odoo ?</span>
              </p>

              <p className="text-base">
                Với kinh nghiệm sâu rộng về Odoo, chúng tôi đã giúp một số người dùng giải quyết các
                vấn đề liên quan đến Odoo của họ. Bạn có thể để lại những lo lắng liên quan đến Odoo
                cho chúng tôi.
              </p>
            </div>

            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">
              <ServiceViewItem
                icon={<ClockGradientIcon className="min-w-[46px] h-[46px]" />}
                title="Thời gian đáp ứng nhanh"
                content="Chúng tôi cung cấp hỗ trợ kịp thời, nhanh chóng và chất lượng cho Odoo."
              />

              <ServiceViewItem
                icon={<UserGradientIcon className="min-w-[46px] h-[46px]" />}
                title="Thành viên chuyên dụng"
                content="Chúng tôi chỉ định chuyên gia Odoo tận tâm làm đầu mối liên hệ duy nhất."
              />

              <ServiceViewItem
                icon={<BriefCaseGradientIcon className="min-w-[46px] h-[46px]" />}
                title="Đội ngũ giàu kinh nghiệm"
                content="Các thành viên trong nhóm chuyên gia của chúng tôi sẽ giúp bạn giải quyết mọi vấn đề liên quan đến Odoo."
              />

              <ServiceViewItem
                icon={<AccessGradientIcon className="min-w-[46px] h-[46px]" />}
                title="Truy cập cổng thông tin"
                content="Chúng tôi cấp cho bạn quyền truy cập cổng thông tin để tiếp tục theo dõi các gói hỗ trợ của bạn."
              />
            </div>
          </div>
        </section>

        <section className="bg-vscode-screen-background bg-no-repeat bg-cover w-full min-h-[300px]">
          <div className="container p-32">
            <p className="text-center text-white font-bold text-2xl mb-12">Câu hỏi thường gặp</p>

            <div className="bg-white rounded-md border border-gray-100">
              {QUESTIONS?.map((item, index) => (
                <Collapse
                  key={index}
                  iconPosition="right"
                  expandIcon={<PlusIcon />}
                  contractIcon={<MinusIcon />}
                  labelClassName="p-12"
                  label={
                    <div className="flex items-center gap-8">
                      <div>{item?.icon}</div>
                      <p>{item?.ask}</p>
                    </div>
                  }
                  children={
                    <div className="px-32 py-8 border-b border-gray-200">{item?.answer}</div>
                  }
                />
              ))}
            </div>
          </div>
        </section>

        <ReasonChooseUs />
      </div>
    </Main>
  )
}

export default OdooSupportServicePage

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
