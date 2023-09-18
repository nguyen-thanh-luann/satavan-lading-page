import {
  ChartFillIcon,
  CloudFillIcon,
  DesktopFillIcon,
  HeartFillIcon,
  LayerFillIcon,
  PenFillIcon,
  StoreFillIcon,
  StudentFillIcon,
  caringBackground,
  caringIcon,
  cartGreen,
  cartOrange,
  cash,
  cdn,
  chart,
  chip,
  codeBlue,
  codeGreen,
  connect,
  db,
  developBackground,
  flash,
  folder,
  heart,
  implementBackground,
  implementIcon,
  maintain,
  mobile,
  move,
  noteBookBlack,
  phone,
  phoneBook,
  pos,
  save,
  saveFillPink,
  screenPurple,
  search,
  setting,
  storeBackground,
  storeIcon,
  student,
  supportBackground,
  sync,
  teach,
  tool,
  topic,
  touch,
  touchPurple,
  trainingBackground,
  webBackground,
  webIcon,
  wifiOff,
  workBackground,
  workIcon
} from '@/assets'
import { STATIC_PATH } from '@/constants'

export const SERVICE_LIST = [
  {
    path: STATIC_PATH.odooDevelopService,
    iconHome: <ChartFillIcon className="w-[70px] h-[70px]" />,
    iconHeader: <ChartFillIcon className="w-[46px] h-[46px]" />,
    background: developBackground,
    background_name: 'develop-background',
    title: 'Phát triển',
    short_content: 'Mọi thứ liên quan đến phát triển Odoo.',
    full_content:
      'Tùy chỉnh các modules Odoo, tích hợp với các dịch vụ bên ngoài, di chuyển từ phiên bản cũ và hơn thế nữa.',
  },
  {
    path: STATIC_PATH.odooDeployService,
    iconHome: <LayerFillIcon className="w-[70px] h-[70px]" />,
    iconHeader: <LayerFillIcon className="w-[46px] h-[46px]" />,
    background: caringBackground,
    background_name: 'caring-background',
    title: 'Thực hiện',
    short_content: 'Triển khai Odoo theo doanh nghiệp của bạn',
    full_content:
      'Chúng tôi hiểu nhu cầu kinh doanh của bạn và thiết lập Odoo theo đúng cách để đáp ứng nhu cầu kinh doanh của bạn.',
  },
  {
    path: STATIC_PATH.odooWebService,
    iconHome: <PenFillIcon className="w-[70px] h-[70px]" />,
    iconHeader: <PenFillIcon className="w-[46px] h-[46px]" />,
    background: webBackground,
    background_name: 'web-background',
    title: 'Trang web & chủ đề',
    short_content: 'Tuỳ chỉnh trang web & Chủ đề Odoo.',
    full_content:
      'Xây dựng trang web Odoo bắt mắt, nhanh chóng, có thể định cấu hình với các chủ đề tùy chỉnh đẹp mắt.',
  },
  {
    path: STATIC_PATH.odooSupportService,
    iconHome: <HeartFillIcon className="w-[70px] h-[70px]" />,
    iconHeader: <HeartFillIcon className="w-[46px] h-[46px]" />,
    background: supportBackground,
    background_name: 'support-background',
    title: 'Hỗ trợ',
    short_content: 'Nhận hỗ trợ nhanh chóng và chất lượng cho Odoo.',
    full_content:
      'Hỗ trợ kỹ thuật hoặc chức năng Odoo, sửa lỗi, gỡ lỗi, tối ưu hóa hiệu suất, v.v.',
  },
  {
    path: STATIC_PATH.odooPosIotService,
    iconHome: <StoreFillIcon className="w-[70px] h-[70px]" />,
    iconHeader: <StoreFillIcon className="w-[46px] h-[46px]" />,
    background: storeBackground,
    background_name: 'store-background',
    title: 'Điểm bán hàng & IoT',
    short_content: 'Tuỳ chỉnh Odoo POS và tích hợp phần cứng.',
    full_content:
      'Tùy chỉnh Odoo POS cho các cửa hàng bán lẻ và nhà hàng của bạn. Tích hợp nó với các thiết bị phần cứng để tăng năng suất của bạn.',
  },
  {
    path: STATIC_PATH.odooOperateService,
    iconHome: <CloudFillIcon className="w-[70px] h-[70px]" />,
    iconHeader: <CloudFillIcon className="w-[46px] h-[46px]" />,
    background: implementBackground,
    background_name: 'implement-background',
    title: 'Triển khai',
    short_content: 'Triển khai các phiên bản Odoo trên đám mây một cách hiệu quả.',
    full_content:
      'Xây dựng trang web Odoo bắt mắt, nhanh chóng, có thể định cấu hình với các chủ đề tùy chỉnh đẹp mắt.',
  },
  {
    path: STATIC_PATH.odooTrainingService,
    iconHome: <StudentFillIcon className="w-[70px] h-[70px]" />,
    iconHeader: <StudentFillIcon className="w-[46px] h-[46px]" />,
    background: trainingBackground,
    background_name: 'training-background',
    title: 'Đào tạo',
    short_content: 'Tìm hiểu Odoo và trở thành chuyên gia Odoo',
    full_content:
      'Tìm hiểu cách phát triển hoặc tùy chỉnh phụ trợ Odoo, trang web, khung JavaScript, quản trị hệ thống, chủ đề, v.v.',
  },

  {
    path: STATIC_PATH.odooDevService,
    iconHome: <DesktopFillIcon className="w-[70px] h-[70px]" />,
    iconHeader: <DesktopFillIcon className="w-[46px] h-[46px]" />,
    background: workBackground,
    background_name: 'work-background',
    title: 'Thuê lập trình viên',
    short_content: 'Thuê các nhà phát triển Odoo có tay nghề cao.',
    full_content:
      'Thuê nhà phát triển Odoo full-stack để phát triển, bảo trì hoặc định cấu hình các ứng dụng Odoo một cách thường xuyên.',
  },
]

export const ODOO_DEVELOP_SERVICES = [
  {
    icon: caringIcon,
    title: 'Modules Odoo mới',
    content: 'Phát triển các mô-đun Odoo mới từ đầu dựa trên yêu cầu của bạn.',
  },
  {
    icon: setting,
    title: 'Tuỳ chỉnh Modules',
    content: 'Tùy chỉnh các ứng dụng Odoo hiện có để thêm các tính năng mới vào hệ thống của bạn.',
  },
  {
    icon: implementIcon,
    title: 'Tích hợp API',
    content:
      'Kết nối Odoo với các dịch vụ bên ngoài. ví dụ: API Vận chuyển, Thanh toán, Thương mại điện tử, v.v.',
  },
  {
    icon: move,
    title: 'Di chuyển Modules',
    content:
      'Nếu bạn đang sử dụng mô-đun từ phiên bản cũ hơn. Chúng tôi có thể giúp bạn di chuyển nó sang các phiên bản mới nhất.',
  },
  {
    icon: saveFillPink,
    title: 'Tùy chỉnh báo cáo',
    content:
      'Tạo hoặc tùy chỉnh bất kỳ loại báo cáo Odoo nào như PDF, Excel hoặc bất kỳ định dạng nào khác.',
  },
  {
    icon: tool,
    title: 'Công cụ BI',
    content:
      'Phát triển các công cụ BI mới như biểu đồ, bảng điều khiển, bảng, KPI hoặc các loại dữ liệu khác.',
  },
  {
    icon: cartGreen,
    title: 'Ứng dụng IAP',
    content:
      'Các ứng dụng mua hàng trong ứng dụng (IAP) để kích hoạt các tùy chọn mua trong chính ứng dụng đó.',
  },
  {
    icon: touch,
    title: 'Chế độ xem phụ trợ',
    content:
      'Tùy chỉnh chế độ xem giao diện người dùng hiện có hoặc tạo chế độ xem hoàn toàn mới từ đầu.',
  },
  {
    icon: codeBlue,
    title: 'Phát triển JavaScript',
    content:
      'Phát triển các công cụ BI mới như biểu đồ, bảng điều khiển, bảng, KPI hoặc các loại dữ liệu khác.',
  },
  {
    icon: webIcon,
    title: 'Trang web & chủ đề',
    content: 'Tùy chỉnh trang web Odoo, cổng thông tin, Thương mại điện tử và hơn thế nữa.',
  },
  {
    icon: storeIcon,
    title: 'Điểm bán hàng & IoT',
    content: 'Tùy chỉnh Odoo POS và tích hợp nó với phần cứng',
  },
  {
    icon: flash,
    title: 'Tài nguyên ngoài khơi',
    content:
      'Mọi thứ liên quan đến ứng dụng web Odoo. ví dụ: tiện ích con, bảng điều khiển, báo cáo giao diện người dùng, v.v.',
  },
]

export const ODOO_DEPLOY_SERVICES = [
  {
    icon: phoneBook,
    title: 'Thu thập các yêu cầu',
    content:
      'Các cuộc họp với người quản lý, người dùng cuối và giám đốc điều hành để tạo ra thông số kỹ thuật dự thảo.',
  },
  {
    icon: chip,
    title: 'Phân tích lỗ hổng',
    content: 'Tùy chỉnh các ứng dụng Odoo hiện có để thêm các tính năng mới vào hệ thống của bạn.',
  },
  {
    icon: codeGreen,
    title: 'Tùy chỉnh và phát triển',
    content: 'Bắt đầu tùy chỉnh và phát triển thực tế để định hình Odoo theo yêu cầu của bạn.',
  },
  {
    icon: touchPurple,
    title: 'Thử nghiệm và trình diễn',
    content:
      'Thể hiện tiến độ của dự án thường xuyên. Ngoài ra, hãy cung cấp các phiên bản thử nghiệm cho bản demo.',
  },
  {
    icon: teach,
    title: 'Triển khai',
    content:
      'Cuối cùng, triển khai dự án của bạn để sử dụng sản xuất với sao lưu tự động và bảo mật đầy đủ.',
  },
  {
    icon: folder,
    title: 'Nhập dữ liệu',
    content: 'Chúng tôi giúp bạn nhập dữ liệu lớn từ hệ thống cũ vào phiên bản Odoo của bạn.',
  },
  {
    icon: student,
    title: 'Đào tạo người dùng',
    content: 'Đào tạo đầy đủ cho người dùng/khách hàng của bạn để hiểu cách sử dụng hệ thống.',
  },
  {
    icon: maintain,
    title: 'Bảo trì',
    content: 'Bảo trì máy chủ sau khi hoàn thành dự án để có được hiệu suất tuyệt vời sau đó.',
  },
  {
    icon: heart,
    title: 'Ủng hộ',
    content: 'Nhận hỗ trợ nhanh chóng để giúp bạn giải quyết các vấn đề về cấu hình và sản xuất.',
  },
]

export const ODOO_WEB_TOPIC_SERVICES = [
  {
    icon: webIcon,
    title: 'Tuỳ chỉnh trang web',
    content: 'Tùy chỉnh trang web Odoo để thay đổi quy trình theo nhu cầu kinh doanh của bạn.',
  },
  {
    icon: topic,
    title: 'Phát triển chủ đề',
    content: 'Tạo các chủ đề đẹp mắt, đáp ứng với các khối xây dựng mới cho Odoo.',
  },
  {
    icon: cartOrange,
    title: 'Tùy chỉnh thương mại điện tử',
    content:
      'Làm phong phú thêm Thương mại điện tử Odoo để đưa trải nghiệm của khách hàng của bạn lên một tầm cao mới.',
  },
  {
    icon: workIcon,
    title: 'Cổng thông tin trang web',
    content:
      'Triển khai các cổng mạnh mẽ trên trang web Odoo để nâng cao hoạt động kinh doanh B2B của bạn.',
  },
  {
    icon: cash,
    title: 'Cổng thanh toán',
    content: 'Tích hợp các cổng thanh toán mới trong Thương mại điện tử Odoo của bạn.',
  },
  {
    icon: caringIcon,
    title: 'Đoạn trích động',
    content: 'Phát triển các đoạn mã động tự thay đổi dựa trên môi trường người dùng.',
  },
  {
    icon: search,
    title: 'Tối ưu hóa SEO',
    content:
      'Tối ưu hóa SEO cho các trang web Odoo của bạn để có thứ hạng tốt hơn trong các công cụ tìm kiếm.',
  },
  {
    icon: chart,
    title: 'Điều chỉnh hiệu suất',
    content:
      'Cải thiện hiệu suất của trang web Odoo của bạn bằng các kỹ thuật như CDN, bộ đệm và hơn thế nữa.',
  },
  {
    icon: noteBookBlack,
    title: 'Tùy chỉnh trình chỉnh sửa',
    content: 'Tùy chỉnh trình chỉnh sửa web Odoo WYSIWYG để thêm hoặc tùy chỉnh các tùy chọn',
  },
]

export const ODOO_SUPPORT_SERVICES = [
  {
    icon: codeBlue,
    title: 'Hỗ trợ kỹ thuật',
    content:
      'Chúng tôi cung cấp cho bạn giải pháp nhanh chóng và hiệu quả cho mọi vấn đề kỹ thuật.',
  },
  {
    icon: touch,
    title: 'Hỗ trợ chức năng',
    content: 'Chúng tôi cung cấp cho bạn hướng dẫn chức năng cần thiết để Odoo hoạt động trơn tru.',
  },
  {
    icon: implementIcon,
    title: 'Hỗ trợ triển khai',
    content: 'Chúng tôi cung cấp cho bạn hướng dẫn triển khai cho Odoo.',
  },
  {
    icon: folder,
    title: 'Nhập dữ liệu',
    content: 'Chúng tôi cung cấp cho bạn hướng dẫn chức năng cần thiết để Odoo hoạt động trơn tru.',
  },
  {
    icon: student,
    title: 'Đào tạo',
    content: 'Nhận kiến ​​thức chuyên sâu về Odoo từ các chuyên gia đào tạo.',
  },
  {
    icon: setting,
    title: 'Điều chỉnh hiệu suất',
    content:
      'Gỡ lỗi và khắc phục sự cố trong các phiên bản Odoo của bạn để có được hiệu suất tốt nhất.',
  },
]

export const ODOO_POS_IOT_SERVICES = [
  {
    icon: pos,
    title: 'Tùy chỉnh POS',
    content:
      'Chúng tôi có thể tuỳ chỉnh hệ thống điểm bán hàng Odoo theo bất kỳ cách nào bạn muốn.',
  },
  {
    icon: storeIcon,
    title: 'Tùy chỉnh nhà hàng',
    content: 'Tuỳ chỉnh Odoo POS cho nhà hàng để nhà hàng của bạn hoạt động hiệu quả hơn.',
  },
  {
    icon: mobile,
    title: 'Tùy chỉnh hộp IoT',
    content: 'Tuỳ chỉnh Odoo IoT hoặc POS Box để thêm các tính năng mới trong đó.',
  },
  {
    icon: connect,
    title: 'Tích hợp thiết bị mới',
    content:
      'Nếu phần cứng của bạn không được IoT Box hỗ trợ, chúng tôi có thể giúp bạn tích hợp nó với Odoo.',
  },
  {
    icon: save,
    title: 'Sửa đổi biên nhận',
    content:
      'Nếu Hoá đơn POS mặc định không đủ cho bạn, thì chúng tôi có thể tuỳ chỉnh biên lai cho bạn.',
  },
  {
    icon: wifiOff,
    title: 'Giải pháp ngoại tuyến',
    content:
      'Odoo POS hoạt động ngoại tuyến nhưng hầu hết các ứng dụng không hoạt động ngoại tuyến, chúng tôi có thể làm cho nó hoạt động.',
  },
]

export const ODOO_OPERATE_SERVICES = [
  {
    icon: implementIcon,
    title: 'Triển khai trên đám mây',
    content:
      'Triển khai cách phiên bản Odoo trên bất kỳ dịch vụ đám mây nào như AWS, Digital Ocean, Linode và các dịch vụ khác.',
  },
  {
    icon: caringIcon,
    title: 'Quản lý trên Odoo.sh',
    content: 'Chúng tôi giúp bạn thiết lập và quản lý các phân bản Odoo trên nền tảng Odoo.sh',
  },
  {
    icon: setting,
    title: 'Điều chỉnh hiệu xuất',
    content: 'Tối ưu hoá máy chủ của bạn để có được hiệu suất đầy đủ từ cơ sở hạ tầng của bạn',
  },
  {
    icon: cdn,
    title: 'Tích hợp CDN',
    content:
      'Tích hợp trang web Odoo với các mạng phân phối nội dung cho các trang web siêu nhanh.',
  },
  {
    icon: sync,
    title: 'Sao lưu tự động',
    content:
      'Triển khai sao lưu tự động cho các phiên bản Odoo của bạn để tránh mất dữ liệu do vô tình.',
  },
  {
    icon: maintain,
    title: 'Hỗ trợ bảo trì',
    content: 'Duy trì phiên bản Odoo của bạn thường xuyên và khắc phục sự cố nhanh chóng.',
  },
]

export const ODOO_TRAINING_SERVICES = [
  {
    icon: webIcon,
    title: 'Đào tạo phụ trợ Odoo',
    content:
      'Tìm hiểu cách phát triển hoặc tùy chỉnh các mô-đun trong Odoo và có kiến thức chuyên sâu về Odoo ORM, Chế độ xem, Báo cáo, v.v.',
  },
  {
    icon: topic,
    title: 'Đào tạo trang web Odoo',
    content:
      'Tìm hiểu cách tạo hoặc tùy chỉnh các ứng dụng trang web Odoo bao gồm các trang động, đoạn trích, biểu mẫu, v.v.',
  },
  {
    icon: cartOrange,
    title: 'Đào tạo theo chủ đề Odoo',
    content:
      'Tìm hiểu cách thiết kế và tạo các chủ đề đẹp mắt với các khối xây dựng mạnh mẽ cho các trang web Odoo.',
  },
  {
    icon: screenPurple,
    title: 'Đào tạo Javascript Odoo',
    content:
      'Tìm hiểu cách tùy chỉnh ứng dụng khách web phụ trợ Odoo bao gồm các trường, tiện ích, chế độ xem, bảng điều khiển, v.v.',
  },
  {
    icon: cash,
    title: 'Đào tạo triển khai Odoo',
    content: 'Tìm hiểu các phương pháp hay nhất để triển khai Odoo trên đám mây.',
  },
  {
    icon: caringIcon,
    title: 'Đào tạo Odoo.Sh',
    content: 'Tìm hiểu cách quản lý các phiên bản Odoo của bạn trên nền tảng Odoo.sh.',
  },
]

export const ODOO_DEV_SERVICES = [
  {
    icon: codeGreen,
    title: 'Lập trình viên full Stack',
    content:
      'Thuê chuyên gia Odoo biết mọi thứ về phụ trợ, giao diện người dùng, trang web, chủ đề, cấu hình máy chủ, v.v.',
  },
  {
    icon: student,
    title: 'Chuyên gia phụ trợ',
    content:
      'Thuê nhà phát triển phụ trợ Odoo để tùy chỉnh các ứng dụng Odoo hiện có hoặc tạo các ứng dụng mới từ đầu.',
  },
  {
    icon: phone,
    title: 'Chuyên gia ứng dụng di động',
    content:
      'Thuê nhà phát triển ứng dụng di động để phát triển các ứng dụng di động Android và iOS được tích hợp đầy đủ.',
  },
  {
    icon: codeBlue,
    title: 'Chuyên gia JavaScript',
    content:
      'Thuê chuyên gia javascript của Odoo để phát triển hoặc tùy chỉnh ứng dụng khách web, bảng điều khiển, chế độ xem, trường, widget, v.v.',
  },
  {
    icon: webIcon,
    title: 'Chuyên gia trang web',
    content:
      'Thuê một nhà phát triển để tùy chỉnh các trang web, chủ đề, Thương mại điện tử, Blog, Cổng web, Tích hợp thanh toán, v.v. của Odoo.',
  },
  {
    icon: db,
    title: 'Chuyên gia máy chủ',
    content:
      'Thuê chuyên gia máy chủ Odoo để triển khai và quản lý các phiên bản Odoo của bạn trên đám mây hoặc Odoo.sh.',
  },
]
