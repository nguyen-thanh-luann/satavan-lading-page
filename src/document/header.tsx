import {
  BuildingMaterialFillIcon,
  ChartFillIcon,
  CheckoutFillIcon,
  CloudFillIcon,
  ConsumerFillIcon,
  CustomerServiceFillIcon,
  DesktopFillIcon,
  ElectronicDeviceFillIcon,
  FeatherOutlineIcon,
  FinanceGrowthFillIcon,
  GlassesFillIcon,
  HeartFillIcon,
  HomeIconOutline,
  HospitalFillIcon,
  HouseholdFillIcon,
  HrFillIcon,
  IngredientFillIcon,
  InventoryFillIcon,
  LayerFillIcon,
  LoadSpeakerFillIcon,
  NotebookIconOutlinePlus,
  PenFillIcon,
  StoreFillIcon,
  StudentFillIcon,
  TagIcon,
  TelePhoneIconOutline,
  TruckFillIcon,
  UserDoubleCircleIcon,
  WebFillIcon,
  WidgetFillIcon,
  desktopIcon,
  glassesIcon,
  hospitalIcon,
  industryIcon,
  lawIcon,
  medicineSymbolIcon,
  protectIcon,
  restaurantIcon,
  serviceIcon,
  truckIcon
} from '@/assets'
import { STATIC_PATH } from '@/constants'

export const HEADER_MOBILE_DATA = [
  {
    path: '/',
    icon: <HomeIconOutline />,
    title: 'Trang chủ',
  },
  {
    path: STATIC_PATH.service,
    icon: <TagIcon />,
    title: 'Dịch vụ',
    child: [
      {
        path: STATIC_PATH.odooDevelopService,
        iconHeader: <ChartFillIcon className="w-[46px] h-[46px]" />,
        title: 'Phát triển',
        short_content: 'Mọi thứ liên quan đến phát triển Odoo.',
      },
      {
        path: STATIC_PATH.odooDeployService,
        iconHeader: <LayerFillIcon className="w-[46px] h-[46px]" />,
        title: 'Thực hiện',
        short_content: 'Triển khai Odoo theo doanh nghiệp của bạn',
      },
      {
        path: STATIC_PATH.odooWebService,
        iconHeader: <PenFillIcon className="w-[46px] h-[46px]" />,
        title: 'Trang web & chủ đề',
        short_content: 'Tuỳ chỉnh trang web & Chủ đề Odoo.',
      },
      {
        path: STATIC_PATH.odooSupportService,
        iconHeader: <HeartFillIcon className="w-[46px] h-[46px]" />,
        title: 'Hỗ trợ',
        short_content: 'Nhận hỗ trợ nhanh chóng và chất lượng cho Odoo.',
      },
      {
        path: STATIC_PATH.odooPosIotService,
        iconHeader: <StoreFillIcon className="w-[46px] h-[46px]" />,
        title: 'Điểm bán hàng & IoT',
        short_content: 'Tuỳ chỉnh Odoo POS và tích hợp phần cứng.',
      },
      {
        path: STATIC_PATH.odooOperateService,
        iconHeader: <CloudFillIcon className="w-[46px] h-[46px]" />,
        title: 'Triển khai',
        short_content: 'Triển khai các phiên bản Odoo trên đám mây một cách hiệu quả.',
      },
      {
        path: STATIC_PATH.odooTrainingService,
        iconHeader: <StudentFillIcon className="w-[46px] h-[46px]" />,
        title: 'Đào tạo',
        short_content: 'Tìm hiểu Odoo và trở thành chuyên gia Odoo',
      },

      {
        path: STATIC_PATH.odooDevService,
        iconHeader: <DesktopFillIcon className="w-[46px] h-[46px]" />,
        title: 'Thuê lập trình viên',
        short_content: 'Thuê các nhà phát triển Odoo có tay nghề cao.',
      },
    ],
  },
  {
    path: '/',
    icon: <NotebookIconOutlinePlus />,
    title: 'Giải pháp',
    child: [
      {
        path: '',
        iconHeader: <FinanceGrowthFillIcon className="w-[46px] h-[46px]" />,
        title: 'Tài chính',
        short_conetent: 'Thu chi',
      },
      {
        path: '',
        iconHeader: <CheckoutFillIcon className="w-[46px] h-[46px]" />,
        title: 'Bán hàng',
        short_conetent: 'CRM',
      },
      {
        path: '',
        iconHeader: <WebFillIcon className="w-[46px] h-[46px]" />,
        title: 'Trang web',
        short_content: 'Thương mại điện tử',
      },
      {
        path: '',
        iconHeader: <InventoryFillIcon className="w-[46px] h-[46px]" />,
        title: 'Tồn kho và sản xuất',
        short_conetent: 'Tồn kho....',
      },
      {
        path: '',
        iconHeader: <HrFillIcon className="w-[46px] h-[46px]" />,
        title: 'Nhân sự',
        short_content: 'Nhân viên...',
      },
      {
        path: '',
        iconHeader: <LoadSpeakerFillIcon className="w-[46px] h-[46px]" />,
        title: 'Marketing',
        short_content: 'Marketing trên mạng xã hội',
      },
      {
        path: '',
        iconHeader: <CustomerServiceFillIcon className="w-[46px] h-[46px]" />,
        title: 'Dịch vụ',

        short_content: 'Dự án...',
      },
      {
        path: '',
        iconHeader: <WidgetFillIcon className="w-[46px] h-[46px]" />,
        title: 'Năng suất',
        short_content: 'Thảo luận...',
      },
    ],
  },
  {
    path: '/',
    icon: <FeatherOutlineIcon />,
    title: 'Ngành nghề',
    child: [
      {
        path: '',
        icon: lawIcon,
        iconHeader: <HospitalFillIcon className="w-[46px] h-[46px]" />,
        title: 'Giải pháp DMS cho ngành Dược phẩm',
        short_content: 'Liên kết Viettelpos, ghn, ninjavan',
      },
      {
        path: '',
        icon: truckIcon,
        iconHeader: <CustomerServiceFillIcon className="w-[46px] h-[46px]" />,
        title: 'Giải pháp quản lý dịch vụ hiện trường',
        short_content: 'Phần mềm cho ngành vận tải',
      },
      {
        path: '',
        icon: protectIcon,
        iconHeader: <IngredientFillIcon className="w-[46px] h-[46px]" />,
        title: 'Giải pháp DMS cho ngành nguyên liệu',
        short_content: 'Quản lý thi công bằng phần mềm',
      },
      {
        path: '',
        icon: industryIcon,
        iconHeader: <HouseholdFillIcon className="w-[46px] h-[46px]" />,
        title: 'Giải pháp DMS cho ngành Thiết bị gia dụng',
        short_content: 'Tối ưu hoá năng suất với chúng tôi',
      },
      {
        path: '',
        icon: hospitalIcon,
        iconHeader: <HouseholdFillIcon className="w-[46px] h-[46px]" />,
        title: 'Giải pháp DMS cho ngành Thiết bị gia dụng',
        short_content: 'Phần mềm quản lý bệnh viện',
      },
      {
        path: '',
        icon: restaurantIcon,
        iconHeader: <ElectronicDeviceFillIcon className="w-[46px] h-[46px]" />,
        title: 'Giải pháp DMS cho ngành Thiết bị điện',
        short_content: 'Tối ưu hoá quản lý nhà hàng của bạn',
      },
      {
        path: '',
        icon: medicineSymbolIcon,
        iconHeader: <DesktopFillIcon className="w-[46px] h-[46px]" />,
        title: 'Giải pháp thương mại điện tử B2B2C',
        short_content: 'Giải pháp quản lý chuyên sâu cho ngành dược phẩm',
      },
      {
        path: '',
        icon: serviceIcon,
        iconHeader: <GlassesFillIcon className="w-[46px] h-[46px]" />,
        title: 'Giải pháp DMS cho ngành Mắt kính',
        short_content: 'Gải pháp tốt nhất cho tất cả các dịch vụ',
      },
      {
        path: '',
        icon: desktopIcon,
        iconHeader: <TruckFillIcon className="w-[46px] h-[46px]" />,
        title: 'Giải pháp quản lý vận chuyển',
        short_content: 'Lựa trọn tốt nhất cho giải pháp thương mại điện tử',
      },
      {
        path: '',
        icon: glassesIcon,
        iconHeader: <BuildingMaterialFillIcon className="w-[46px] h-[46px]" />,
        title: 'Giải pháp DMS cho ngành Vật liệu xây dựng',
        short_content: 'Giải pháp quản lý chuyên sâu cho chuỗi mắt kính',
      },
    ],
  },
  {
    path: STATIC_PATH.aboutUs,
    icon: <UserDoubleCircleIcon />,
    title: 'Về chúng tôi',
    child: undefined,
  },
  {
    path: STATIC_PATH.contactUs,
    icon: <TelePhoneIconOutline />,
    title: 'Đăng ký dịch vụ',
    child: undefined,
  },
]

export const HEADER_JOBS_DATA = [
  {
    path: '',
    iconHeader: <HospitalFillIcon className="w-[46px] h-[46px]" />,
    title: 'Giải pháp DMS cho ngành Dược phẩm',
    short_content: 'Phần mềm DMS cho ngành dược phẩm ,quản lý bán hàng, giao hàng, công nợ,...',
  },
  {
    path: '',
    iconHeader: <CustomerServiceFillIcon className="w-[46px] h-[46px]" />,
    title: 'Giải pháp quản lý dịch vụ hiện trường',
    short_content: 'Phân tích thị trường quản lý dịch vụ tại hiện trường (FSM)...',
  },
  {
    path: '',
    iconHeader: <IngredientFillIcon className="w-[46px] h-[46px]" />,
    title: 'Giải pháp DMS cho ngành nguyên liệu',
    short_content: 'Phần mềm DMS cho ngành nguyên liệu ,quản lý bán hàng, giao hàng, công nợ, ...',
  },
  {
    path: '',
    iconHeader: <ConsumerFillIcon className="w-[46px] h-[46px]" />,
    title: 'Giải pháp DMS cho ngành hàng tiêu dùng',
    short_content: 'Phần mềm DMS ngành hàng tiêu dùng ,quản lý bán hàng, giao hàng, công nợ, ...',
  },
  {
    path: '',
    iconHeader: <HouseholdFillIcon className="w-[46px] h-[46px]" />,
    title: 'Giải pháp DMS cho ngành Thiết bị gia dụng',
    short_content: 'Phần mềm DMS ngành gia dụng ,quản lý bán hàng, giao hàng, công nợ, ...',
  },
  {
    path: '',
    iconHeader: <ElectronicDeviceFillIcon className="w-[46px] h-[46px]" />,
    title: 'Giải pháp DMS cho ngành Thiết bị điện',
    short_content: 'Phần mềm DMS ngành điện nước ,quản lý bán hàng, giao hàng, công nợ, ...',
  },
  {
    path: '',
    iconHeader: <DesktopFillIcon className="w-[46px] h-[46px]" />,
    title: 'Giải pháp thương mại điện tử B2B2C',
    short_content: 'Giải pháp thương mại điện tử cho doanh nghiệp',
  },
  {
    path: '',
    iconHeader: <GlassesFillIcon className="w-[46px] h-[46px]" />,
    title: 'Giải pháp DMS cho ngành Mắt kính',
    short_content: 'Phần mềm DMS ngành mắt kinh ,quản lý bán hàng, giao hàng, công nợ, ...',
  },
  {
    path: '',
    iconHeader: <TruckFillIcon className="w-[46px] h-[46px]" />,
    title: 'Giải pháp quản lý vận chuyển',
    short_content: 'App ship nội bộ, kết nối api giao hàng với Viettelpos. Ninjavan...',
  },
  {
    path: '',
    iconHeader: <BuildingMaterialFillIcon className="w-[46px] h-[46px]" />,
    title: 'Giải pháp DMS cho ngành Vật liệu xây dựng',
    short_content: 'Phần mềm DMS ngành vật liệu ,quản lý bán hàng, giao hàng, công nợ, ...',
  },
]

export const HEADER_SOLUTIONS_DATA = [
  {
    path: '',
    iconHeader: <FinanceGrowthFillIcon className='w-[46px] h-[46px]'/>,
    title: 'Tài chính',
    list_service: [
      {
        title: 'Thu chi',
      },
      {
        title: 'Hóa đơn',
      },
      {
        title: 'Chi phí',
      },
      {
        title: 'Bảng tính (BI)',
      },
      {
        title: 'Tài liệu',
      },
      {
        title: 'Chữ ký',
      },
    ],
  },
  {
    path: '',
    iconHeader: <CheckoutFillIcon className='w-[46px] h-[46px]'/>,
    title: 'Bán hàng',
    list_service: [
      {
        title: 'CRM',
      },
      {
        title: 'Bán hàng',
      },
      {
        title: 'POS',
      },
      {
        title: 'Đăng ký',
      },
      {
        title: 'Cho thuê',
      },
      {
        title: 'Kết nối Amazon',
      },
    ],
  },
  {
    path: '',
    iconHeader: <WebFillIcon className='w-[46px] h-[46px]'/>,
    title: 'Trang web',
    list_service: [
      {
        title: 'Trình tạo trang web',
      },
      {
        title: 'Thương mại điện tử',
      },
      {
        title: 'Blog',
      },
      {
        title: 'Diễn đàn',
      },
      {
        title: 'Trò chuyện trực tiếp',
      },
      {
        title: 'Học trực tuyến',
      },
    ],
  },
  {
    path: '',
    iconHeader: <InventoryFillIcon className='w-[46px] h-[46px]'/>,

    title: 'Tồn kho và sản xuất',
    list_service: [
      {
        title: 'Tồn kho',
      },
      {
        title: 'Sản xuất',
      },
      {
        title: 'PLM',
      },
      {
        title: 'Mua hàng',
      },
      {
        title: 'Bảo trì',
      },
      {
        title: 'Chất lượng',
      },
    ],
  },
  {
    path: '',
    iconHeader: <HrFillIcon className='w-[46px] h-[46px]'/>,
    title: 'Nhân sự',
    list_service: [
      {
        title: 'Nhân viên',
      },
      {
        title: 'Tuyển dụng',
      },
      {
        title: 'Đánh giá',
      },
      {
        title: 'Giới thiệu',
      },
    ],
  },
  {
    path: '',
    iconHeader: <LoadSpeakerFillIcon className='w-[46px] h-[46px]'/>,
    title: 'Marketing',
    list_service: [
      {
        title: 'Marketing trên mạng xã hội',
      },
      {
        title: 'Marketing qua email',
      },
      {
        title: 'Marketing qua SMS',
      },
      {
        title: 'Sự kiện',
      },
      {
        title: 'Tự động hóa marketing',
      },
      {
        title: 'Khảo sát',
      },
    ],
  },
  {
    path: '',
    iconHeader: <CustomerServiceFillIcon className='w-[46px] h-[46px]'/>,

    title: 'Dịch vụ',
    list_service: [
      {
        title: 'Dự án',
      },
      {
        title: 'Chấm công',
      },
      {
        title: 'Dịch vụ hiện trường',
      },
      {
        title: 'Hỗ trợ',
      },
      {
        title: 'Kế hoạch',
      },
      {
        title: 'Lịch hẹn',
      },
    ],
  },
  {
    path: '',
    iconHeader: <WidgetFillIcon className='w-[46px] h-[46px]'/>,

    title: 'Năng suất',
    list_service: [
      {
        title: 'Thảo luận',
      },
      {
        title: 'Phê duyệt',
      },
      {
        title: 'IoT',
      },
      {
        title: 'VoIP',
      },
    ],
  },
]
