import { useEffect, useState } from "react";
import { Product, ProductSearchParams } from "../../types/product.type";
import { useMutation } from "@tanstack/react-query";
import ProductList from "../../components/ProductList/ProductList";
import { searchProducts } from "../../apis/product.api";
import BrandBox from "./components/BrandBox/BrandBox";
import { Brand } from "../../types/brand.type";
import { getBrandByCategory } from "../../apis/brand.api";
import { useSearchParams } from "react-router";
import SortBox from "./components/SortBox/SortBox";
import { FaArrowDown } from "react-icons/fa";

export type QueryConfig = {
  // eslint-disable-next-line no-unused-vars
  [key in keyof ProductSearchParams]: string
}

export default function ProductListSearch() {
  const initialLimit = "6"

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
  queryParams.limit = queryParams.limit || initialLimit;

  const [page, setPage] = useState(Number(queryParams.page) || 1);
  const [totalPage, setTotalPage] = useState<number>(0)


  const searchBrand = useMutation({
    mutationFn: () => getBrandByCategory(queryParams.categoryName || ""),
    onSuccess: (response) => {
      setBrandList(response.data.data.brands);
    },
    onError: (error) => {
      console.error("Error fetching data:", error);
    }
  });

  const searchProduct = useMutation({
    mutationFn: () => searchProducts(queryParams as ProductSearchParams),
    onSuccess: (productResponse) => {
      setProductList(productResponse.data.data.products);
      setCount(
        Math.max(
          productResponse.data.data.total -
          productResponse.data.data.limit * productResponse.data.data.page,
          0
        )
      );
      setPage(productResponse.data.data.page)
      setTotalPage(productResponse.data.data.total / Number(initialLimit));
      setIsLoading(false);
    },
    onError: (error) => {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  });

  const searchProductMore = useMutation({
    mutationFn: (query: ProductSearchParams) => searchProducts(query),
    onSuccess: (productResponse) => {
      setProductList([...productList, ...productResponse.data.data.products]);
      setCount(
        Math.max(
          productResponse.data.data.total -
          productResponse.data.data.limit * productResponse.data.data.page,
          0
        )
      );
      setIsLoading(false);
    },
    onError: (error) => {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  });

  useEffect(() => {
    setIsLoading(true);
    searchBrand.mutate();
    searchProduct.mutate();
  }, [searchParams]);

  const handleLoadMore = () => {
    const newPage = page + 1;
    setPage(newPage);
    setIsLoading(true);
    const newQueryParams = { ...queryParams, page: String(newPage) };
    searchProductMore.mutate(newQueryParams as ProductSearchParams);
  };
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
              <BrandBox isBrand={false} params={queryParams} name="Tất cả" />
              {brandList && (
                brandList.map(item => (
                  <BrandBox isBrand={true} params={queryParams} imageUrl={item.imageUrl} name={item.name} key={item.name} />
                ))
              )}

            </div>
            <div className="mx-4 pt-2 pb-2 mb-4 border-b gap-5 flex items-center">
              <p className="text-sm">Sắp xếp theo: </p>
              <SortBox title="Giảm giá" params={queryParams} sortBy="discount" />
              <SortBox title="Mới nhất" params={queryParams} sortBy="createdDate" />
              <SortBox title="Giá Cao - Thấp" params={queryParams} sortBy="price" sortOrder="desc" />
              <SortBox title="Giá Thấp - Cao" params={queryParams} sortBy="price" sortOrder="asc" />

            </div>
            <ProductList isLoading={isLoading} productList={productList} />
            <div className="flex align-items-center justify-center">
              {page < totalPage && (<button onClick={handleLoadMore} className="px-24 py-3 rounded-lg text-blue-500 
              font-bold text-sm bg-white border border-blue-400 flex items-center hover:cursor-pointer">
                <span className="pr-1">Xem thêm {count} </span>
                <FaArrowDown /></button>)}

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
