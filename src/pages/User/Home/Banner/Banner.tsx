interface BannerProps {
  image: string;
  alt: string;
}

export default function Banner(props: BannerProps) {
  const { image, alt } = props;
  return (
    <div className=" w-full py-2" data-carousel="slide">
      <div className="relative h-36 w-full overflow-hidden md:h-72">
        <img
          src={image}
          className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  rounded-lg "
          alt={alt}
        />
      </div>
    </div>
  );
}
