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
      <div className="bg-white">
        <div className="mx-auto py-16 sm:py-24 lg:max-w-10xl">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-12 gap-4">
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
