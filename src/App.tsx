import useRouteElement from "./useRouteElement";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const element = useRouteElement();
  return (
    <>
      <div>{element}</div>
      <ToastContainer />
    </>
  );
}
