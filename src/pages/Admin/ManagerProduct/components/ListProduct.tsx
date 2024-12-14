import { toast } from "react-toastify";
import TableComponent from "../../../../components/TableComponent/TableComponent";
import FormSearchProducts from "./FormSearchProducts";
import { useEffect, useMemo, useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { getAllBrands } from "../../../../apis/brand.api";
import { getAllCategory } from "../../../../apis/category.api";
import { productApi } from "../../../../apis/product.api";
import { Product, ProductSearchParamsAdmin } from "../../../../types/product.type";
import { User } from "../../../../types/user.type";
import { Brand } from "../../../../types/brand.type";
import { Category } from "../../../../types/category.type";
import { useSearchParams } from "react-router";
import userApi from "../../../../apis/user.api";


export type QueryConfig = {
  // eslint-disable-next-line no-unused-vars
  [key in keyof ProductSearchParamsAdmin]: string
}

export default function ListProduct() {
  const hasFetchedData = useRef(false);
  const [productList, setProductList] = useState<Product[]>([])
  const [categoryList, setCategoryList] = useState<Category[]>([])
  const [brandList, setBrandList] = useState<Brand[]>([])
  const [employeeList, setEmployeeList] = useState<User[]>([])
  const [page, setPage] = useState<string>("1");
  const [limit, setLimit] = useState<string>("4");
  const [total, setTotal] = useState<number>(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = useMemo(() => {
    return Object.fromEntries(
      Array.from(searchParams.entries()).map(([key, value]) => [key, value])
    );
  }, [searchParams]);

  queryParams.page = queryParams.page || page;
  queryParams.categoryName = queryParams.categoryName || "";
  queryParams.limit = queryParams.limit || limit;

  const getProducts = useMutation({
    mutationFn: () => productApi.searchProductsAdmin(queryParams as ProductSearchParamsAdmin),
    onSuccess: (data) => {
      setProductList(data.data.data.products);
      setPage(String(data.data.data.page))
      setLimit(String(data.data.data.limit))
      setTotal(data.data.data.total)
    },
    onError: () => {
      toast.error("Lấy dữ liệu thất bại")
    }

  })

  const getCategories = useMutation({
    mutationFn: () => getAllCategory(),
    onSuccess: (data) => {
      setCategoryList(data.data.data.categories);
    },
    onError: () => {
      toast.error("Lấy danh sách loại sản phẩm thất bại")
    }
  })

  const getBrands = useMutation({
    mutationFn: () => getAllBrands(),
    onSuccess: (data) => {
      setBrandList(data.data.data.brands)
    },
    onError: () => {
      toast.error("Lấy danh sách hãng thất bại");
    }
  })

  const getEmployee = useMutation({
    mutationFn: () => userApi.getAllEmployeeByAdmin(),
    onSuccess: (data) => {
      setEmployeeList(data.data.data.users);
    },
    onError: () => {
      toast.error("Lấy danh sách nhan vien thất bại");
    }
  })

  const onNext = () => {
    const currentPage = Number(page);
    const totalPages = Math.ceil(total / Number(limit));

    if (currentPage < totalPages) {
      searchParams.set("page", (currentPage + 1).toString());
      setSearchParams(searchParams);
    }
  };

  const onPrevious = () => {
    const currentPage = Number(page);

    if (currentPage > 1) {
      searchParams.set("page", (currentPage - 1).toString());
      setSearchParams(searchParams);
    }
  };

  useEffect(() => {
    if (!hasFetchedData.current) {
      toast.info("Chạy render lại nè haha");
      getCategories.mutate();
      getBrands.mutate();
      getEmployee.mutate();
      hasFetchedData.current = true;
    }
  }, []);


  useEffect(() => {
    getProducts.mutate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <>
      <FormSearchProducts brandList={brandList} categoryList={categoryList} employeeList={employeeList} setSearchParams={setSearchParams} />
      <TableComponent limit={limit} onNext={onNext} onPrevious={onPrevious} page={page} productList={productList} total={total} />

    </>
  )
}
