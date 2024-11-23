import { Link } from "react-router";

export default function Login() {
  return (
    <>
      <div className="bg-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-6 lg:py-28 lg:pr-10">
            <div className="hidden lg:col-span-3  lg:flex lg:justify-center mr-3 ">
              <img
                src="https://cdn.tgdd.vn/2022/10/banner/TGDD-540x270.png"
                className="object-contain max-w-full h-auto"
                alt="Banner"
              />
            </div>

            <div className="my-12 mx-20 lg:col-span-3 lg:col-start-4 lg:my-0 lg:mx-0 ">
              <form className="bg-white shadow-lg rounded-3xl px-8 py-8 sm:px-16 sm:py-12 mb-4 w-full mx-auto">
                {/* Username input */}
                <div className="mb-6">
                  <label
                    htmlFor="username"
                    className="block text-sm  font-semibold text-gray-800 mb-3"
                  >
                    Email
                  </label>
                  <input
                    className="shadow-md appearance-none border border-gray-300 rounded-full w-full py-3.5 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    id="username"
                    type="text"
                    placeholder="Email"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block text-sm  font-semibold text-gray-800 mb-3"
                  >
                    Mật khẩu
                  </label>
                  <input
                    className="shadow-md appearance-none border border-gray-300 rounded-full w-full py-3.5 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    id="password"
                    type="password"
                    placeholder="Mật khẩu"
                  />
                </div>
                <div>
                  <button
                    className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-4 px-6 rounded-full transition-all duration-300"
                    type="button"
                  >
                    Đăng nhập
                  </button>
                </div>
                <div className="mt-4 text-center">
                  <a
                    className="text-sm text-black hover:text-yellow-600"
                    href="#"
                  >
                    Quên mật khẩu
                  </a>
                </div>

                <div className="flex items-center justify-center mt-8">
                  <div className="text-gray-500 mr-2">
                    Bạn chưa có tài khoản
                  </div>
                  <Link to="/register" className="text-orange-500">
                    Đăng ký
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
