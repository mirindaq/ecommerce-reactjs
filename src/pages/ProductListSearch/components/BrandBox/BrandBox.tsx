import { Link } from "react-router";
import { QueryConfig } from "../../ProductListSearch";

interface BrandBoxProps {
  imageUrl: string;
  name: string;
  params: QueryConfig;
}

export default function BrandBox(props: BrandBoxProps) {
  const { imageUrl, name, params } = props;

  // Tạo updatedParams và loại bỏ các giá trị không hợp lệ
  const updatedParams = Object.fromEntries(
    Object.entries({
      ...params,
      brandName: name,
    }).filter(([, value]) => value !== null && value !== undefined && value !== "")
  );

  // Tạo URL query string từ updatedParams
  const queryString = new URLSearchParams(updatedParams).toString();
  const linkTo = `/products?${queryString}`;

  return (
    <Link
      to={linkTo}
      className="py-2 px-3 col-span-1 rounded-lg bg-color-background-100 text-center flex justify-center items-center hover:border-blue-600 hover:border hover:cursor-pointer"
    >
      <img
        src={imageUrl}
        alt={name}
        className="w-auto h-auto object-contain"
      />
    </Link>
  );
}
