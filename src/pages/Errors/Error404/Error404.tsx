import { Link } from "react-router";
import { path } from "../../../constants/path";

export default function Error404() {
  return (
    <>
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-3/6 grid grid-cols-12">


          <img src="https://www.thegioididong.com/html/TGDD/destop/images/404.png" alt="404"
            className="col-span-7 w-full h-full" />
          <div className="col-span-5 flex flex-col items-center justify-center">
            <p className="font-thin text-blue-900 text-4xl text-center tracking-wide">Xin lỗi, chúng tôi không tìm thấy trang mà bạn cần!</p>
            <Link to={path.home}>
              <button type="button" className="text-white text-base bg-yellow-400 rounded-full px-5 py-2.5 text-center me-2 mb-2 mt-7">Trở về trang chủ</button>
            </Link>
          </div>
        </div>

      </div>
    </>
  )
}
