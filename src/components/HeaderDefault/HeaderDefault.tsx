import FormSearch from "./FormSearch/FormSearch";
import { Fragment } from "react/jsx-runtime";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import { Link } from "react-router";
import { useContext } from "react";
import { AppContext } from "../../contexts/app.context";
import { path } from "../../constants/path";
export default function HeaderDefault() {
  const { isAuthenticated, user } = useContext(AppContext);

  return (
    <Fragment>
      <header>
        <nav className="bg-yellow-300 border-gray-200 px-4 lg:px-6 py-5 dark:bg-gray-800">
          <div className="grid grid-cols-12">
            <div className="col-start-2 col-span-3 mr-4">
              <Link to="/">
                <img
                  src="https://cdn.haitrieu.com/wp-content/uploads/2021/11/Logo-The-Gioi-Di-Dong-MWG-B-H.png"
                  alt="logo"
                  className="w-full sm:w-64 mx-auto"
                />
              </Link>
            </div>
            <div className="col-span-4">
              <FormSearch />
            </div>
            <div className="col-span-4 flex">
              {(!isAuthenticated && (
                <Link to={path.login} className="flex items-center">
                  <div className="flex items-center bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-base sm:text-sm lg:text-base px-4 py-2.5 sm:px-3 sm:py-2 text-center mb-1 transition-all duration-300 ease-in-out dark:focus:ring-yellow-500 hover:cursor-pointer ml-3">
                    <div className="flex items-center">
                      <CiUser className="mr-2 text-gray-500" />
                      <span>Đăng nhập</span>
                    </div>
                  </div>
                </Link>
              )) || (
                <Link
                  to={path.profile}
                  className="flex items-center bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-base sm:text-sm lg:text-base px-4 py-2.5 sm:px-3 sm:py-2 text-center mb-1 transition-all duration-300 ease-in-out dark:focus:ring-yellow-500 hover:cursor-pointer ml-3"
                >
                  <div className="flex items-center">
                    <CiUser className="mr-2 text-gray-500" />
                    <span>{user?.email}</span>
                  </div>
                </Link>
              )}

              <Link to="/cart" className="flex items-center">
                <div className="flex items-center bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-base sm:text-sm lg:text-base px-4 py-2.5 sm:px-3 sm:py-2 text-center mb-1 transition-all duration-300 ease-in-out dark:focus:ring-yellow-500 hover:cursor-pointer ml-3">
                  <div className="flex items-center">
                    <CiShoppingCart className="mr-2 text-gray-500" />
                    <span>Giỏ hàng</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </Fragment>
  );
}
