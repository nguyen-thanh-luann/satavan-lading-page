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
  trainingBanner,
  trainingBannerMobile
} from '@/assets'
import { ClockOutline } from '@/assets/icons/clockOutline'
import { Button, Collapse, Image, ReasonChooseUs, ServiceViewItem } from '@/components'
import { DOMAIN_URL, WEB_DESCRIPTION, WEB_TITTLE, thumbnailImageUrl } from '@/constants'
import { ODOO_TRAINING_SERVICES } from '@/document'
import { Main } from '@/templates'

const QUESTIONS = [
  {
    icon: <TelePhoneIconOutline className="text-primary text-lg" />,
    ask: 'Phương tiện liên lạc để được hỗ trợ là gì?',
    answer: (
      <p>
        Bạn có thể liên hệ với chúng tôi qua Zalo, hotline, Email, Facebook và cá phương tiện truyền
        thông khác
      </p>
    ),
  },
  {
    icon: <TelegramIconOutline className="text-primary text-lg" />,
    ask: 'Đào tạo có thể mất bao lâu?',
    answer: (
      <p>
        Thời gian đào tạo có thể thay đổi dựa trên những gì bạn muốn học. Nó dao động từ 2 ngày đến
        15 ngày
      </p>
    ),
  },
  {
    icon: <ClockOutline className="text-primary text-lg" />,
    ask: 'Nội dung đào tạo?',
    answer: (
      <p>
        Chúng tôi có các chương trình khác nhau để đào tạo. Các chương trình đào tạo khác nhau này
        được thiết kế cho người mới bắt đầu đến các nhà phát triển nâng cao. Đôi khi chúng tôi thiết
        kế một chương trình đào tạo mới phù hợp với yêu cầu của bạn. CHỉ gần gửi cho chúng tôi yêu
        cầu đào tạo của bạn và chúng tôi sẽ gửi lại cho bạn đầy đủ nội dung đào tạo phù hợp với bạn.
      </p>
    ),
  },
  {
    icon: <QuestionIcon className="text-primary text-lg" />,
    ask: 'Ai sẽ cung cấp đào tạo?',
    answer: (
      <div>
        <p>
          Một lần nữa, nó dựa trên yêu cầu đào tạo của bạn. Chúng tôi có các giảng viên có kiến thức
          cao đang đào tạo trong 5 năm qua. Tất cả các khóa đào tạo nâng cao của chúng tôi đều được
          cung cấp bởi Parth Gajjar , người trước đây đã làm việc tại Odoo Ấn Độ trong 7 năm với tư
          cách là nhà phát triển R&D. Anh ấy đã giới thiệu một số tính năng chính trong Odoo. Ngoài
          ra, ông còn là tác giả của Sách hướng dẫn phát triển Odoo 12.
        </p>
      </div>
    ),
  },
]

const OdooTrainingServicePage = () => {
  return (
    <Main title={WEB_TITTLE} description={WEB_DESCRIPTION}>
      <div className="">
        {/* banner */}
        <div className="relative">
          <Image
            src={trainingBanner}
            imageClassName="hidden md:block md:aspect-3/1 object-cover w-full"
          />

          <Image
            src={trainingBannerMobile}
            imageClassName="aspect-1/1 md:hidden object-cover w-full"
          />

          <div className="absolute top-0 right-0 left-0 bottom-0 grid grid-cols-1 md:grid-cols-2">
            <div className=""></div>

            <div className="w-[70%] flex flex-col justify-center px-12">
              <p className="text-2xl md:text-3xl mb-12 font-bold">
                Tìm hiểu thêm về{' '}
                <span className="text-primary-gradient">đào tạo Odoo của chúng tôi</span>
              </p>

              <p className="text-sm md:text-base mb-12">
                Trở thành chuyên gia Odoo với chương trình đào tạo của chúng tôi
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

            <p className="text-center text-xl font-bold mb-12">Dịch vụ triển khai</p>

            <p className="text-center text-base text-gray mb-32">
              Tính linh hoạt, khả năng mở rộng và độ tin cậy cho các phiên bản Odoo của bạn.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {ODOO_TRAINING_SERVICES?.map((item, index) => (
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
                <span className="text-primary-gradient">Đào tạo Odoo?</span>
              </p>

              <p className="text-base">
                Các chương trình đào tạo này dành riêng cho các đối tác, nhà tích hợp và nhà phát
                triển, những người cần tìm hiểu quy trình phát triển Odoo. Chúng tôi có các chương
                trình đào tạo khác nhau được thiết kế cho người mới bắt đầu và nhà phát triển nâng
                cao.
              </p>
            </div>

            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">
              <ServiceViewItem
                icon={<ClockGradientIcon className="min-w-[46px] h-[46px]" />}
                title="Phạm vi mở rộng"
                content="Với đào tạo kỹ thuật, chúng tôi cũng bao gồm các mẫu thiết kế, công cụ phát triển, kỹ thuật gỡ lỗi, tối ưu hóa hiệu suất , v.v."
              />

              <ServiceViewItem
                icon={<UserGradientIcon className="min-w-[46px] h-[46px]" />}
                title="Thành viên chuyên dụng"
                content="Chúng tôi chỉ định chuyên gia Odoo tận tâm làm đầu mối liên hệ duy nhất."
              />

              <ServiceViewItem
                icon={<BriefCaseGradientIcon className="min-w-[46px] h-[46px]" />}
                title="Được đưa ra bởi các chuyên gia"
                content="Tất cả các khóa đào tạo của chúng tôi được đưa ra bởi các giảng viên giàu kinh nghiệm, những người có kinh nghiệm lâu năm với Odoo và biết mọi khía cạnh của Odoo."
              />

              <ServiceViewItem
                icon={<AccessGradientIcon className="min-w-[46px] h-[46px]" />}
                title="Phương pháp tiếp cận dựa trên ví dụ"
                content="Các chương trình đào tạo của chúng tôi được thiết kế với cách tiếp cận dựa trên giải pháp vấn đề. Điều này làm cho đường cong học tập thống nhất và đơn giản."
              />
            </div>
          </div>
        </section>

        <section className="bg-working-screen-background bg-no-repeat w-full bg-cover min-h-[300px]">
          <div className="container p-32">
            <p className="text-center text-white font-bold text-2xl mb-12">Câu hỏi thường gặp</p>

            <div className="bg-white rounded-md">
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

export default OdooTrainingServicePage

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
