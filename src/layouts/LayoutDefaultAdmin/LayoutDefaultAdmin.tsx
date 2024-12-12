import HeaderAdmin from "../../components/HeaderAdmin/HeaderAdmin";
import { Sidebar } from "../../components/Sidebar/Sidebar";

interface Props {
  children?: React.ReactNode;
}

export default function LayoutDefaultAdmin({ children }: Props) {
  return (
    <>

      <div className="grid grid-cols-8">
        <div className="col-span-12 sm:col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-12 sm:col-span-7">
          <HeaderAdmin />
          {children}
        </div>
      </div>

    </>
  );
}
