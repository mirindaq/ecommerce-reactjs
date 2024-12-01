import { Navigate, Outlet, useRoutes } from "react-router";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import LayoutDefault from "./layouts/LayoutDefault/LayoutDefault";
import Profile from "./pages/Profile/Profile";
import { useContext } from "react";
import { AppContext } from "./contexts/app.context";
import { path } from "./constants/path";
import Information from "./pages/Profile/Information/Information";
import OrderUser from "./pages/Profile/OrderUser/OrderUser";

export default function useRouteElement() {
  function ProtectedRoute() {
    const { isAuthenticated } = useContext(AppContext);
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  }

  function RejectedRoute() {
    const { isAuthenticated } = useContext(AppContext);
    return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
  }

  const element = useRoutes([
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
  ]);

  return element;
}
