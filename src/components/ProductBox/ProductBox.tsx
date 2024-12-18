import { Link } from "react-router";
import { Product } from "../../types/product.type";

interface ProductBoxProps {
  product: Product;
}

export default function ProductBox(props: ProductBoxProps) {
  const { product } = props;
  const attribute = product.attributeList;
  console.log(product)
  return (
    <Link
      to={`/products/${product.id}`}
      className="col-span-2 px-4 py-3 border border-gray-200 rounded-lg flex flex-col h-full"
    >
      <div className="flex-grow">
        <div className="flex justify-center py-3 relative  ">
          <img
            alt={product.name}
            src={product.images[0]}
            className="aspect-square w-5/6 rounded-md bg-white object-scale-down transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200"
          />

          <div className="absolute top-1 right-0.5 bg-orange-400 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
            -{product.discount}%
          </div>

        </div>

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
