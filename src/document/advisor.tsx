import { hangNamSang, quangThai, theHoang, theHung } from '@/assets'

export const ADVISOR_BOARD = [
  {
    image: hangNamSang,
    decorColor: 'border-t-orange',
    name: 'Tiến sĩ Hàng Sấm Nang',
    story: (
      <div>
        <ul className="list-disc">
          <li className="">Tiến sĩ MIS - Đại học UITM Ba Lan.</li>
          <li className="">Chứng chỉ Quản lý dự án PMP PMI của Hoa Kỳ.</li>
          <li className="">Giảng viên Hệ thống thông tin quản lý MIS/CEO của VCCI.</li>
          <li className="">
            Giảng viên Chuyên đề hệ thống thông tin quản lý cho các lớp cao học Quản trị của Đại học
            Kinh tế.
          </li>
        </ul>
      </div>
    ),
  },
  {
    image: theHung,
    decorColor: 'border-t-green',
    name: 'Lữ Vincent Thế Hùng',
    story: (
      <div>
        <ul className="list-disc">
          <li className="">
            Thành viên Hội đồng quản trị và CEO của Công ty Đầu tư & Phát triển Công nghệ A.YERSIN,
            và TESSE JSC.
          </li>
          <li className="">
            Hơn 30 năm kinh nghiệm. Ông đã làm việc với nhiều tập đoàn đa quốc gia, bao gồm Nestle,
            SSE Steels, Dong Sung Pharmaceuticals và Toyota.
          </li>
          <li className="">Hội đồng quản trị và Giám đốc V-India Hub</li>
        </ul>
      </div>
    ),
  },
  {
    image: theHoang,
    decorColor: 'border-t-blue',
    name: 'Phạm Thế Hoàng',
    story: (
      <div>
        <ul className="list-disc">
          <li className="">
            2015-present: Business Development Consultant for Amy Viet Nam; Utpala Group; Vietnam
            Marketer; La Sicilia – Italian; Schoco Crown; GC Food; Neo Nam Viet; K Group; BB Link;
            Thanh Nhan; Khai Thanh.
          </li>
          <li className="">2007-2015: Nestlé Vietnam Ltd. as Business Development Manager</li>
          <li className="">
            2002-2003: SSE Steel Ltd. (Australia) as Human Resources Director in Hai Phong.
          </li>
          <li className="">2004-2007: Trade Link Company as Managing Director</li>
        </ul>
      </div>
    ),
  },
  {
    image: quangThai,
    decorColor: 'border-t-red',
    name: 'Dr.Sales Nguyễn Quang Thái',
    story: (
      <div>
        <ul className="list-disc">
          <li className="">
            Có 18 năm kinh nghiệm trong việc làm Quản lý và Điều hành thực chiến tại các công ty,
            các tập đoàn về lĩnh vực kinh doanh và phát triển thị trường với hàng trăm nhân viên.
          </li>
          <li className="">
            Vai trò Huấn luyện, Đào tạo, Coaching đến lĩnh vực mô hình kinh doanh, Xây dựng thương
            hiệu và Khởi Nghiệp tại các trường Đại học phía Nam tổ chức
          </li>
          <li className="">
            Vai trò Ban Giảm Khảo và Mentor trong các cuộc thi về Khởi Nghiệp Đổi Mới Sáng Tạo do
            các Ban- Ngành- Đoàn- Thể, các trường Đại học tổ chức hàng năm.{' '}
          </li>
          <li className="">Chứng Chỉ Bồi Dưỡng Nghiệp Vụ Sư Phạm</li>
        </ul>
      </div>
    ),
  },
]
