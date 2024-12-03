import { useEffect, useState } from "react";
import ProductList from "../../../components/ProductList/ProductList";
import NavigationBox from "./components/NavigationBox/NavigationBox";
import { useMutation } from "@tanstack/react-query";
import { getAllProducts } from "../../../apis/product.api";
import { Product } from "../../../types/product.type";

export default function Promotion() {
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
      <p className="font-bold text-3xl pb-5">Khuyến mãi Online</p>
      <div className="bg-white rounded-lg">
        <div className="mx-auto lg:max-w-10xl border-b ">
          <NavigationBox />
        </div>

        <div className=" flex justify-center px-4 py-3">
          <img
            src="https://cdnv2.tgdd.vn/mwg-static/common/Campaign/66/fc/66fc2120119d52a4b8b011015e574d67.png"
            alt="thumbnail"
            className="w-full"
          />
        </div>

        <ProductList productList={productList} isLoading={isLoading} />
      </div>
    </>
  );
}
