import FooterDefault from "../../components/FooterDefault/FooterDefault";
import HeaderDefault from "../../components/HeaderDefault/HeaderDefault";

interface Props {
  children?: React.ReactNode;
}

export default function LayoutDefault({ children }: Props) {
  return (
    <>
      <HeaderDefault />
      {children}

      <FooterDefault />
    </>
  );
}
