import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { searchProductsAdmin } from '../../apis/product.api';
import { Product, ProductSearchParamsAdmin } from '../../types/product.type';
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router';
import Pagination from '../Pagination/Pagination';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Category } from '../../types/category.type';
import { getAllCategory } from '../../apis/category.api';
import { getAllBrands } from '../../apis/brand.api';
import { Brand } from '../../types/brand.type';

type FormInput = Omit<ProductSearchParamsAdmin, "sortBy" | "sortOrder" | "limit" | "page" | "discount">

export type QueryConfig = {
  // eslint-disable-next-line no-unused-vars
  [key in keyof ProductSearchParamsAdmin]: string
}

export default function TableComponent() {
  const [productList, setProductList] = useState<Product[]>([])
  const [categoryList, setCategoryList] = useState<Category[]>([])
  const [brandList, setBrandList] = useState<Brand[]>([])
  const [page, setPage] = useState<string>("1");
  const [limit, setLimit] = useState<string>("4");
  const [total, setTotal] = useState<number>(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams: QueryConfig = Object.fromEntries(
    Array.from(searchParams.entries()).map(([key, value]) => [key, value])
  );

  queryParams.page = queryParams.page || page;
  queryParams.categoryName = queryParams.categoryName || "";
  queryParams.limit = queryParams.limit || limit;

  const getProducts = useMutation({
    mutationFn: () => searchProductsAdmin(queryParams as ProductSearchParamsAdmin),
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
      console.log(data)
      setBrandList(data.data.data.brands)
    },
    onError: () => {
      toast.error("Lấy danh sách hãng thất bại");
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
    getCategories.mutate();
    getBrands.mutate()
  }, [])


  useEffect(() => {
    getProducts.mutate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);


  const { register, handleSubmit, reset } = useForm<FormInput>();

  const submitFormSearch: SubmitHandler<FormInput> = (data) => {
    console.log("Form Data:", data);
  };



  return (
    <div className="p-8 relative overflow-x-auto">
      <form onSubmit={handleSubmit(submitFormSearch)} className="space-y-4 p-6 bg-white shadow rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className='col-span-1 md:col-span-2 lg:col-span-3'>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Tên sản phẩm</label>
            <input
              type="text"
              id="name"
              {...register("name")}
              placeholder="Tên sản phẩm"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700">Giá thấp nhất</label>
            <input
              type="number"
              id="minPrice"
              {...register("minPrice")}
              placeholder="Giá thấp nhất"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700">Giá cao nhất</label>
            <input
              type="number"
              id="maxPrice"
              {...register("maxPrice")}
              placeholder="Giá cao nhất"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="brandName" className="block text-sm font-medium text-gray-700">Hãng</label>
            <select
              id="brandName"
              {...register("brandName")}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Lựa chọn</option>
              {brandList.map((item) => (
                <option key={item.id} value={item.name}>{item.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="categoryName" className="block text-sm font-medium text-gray-700">Loại sản phẩm</label>
            <select
              id="categoryName"
              {...register("categoryName")}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Lựa chọn</option>
              {categoryList.map((item) => (
                <option key={item.id} value={item.name}>{item.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="active" className="block text-sm font-medium text-gray-700">Hoạt động</label>
            <select
              id="active"
              {...register("active")}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select</option>
              <option value="true">Còn hoạt động</option>
              <option value="false">Dừng hoạt động</option>
            </select>
          </div>

          <div>
            <label htmlFor="createdDateFrom" className="block text-sm font-medium text-gray-700">Ngày tạo từ</label>
            <input
              type="date"
              id="createdDateFrom"
              {...register("createdDateFrom")}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="createdDateTo" className="block text-sm font-medium text-gray-700">Ngày tạo đến</label>
            <input
              type="date"
              id="createdDateTo"
              {...register("createdDateTo")}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="createdBy" className="block text-sm font-medium text-gray-700">Tạo bởi</label>
            <input
              type="text"
              id="createdBy"
              {...register("createdBy")}
              placeholder="Creator"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="modifiedBy" className="block text-sm font-medium text-gray-700">Chỉnh sửa bởi</label>
            <input
              type="text"
              id="modifiedBy"
              {...register("modifiedBy")}
              placeholder="Modifier"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="flex space-x-4 mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Search
          </button>
          <button
            type="button"
            onClick={() => reset()}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
          >
            Reset
          </button>
        </div>
      </form>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"

                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">Tên sản phẩm</th>
            <th scope="col" className="px-6 py-3">Hãng</th>
            <th scope="col" className="px-6 py-3">Loại sản phẩm</th>
            <th scope="col" className="px-6 py-3">Giá</th>
            <th scope="col" className="px-6 py-3">Giảm giá</th>
            <th scope="col" className="px-6 py-3">Tồn kho</th>
            <th scope="col" className="px-6 py-3">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((item, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-5">
                <div className="flex items-center">
                  <input
                    id={`checkbox-table-search-${index}`}
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"

                  />
                  <label htmlFor={`checkbox-table-search-${index}`} className="sr-only">checkbox</label>
                </div>
              </td>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.name}</th>
              <td className="px-6 py-4">{item.brandName}</td>
              <td className="px-6 py-4">{item.categoryName}</td>
              <td className="px-6 py-4">{new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
              }).format(item.price)}</td>
              <td className="px-6 py-4">{item.discount}%</td>
              <td className="px-6 py-4">{item.stock}</td>
              <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination currentPage={Number(page)} onNext={onNext} onPrev={onPrevious} pageSize={Number(limit)} totalEntries={Number(total)} />
    </div>
  );
};

