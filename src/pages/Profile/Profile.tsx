import { FaFileInvoice } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { NavLink, Outlet, useNavigate } from "react-router";
import { path } from "../../constants/path";
import Button from "../../components/Button/Button";
import { useMutation } from "@tanstack/react-query";
import { logoutAccount } from "../../apis/auth.api";
import { useContext } from "react";
import { AppContext } from "../../contexts/app.context";
import { toast } from "react-toastify";
export default function Profile() {
  const navigate = useNavigate();
  const { setIsAuthenticated, setUser } = useContext(AppContext);

  const logoutMutation = useMutation({
    mutationFn: logoutAccount,
    onSuccess: () => {
      setIsAuthenticated(false);
      setUser(null);
      toast.info("Đăng xuất thành công");
      navigate(path.home);
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <div className="flex justify-center">
      <div className="w-3/5">
        <div className="grid grid-cols-12 gap-5 mt-8 mb-7">
          <div className="col-span-4 bg-color-background-100">
            <p className="text-lg mb-4">
              Xin chào, <span className="font-bold text-lg">Anh Hoàng</span>
            </p>
            <NavLink
              to={path.profile}
              end
              className={({ isActive, isPending }) =>
                `flex items-center rounded-md p-4 text-center text-sm text-black transition-all  hover:bg-color-background-200 w-11/12 mt-1 ${
                  isActive ? "bg-color-background-200" : ""
                } ${isPending ? "pending" : ""}`
              }
              type="button"
            >
              <FaFileInvoice className="w-4 h-4" />
              <p className="pl-2">Đơn hàng đã mua</p>
            </NavLink>
            <NavLink
              to={path.information}
              className={({ isActive, isPending }) =>
                `flex items-center rounded-md p-4 text-center text-sm text-black transition-all  hover:bg-color-background-200 w-11/12 mt-1 ${
                  isActive ? "bg-color-background-200" : ""
                } ${isPending ? "pending" : ""}`
              }
              type="button"
            >
              <ImProfile className="w-4 h-4" />
              <p className="pl-2">Thay đổi thông tin</p>
            </NavLink>

            <Button
              className="w-11/12 border-orange-400 border text-orange-400 font-semibold hover:bg-orange-400 text-base hover:text-white py-3 px-4 rounded-lg transition-all duration-300 flex justify-center items-center mt-3"
              type="submit"
              onClick={handleLogout}
              disabled={false}
              isLoading={false}
            >
              Đăng xuất
            </Button>
          </div>
          <div className="col-span-8">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
