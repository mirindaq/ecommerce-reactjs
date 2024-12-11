import HeaderAdmin from "../../components/HeaderAdmin/HeaderAdmin";
import { Sidebar } from "../../components/Sidebar/Sidebar";

interface Props {
  children?: React.ReactNode;
}

export default function LayoutDefaultAdmin({ children }: Props) {
  return (
    <>

      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-10">
          <HeaderAdmin />
          {children}
        </div>

      </div>

    </>
  );
}
