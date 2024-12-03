import { useEffect, useState } from "react";
import { Product, ProductSearchParams } from "../../types/product.type";
import { useMutation } from "@tanstack/react-query";
import { useQueries } from "../../utils/useQueries";
import ProductList from "../../components/ProductList/ProductList";
import { searchProducts } from "../../apis/product.api";
import BrandBox from "./components/BrandBox/BrandBox";

export default function ProductListSearch() {
  const [productList, setProductList] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Set to true initially
  const params = useQueries();

  const queryParams: ProductSearchParams = {
    name: params.name || undefined,
    minPrice: params.minPrice ? Number(params.minPrice) : undefined,
    maxPrice: params.maxPrice ? Number(params.maxPrice) : undefined,
    discount: params.discount ? Number(params.discount) : undefined,
    brandName: params.brandName || undefined,
    categoryName: params.categoryName || undefined,
  };

  const searchProduct = useMutation({
    mutationFn: () => searchProducts(queryParams),
    onSuccess: (data) => {
      setIsLoading(false);
      setProductList(data.data.data.products);
    },
    onError: (error) => {
      console.error("Error fetching products:", error);
    },
  });

  useEffect(() => {
    searchProduct.mutate();
  }, []);

  console.log(productList);

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
              <BrandBox />
              <BrandBox />
              <BrandBox />
              <BrandBox />
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
                  <option selected className="hidden">
                    Giá
                  </option>
                  <option value="US">Thấp đến cao</option>
                  <option value="CA">Cao xuống thấp</option>
                </select>
              </div>
            </div>
            <ProductList isLoading={isLoading} productList={productList} />
          </div>
        </div>
      </div>
    </>
  );
}
