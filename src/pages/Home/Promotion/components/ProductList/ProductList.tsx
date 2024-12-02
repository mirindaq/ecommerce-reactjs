import { useEffect, useState } from "react";
import Skeleton from "../Skeleton/Skeleton";
import ProductBox from "../ProductBox/ProductBox";
import { Product } from "../../../../../types/product.type";
import { getAllProducts } from "../../../../../apis/product.api";
import { useMutation } from "@tanstack/react-query";

export default function ProductList() {
  const [productList, setProductList] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Set to true initially

  const getAllProduct = useMutation({
    mutationFn: () => getAllProducts(),
    onSuccess: (data) => {
      setIsLoading(false);
      setProductList(data.data.data.products);
    },
    onError: (error) => {
      console.error("Error fetching products:", error);
    },
  });

  useEffect(() => {
    getAllProduct.mutate();
  }, []);

  return (
    <>
      <div className="bg-white rounded-lg">
        <div className="mx-auto lg:max-w-10xl border-b ">
          <div className="grid grid-cols-7 gap-1 ">
            <div className="col-span-1 text-center py-5 bg-orange-100 text-orange-600 border-b-2 border-transparent cursor-pointer transition duration-200 rounded-tl-lg border-orange-500">
              FlashSale
            </div>
            <div className="col-span-1 text-center py-5 hover:bg-orange-100 hover:text-orange-500 active:bg-orange-100 active:text-orange-600 border-b-2 border-transparent hover:border-orange-500 cursor-pointer transition duration-200">
              Độc quyền
            </div>
            <div className="col-span-1 text-center py-5 hover:bg-orange-100 hover:text-orange-500 active:bg-orange-100 active:text-orange-600 border-b-2 border-transparent hover:border-orange-500 cursor-pointer transition duration-200">
              Điện thoại
            </div>
            <div className="col-span-1 text-center py-5 hover:bg-orange-100 hover:text-orange-500 active:bg-orange-100 active:text-orange-600 border-b-2 border-transparent hover:border-orange-500 cursor-pointer transition duration-200">
              Apple
            </div>
            <div className="col-span-1 text-center py-5 hover:bg-orange-100 hover:text-orange-500 active:bg-orange-100 active:text-orange-600 border-b-2 border-transparent hover:border-orange-500 cursor-pointer transition duration-200">
              Laptop
            </div>
            <div className="col-span-1 text-center py-5 hover:bg-orange-100 hover:text-orange-500 active:bg-orange-100 active:text-orange-600 border-b-2 border-transparent hover:border-orange-500 cursor-pointer transition duration-200">
              Phụ kiện
            </div>
            <div className="col-span-1 text-center py-5 hover:bg-orange-100 hover:text-orange-500 active:bg-orange-100 active:text-orange-600 border-b-2 border-transparent hover:border-orange-500 cursor-pointer transition duration-200 rounded-tr-lg">
              Đồng hồ
            </div>
          </div>
        </div>

        <div className=" flex justify-center px-4 py-3">
          <img
            src="https://cdnv2.tgdd.vn/mwg-static/common/Campaign/66/fc/66fc2120119d52a4b8b011015e574d67.png"
            alt="thumbnail"
            className="w-full"
          />
        </div>

        <div className="mx-auto pt-1 pb-10 rounded-lg px-4 lg:max-w-10xl">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-12 gap-4 ">
            {isLoading ? (
              <>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </>
            ) : (
              productList.map((item) => (
                <ProductBox key={item.id} product={item} />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
