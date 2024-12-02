interface BannerPromotionProp {
  image: string;
  alt: string;
  url: string;
}

export default function BannerPromotion(props: BannerPromotionProp) {
  const { image, alt, url } = props;
  return (
    <>
      <div className="col-span-3  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
        <a href={url}>
          <img src={image} alt={alt} className="rounded-lg m-1" />
        </a>
      </div>
    </>
  );
}
