import { useEffect, useState } from "react";
import { getProductById } from "../../apis/product.api";
import { useMutation } from "@tanstack/react-query";
import { Product } from "../../types/product.type";
import { useParams } from "react-router";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const [mainImage, setMainImage] = useState(product?.images[0]);

  const getProduct = useMutation({
    mutationFn: () => getProductById(Number(id)),
    onSuccess: (data) => {
      setIsLoading(false);
      setProduct(data.data.data.product);
      setMainImage(data.data.data.product.images[0]);
    },
    onError: (error) => {
      console.error("Error fetching products:", error);
    },
  });

  const changeImage = (src: string) => {
    setMainImage(src);
  };

  useEffect(() => {
    getProduct.mutate();
  }, []);

  return (
    <div className="bg-gray-100 justify-center flex mt-4">
      <div className="mx-auto px-4 py-8 w-4/5 ">
        <div className="grid grid-cols-12 gap-12">
          {/* Product Images */}
          <div className="col-span-7 h-2/5">
            <img
              src={mainImage}
              alt="Product"
              className="w-full h-full object-cover rounded-lg mb-4"
              id="mainImage"
            />
            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
              {isLoading && (
                <>Dang load</>
              )}
              {product?.images &&
                product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={product?.name}
                    className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                    onClick={() => changeImage(image)}
                  />
                ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="col-span-5">
            <h2 className="text-3xl font-bold mb-2">{product?.name}</h2>
            <p className="text-gray-600 mb-4"> {product?.brandName}</p>
            <div className="mb-4">
              {product?.discount ? (
                <>
                  <p className="text-2xl font-bold mr-2">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(product.price * (1 - product.discount / 100))}
                  </p>
                  <p className="text-gray-500 line-through">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(product.price)}
                  </p>
                </>
              ) : (
                <p className="text-2xl font-bold mr-2">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(product?.price || 0)}
                </p>
              )}
            </div>
            <div className="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
              {/* Repeat for more stars */}
              <span className="ml-2 text-gray-600">4.5 (120 reviews)</span>
            </div>
            <p className="text-gray-700 mb-6">{product?.description}</p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Color:</h3>
              <div className="flex space-x-2">
                <button className="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"></button>
                <button className="w-8 h-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"></button>
                <button className="w-8 h-8 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-700"
              >
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                className="mt-1 block w-20 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                defaultValue="1"
              />
            </div>

            <button className="w-full py-3 bg-indigo-600 text-white rounded-md text-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
