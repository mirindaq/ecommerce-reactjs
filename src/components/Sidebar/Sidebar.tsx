import { useContext } from "react";
import { AppContext } from "../../contexts/app.context";
import { useMutation } from "@tanstack/react-query";
import { logoutAccount } from "../../apis/auth.api";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router";
import { path } from "../../constants/path";

export function Sidebar() {

  const { user, setIsAuthenticated, setUser } = useContext(AppContext)
  const navigate = useNavigate();

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
    <div className="w-full">
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-4 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-green-600 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li className="my-4">
              <span className="ms-2 text-xl font-semibold text-white">Xin chào, {user?.fullName}</span>
            </li>
            <NavLink to={path.adminDashboard}>
              <div

                className="flex items-center px-3 py-4 text-white rounded-lg bg-green-600 hover:bg-green-700"
              >
                <svg
                  className="w-5 h-5 text-white transition duration-75"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3 text-white text-xl">Tổng quan</span>
              </div>
            </NavLink>
            <NavLink to={path.adminProduct}>
              <div
                className="flex items-center px-3 py-4 text-white rounded-lg bg-green-600 hover:bg-green-700"
              >
                <svg
                  className="w-5 h-5 text-white transition duration-75"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3 text-white text-xl">Quản lý sản phẩm</span>
              </div>
            </NavLink>
            <li>
              <div
                className="flex items-center px-3 py-4 text-white rounded-lg bg-green-600 hover:bg-green-700"
              >
                <svg
                  className="w-5 h-5 text-white transition duration-75"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <button onClick={handleLogout} className="ms-3 text-white text-xl">Đăng xuất</button>
              </div>
            </li>



          </ul>
        </div>
      </aside>
    </div>
  );
}