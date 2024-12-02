export default function FooterDefault() {
  return (
    <footer className="bg-white pb-4 px-4 mt-6">
      <div className="mx-auto max-w-screen-2xl pt-8 dark:bg-gray-800 border-t border-gray-200">
        <div className="md:flex md:justify-between">
          <div className="flex flex-nowrap justify-between gap-8 sm:gap-6 w-full">
            <div className="w-full sm:w-auto md:w-1/3">
              <h2 className="mb-4 text-base font-semibold text-gray-900 uppercase dark:text-white">
                Tổng đài hỗ trợ
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="tel:1900232460" className="hover:underline">
                    Gọi mua:{" "}
                    <span className="font-bold text-blue-500">
                      1900 232 460
                    </span>{" "}
                    (8:00 - 21:30)
                  </a>
                </li>
                <li className="mb-4">
                  <a href="tel:18001062" className="hover:underline">
                    Khiếu nại:{" "}
                    <span className="font-bold text-blue-500">1800.1062</span>{" "}
                    (8:00 - 21:30)
                  </a>
                </li>
                <li>
                  <a href="tel:1900232464" className="hover:underline">
                    Bảo hành:{" "}
                    <span className="font-bold text-blue-500">
                      1900 232 464
                    </span>{" "}
                    (8:00 - 21:00)
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full sm:w-auto md:w-1/3">
              <h2 className="mb-4 text-base font-semibold text-gray-900 uppercase dark:text-white">
                Về công ty
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a className="hover:underline">Giới thiệu công ty</a>
                </li>
                <li className="mb-4">
                  <a className="hover:underline">Tuyển dụng</a>
                </li>
                <li>
                  <a className="hover:underline">Gửi góp ý, khiếu nại</a>
                </li>
              </ul>
            </div>

            <div className="w-full sm:w-auto md:w-1/3">
              <h2 className="mb-4 text-base font-semibold text-gray-900 uppercase dark:text-white">
                Thông tin khác
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a className="hover:underline">Tích điểm Quà tặng VIP</a>
                </li>
                <li className="mb-4">
                  <a className="hover:underline">Lịch sử mua hàng</a>
                </li>
                <li className="mb-4">
                  <a className="hover:underline">DV vệ sinh máy lạnh</a>
                </li>

                <li>
                  <a className="hover:underline">Chính sách bảo hành</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            © 2024{" "}
            <a href="https://mwg.vn" className="hover:underline">
              MWG™
            </a>
            © 2018. Công ty cổ phần Thế Giới Di Động. GPDKKD: 0303217354 do sở
            KH & ĐT TP.HCM cấp ngày 02/01/2007. GPMXH: 238/GP-BTTTT do Bộ Thông
            Tin và Truyền Thông cấp ngày 04/06/2020. Địa chỉ: 128 Trần Quang
            Khải, P.Tân Định, Q.1, TP.Hồ Chí Minh. Địa chỉ liên hệ và gửi chứng
            từ: Lô T2-1.2, Đường D1, Đ. D1, P.Tân Phú, TP.Thủ Đức, TP.Hồ Chí
            Minh. Điện thoại: 028 38125960. Email: cskh@thegioididong.com. Chịu
            trách nhiệm nội dung: Huỳnh Văn Tốt. Email:
            hotrotmdt@thegioididong.com
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a
              href="https://www.facebook.com/MWG"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              {/* Facebook icon */}
            </a>
            <a
              href="https://www.instagram.com/mwg"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              {/* Instagram icon */}
            </a>
            <a
              href="https://twitter.com/mwg"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              {/* Twitter icon */}
            </a>
            <a
              href="https://www.linkedin.com/company/mwg"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              {/* LinkedIn icon */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
