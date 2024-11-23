import { useRoutes } from "react-router";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import LayoutDefault from "./layouts/LayoutDefault/LayoutDefault";

export default function useRouteElement() {
  const element = useRoutes([
    {
      path: "/",
      element: (
        <LayoutDefault>
          <Home />
        </LayoutDefault>
      ),
    },
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
  ]);

  return element;
}
