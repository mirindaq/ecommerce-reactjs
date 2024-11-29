interface BannerProps {
  image: string;
  alt: string;
}

export default function Banner(props: BannerProps) {
  const { image, alt } = props;
  return (
    <div className="flex justify-center">
      <div
        id="default-carousel"
        className=" w-full"
        data-carousel="slide"
      >
        <div className="relative h-36 w-full overflow-hidden rounded-lg md:h-96">
          <img
            src={image}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt={alt}
          />
        </div>
      </div>
    </div>
  );
}
