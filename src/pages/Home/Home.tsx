import Banner from "./Banner/Banner";
import Promotion from "./Promotion/Promotion";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="w-3/4">
        <Banner
          image="https://cdnv2.tgdd.vn/mwg-static/tgdd/Banner/52/7a/527afe8c16b99211418094100829a1ac.jpg"
          alt="Mua 1 tang 1 "
        />
        <Promotion />
      </div>
    </div>
  );
}
