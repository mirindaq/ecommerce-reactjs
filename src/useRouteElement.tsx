import { Navigate, Outlet, useRoutes } from "react-router";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import LayoutDefault from "./layouts/LayoutDefault/LayoutDefault";
import Profile from "./pages/Profile/Profile";

const isAuthenticated = false;

function ProtectedRoute() {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

function RejectedRoute() {
  return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

export default function useRouteElement() {
  const element = useRoutes([
    {
      path: "/",
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
          path: "/profile",
          element: (
            <LayoutDefault>
              <Profile />
            </LayoutDefault>
          ),
        },
      ],
    },

    {
      path: "",
      element: <RejectedRoute />,
      children: [
        {
          path: "/login",
          element: (
            <LayoutDefault>
              <Login />
            </LayoutDefault>
          ),
        },
        {
          path: "/register",
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
