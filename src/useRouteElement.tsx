import { Navigate, Outlet, useRoutes } from "react-router";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import LayoutDefault from "./layouts/LayoutDefault/LayoutDefault";
import Profile from "./pages/User/Profile/Profile";
import { useContext } from "react";
import { AppContext } from "./contexts/app.context";
import { path } from "./constants/path";
import Information from "./pages/User/Profile/Information/Information";
import OrderUser from "./pages/User/Profile/OrderUser/OrderUser";
import ProductDetail from "./pages/User/ProductDetail/ProductDetail";
import ProductListSearch from "./pages/User/ProductListSearch/ProductListSearch";
import Error404 from "./pages/Errors/Error404/Error404";

import Error401 from "./pages/Errors/Error401/Error401";
import Home from "./pages/User/Home/Home";
import AdminDashboard from "./pages/Admin/AdminDashboard/AdminDashboard";
import LayoutDefaultAdmin from "./layouts/LayoutDefaultAdmin/LayoutDefaultAdmin";
import ManagerProduct from "./pages/Admin/ManagerProduct/ManagerProduct";

export default function useRouteElement() {
  function ProtectedRoute() {
    const { isAuthenticated } = useContext(AppContext);
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  }

  function RejectedRoute() {
    const { isAuthenticated, user } = useContext(AppContext);

    if (isAuthenticated) {
      console.log(user)
      console.log(user?.role)
      if (user?.role?.includes("ROLE_ADMIN")) {
        return <Navigate to="/admin/dashboard" />;
      }
      return <Navigate to="/" />;
    }

    return <Outlet />;
  }

  function AdminRoute() {
    const { user } = useContext(AppContext);
    if (!user?.role?.includes("ROLE_ADMIN")) {
      return <Navigate to={path.error401} />;
    }
    return <Outlet />;
  }

  const element = useRoutes([
    //Các route public
    {
      path: path.home,
      index: true,
      element: (
        <LayoutDefault>
          <Home />
        </LayoutDefault>
      ),
    },
    {
      path: path.productDetail,
      index: true,
      element: (
        <LayoutDefault>
          <ProductDetail />
        </LayoutDefault>
      ),
    },
    {
      path: path.productClient,
      index: true,
      element: (
        <LayoutDefault>
          <ProductListSearch />
        </LayoutDefault>
      ),
    },
    // Route phải đăng nhập thì mới vào được
    {
      path: "",
      element: <ProtectedRoute />,
      children: [
        {
          path: path.profile,
          element: (
            <LayoutDefault>
              <Profile />
            </LayoutDefault>
          ),
          children: [
            {
              path: path.information,
              element: <Information />,
            },
            {
              path: "",
              element: <OrderUser />,
            },
          ],
        },
      ],
    },

    //Route khi đã đăng nhập thì không được vào
    {
      path: "",
      element: <RejectedRoute />,
      children: [
        {
          path: path.login,
          element: (
            <LayoutDefault>
              <Login />
            </LayoutDefault>
          ),
        },
        {
          path: path.register,
          element: (
            <LayoutDefault>
              <Register />
            </LayoutDefault>
          ),
        },
      ],
    },

    //Admin route
    {
      path: "",
      element: <AdminRoute />,
      children: [
        {
          path: path.adminDashboard,
          element: (
            <LayoutDefaultAdmin >
              <AdminDashboard />
            </LayoutDefaultAdmin>
          ),
        },
        {
          path: path.adminProduct,
          element: (
            <LayoutDefaultAdmin >
              <ManagerProduct />
            </LayoutDefaultAdmin>
          ),
        },

      ],
    },

    {
      path: path.error401,
      element: (
        <LayoutDefault>
          <Error401 />
        </LayoutDefault>
      ),
    },
    {
      path: "*",
      element: (
        <Error404 />
      ),
    },
  ]);

  return element;
}
