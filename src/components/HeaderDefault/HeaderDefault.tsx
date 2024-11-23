import FormSearch from "./FormSearch/FormSearch";
import ButtonHeader from "./ButtonHeader/ButtonHeader";
import { Fragment } from "react/jsx-runtime";
import {
  CiCirclePlus,
  CiLocationOn,
  CiShoppingCart,
  CiUser,
} from "react-icons/ci";
import { Link } from "react-router";
export default function HeaderDefault() {
  return (
    <Fragment>
      <header className="shadow-md py-7 px-4 sm:px-10 bg-yellow-300 font-[sans-serif] min-h-[70px] tracking-wide relative z-50">
        <div className="flex items-center justify-center  ">
          <div className="flex flex-nowrap items-center justify-between gap-5 w-3/4">
            <Link to="/" className="mr-4">
              <img
                src="https://cdn.haitrieu.com/wp-content/uploads/2021/11/Logo-The-Gioi-Di-Dong-MWG-B-H.png"
                alt="logo"
                className="w-full sm:w-64 max-w-xs mx-auto"
              />
            </Link>
            <FormSearch />
            <div className="flex flex-wrap justify-end space-x-3 max-lg:ml-auto max-lg:flex-col max-lg:items-center max-lg:space-y-3">
              <ButtonHeader title="Giỏ hàng" icon={CiShoppingCart} />
              <ButtonHeader title="Địa chỉ" icon={CiLocationOn} />
              <Link to="/login">
                <ButtonHeader title="Đăng nhập" icon={CiUser} />
              </Link>
              <Link to="/register">
                <ButtonHeader title="Đăng ký" icon={CiCirclePlus} />
              </Link>
            </div>

            <div className="flex max-lg:ml-auto space-x-3"></div>
          </div>
        </div>
        {/* <div className="flex items-center justify-center  ">
          <CategoryHeader />
        </div> */}
      </header>
    </Fragment>
  );
}
