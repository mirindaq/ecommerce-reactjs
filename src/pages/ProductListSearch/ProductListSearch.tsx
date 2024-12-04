import { useEffect, useState } from "react";
import { Product, ProductSearchParams } from "../../types/product.type";
import { useMutation } from "@tanstack/react-query";
import ProductList from "../../components/ProductList/ProductList";
import { searchProducts } from "../../apis/product.api";
import BrandBox from "./components/BrandBox/BrandBox";
import { Brand } from "../../types/brand.type";
import { getBrandByCategory } from "../../apis/brand.api";
import { useSearchParams } from "react-router";

export type QueryConfig = {
  [key in keyof ProductSearchParams]: string
}

export default function ProductListSearch() {
  const [productList, setProductList] = useState<Product[]>([]);
  const [brandList, setBrandList] = useState<Brand[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [count, setCount] = useState<number>(0);
  const [searchParams] = useSearchParams();

  const queryParams: QueryConfig = Object.fromEntries(
    Array.from(searchParams.entries()).map(([key, value]) => [key, value])
  );

  queryParams.page = queryParams.page || "1";
  queryParams.categoryName = queryParams.categoryName || "default-category";

  const searchProduct = useMutation({
    mutationFn: async () => {
      const [productResponse, brandResponse] = await Promise.all([
        searchProducts(queryParams as ProductSearchParams),
        getBrandByCategory(queryParams.categoryName || "default-category")
      ]);
      return { productResponse, brandResponse };
    },
    onSuccess: ({ productResponse, brandResponse }) => {
      setProductList(productResponse.data.data.products);
      setCount(
        productResponse.data.data.total -
        productResponse.data.data.limit * productResponse.data.data.page
      );
      setBrandList(brandResponse.data.data.brands);
      setIsLoading(false);
    },
    onError: (error) => {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  });

  useEffect(() => {
    setIsLoading(true);
    searchProduct.mutate();
  }, [searchParams]);


  return (
    <>
      <div className="flex justify-center mt-5">
        <div className="w-4/6">
          <div className="bg-white">
            <div className=" grid grid-cols-12 gap-4 mb-3">
              <div className="col-span-6">
                <img
                  className="rounded-lg"
                  src="https://cdnv2.tgdd.vn/mwg-static/tgdd/Banner/26/a8/26a8ae4508c2fe60b8d825f5d543616e.png"
                  alt="km1"
                />
              </div>
              <div className="col-span-6">
                <img
                  className="rounded-lg"
                  src="https://cdnv2.tgdd.vn/mwg-static/tgdd/Banner/26/a8/26a8ae4508c2fe60b8d825f5d543616e.png"
                  alt="km1"
                />
              </div>
            </div>
          </div>
          <div className="mt-5 py-4 bg-white">
            <div className="grid grid-cols-10 px-4 pb-2 gap-3">
              <div className="py-2 px-3 col-span-1 rounded-lg bg-color-background-200 text-center border border-transparent hover:border-blue-600 hover:cursor-pointer">
                Lọc
              </div>
              {brandList && (
                brandList.map(item => (
                  <BrandBox params={queryParams} imageUrl={item.imageUrl} name={item.name} key={item.name} />
                ))
              )}

            </div>
            <div className="mx-4 pt-2 pb-2 mb-4 border-b gap-5 flex items-center">
              <p className="text-sm">Sắp xếp theo: </p>
              <p className="text-sm hover:text-blue-500 cursor-pointer">
                Mới nhất
              </p>
              <p className="text-sm hover:text-blue-500 cursor-pointer">
                Đánh giá
              </p>
              <div>
                <select
                  id="countries"
                  className="border-0 text-gray-900 text-sm rounded-lg cursor-pointer"
                >
                  <option defaultChecked className="hidden">
                    Giá
                  </option>
                  <option value="US">Thấp đến cao</option>
                  <option value="CA">Cao xuống thấp</option>
                </select>
              </div>
            </div>
            <ProductList isLoading={isLoading} productList={productList} />
            <div className="w-3/5">
              Xem thêm {count}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
