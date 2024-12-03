import Banner from "./Banner/Banner";
import BannerPromotion from "./BannerPromotion/BannerPromotion";
import Promotion from "./Promotion/Promotion";
import CategoryBox from "./CategoryBox/CategoryBox";

export default function Home() {

  return (
    <div className="flex justify-center">
      <div className="w-4/6">
        <Banner
          image="https://cdnv2.tgdd.vn/mwg-static/tgdd/Banner/52/7a/527afe8c16b99211418094100829a1ac.jpg"
          alt="Mua 1 tang 1 "
        />
        <div>
          <CategoryBox />
        </div>

        <div>
          <Promotion />
        </div>

        <div className="mt-5">
          <p className="font-bold text-3xl pb-5">Gian hàng ưu đãi</p>
          <div className="grid grid-cols-12 gap-4">
            <BannerPromotion
              alt="km1"
              image="https://cdnv2.tgdd.vn/mwg-static/tgdd/Banner/1a/19/1a19d2ff45add967a11ef24c10b79733.png"
              url=""
            />
            <BannerPromotion
              alt="km2"
              image="https://cdnv2.tgdd.vn/mwg-static/tgdd/Banner/16/5d/165da6eb43e46e3878598d83379e54ba.jpg"
              url=""
            />
            <BannerPromotion
              alt="km3"
              image="https://cdnv2.tgdd.vn/mwg-static/tgdd/Banner/33/39/3339c45319ec2f671ec330ffbc6aeda9.png"
              url=""
            />
            <BannerPromotion
              alt="km4"
              image="https://cdnv2.tgdd.vn/mwg-static/tgdd/Banner/bd/a0/bda070bb609b5e6444b68d9612a3bc13.png"
              url=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
