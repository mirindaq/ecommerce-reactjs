import { Link } from "react-router";
import { Product } from "../../../../../types/product.type";

interface ProductBoxProps {
  product: Product;
}

export default function ProductBox(props: ProductBoxProps) {
  const { product } = props;
  const attribute = product.attributeList;
  return (
    <Link
      to="/"
      className="col-span-2 p-4 border border-gray-200 rounded-md flex flex-col h-full"
    >
      <div className="flex-grow">
        <img
          alt={product.name}
          src={product.image}
          className="aspect-square w-full rounded-md bg-gray-200 object-cover lg:aspect-auto lg:h-60"
        />
        <div className="mt-4">
          <h3 className="text-sm text-gray-700">
            <span className="text-black hover:text-blue-500 text-lg">
              {product.name}
            </span>
          </h3>
          <div className="flex items-center space-x-2 mt-1 mb-1">
            {attribute.slice(0, 2).map((item, index) => (
              <span
                key={index}
                className="text-xs text-gray-500 bg-gray-100 px-1 py-1 rounded"
              >
                {item.value}
              </span>
            ))}
          </div>

          <div className="text-xl font-semibold text-red-600 mt-1">
            {product.discount ? (
              <>
                <p className="text-red-600 mt-1 mb-1">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(product.price * (1 - product.discount / 100))}
                </p>
                <p className="text-gray-500 line-through font-medium text-base">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(product.price)}
                </p>
              </>
            ) : (
              <p className="mt-1">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(product.price)}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 mt-3">
        <button
          type="button"
          className="col-span-12 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-600 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-700 dark:text-gray-400 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
        >
          <span className="font-semibold text-xs text-blue-500">Mua ngay</span>
        </button>
      </div>
    </Link>
  );
}
