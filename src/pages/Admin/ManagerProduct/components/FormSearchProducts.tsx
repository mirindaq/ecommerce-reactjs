import { SubmitHandler, useForm } from "react-hook-form";
import { ProductSearchParamsAdmin } from "../../../../types/product.type";
import { Link, SetURLSearchParams } from "react-router";
import { Brand } from "../../../../types/brand.type";
import { User } from "../../../../types/user.type";
import { Category } from "../../../../types/category.type";
import { path } from "../../../../constants/path";

type FormInput = Omit<ProductSearchParamsAdmin, "sortBy" | "sortOrder" | "limit" | "discount">

interface FormSearchProductsProps {
  setSearchParams: SetURLSearchParams
  brandList: Brand[],
  employeeList: User[],
  categoryList: Category[]

}


export default function FormSearchProducts(props: FormSearchProductsProps) {
  const { setSearchParams, brandList, categoryList, employeeList } = props
  const { register, handleSubmit, reset } = useForm<FormInput>();

  const submitFormSearch: SubmitHandler<FormInput> = (data) => {
    const updatedQuerySearch: FormInput = {};
    if (data.name) updatedQuerySearch.name = data.name;
    if (data.minPrice) updatedQuerySearch.minPrice = data.minPrice;
    if (data.maxPrice) updatedQuerySearch.maxPrice = data.maxPrice;
    if (data.brandName) updatedQuerySearch.brandName = data.brandName;
    if (data.categoryName) updatedQuerySearch.categoryName = data.categoryName;
    if (data.active) updatedQuerySearch.active = data.active;
    if (data.createdDateFrom) updatedQuerySearch.createdDateFrom = data.createdDateFrom;
    if (data.createdDateTo) updatedQuerySearch.createdDateTo = data.createdDateTo;
    if (data.modifiedDateFrom) updatedQuerySearch.modifiedDateFrom = data.modifiedDateFrom;
    if (data.modifiedDateTo) updatedQuerySearch.modifiedDateTo = data.modifiedDateTo;
    if (data.createdBy) updatedQuerySearch.createdBy = data.createdBy;
    if (data.modifiedBy) updatedQuerySearch.modifiedBy = data.modifiedBy;
    updatedQuerySearch.page = "1"

    setSearchParams(updatedQuerySearch as URLSearchParams)

  };

  return (
    <>
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
              <option value="">Lựa chọn</option>
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
            <select
              id="createdBy"
              {...register("createdBy")}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Lựa chọn</option>
              {employeeList.map((item) => (
                <option key={item.id} value={item.fullName}>{item.fullName}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="modifiedBy" className="block text-sm font-medium text-gray-700">Chỉnh sửa bởi</label>
            <select
              id="modifiedBy"
              {...register("modifiedBy")}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Lựa chọn</option>
              {employeeList.map((item) => (
                <option key={item.id} value={item.fullName}>{item.fullName}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex space-x-4 mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Tìm kiếm
          </button>
          <button
            type="button"
            onClick={() => reset()}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
          >
            Đặt lại
          </button>
          <Link to={path.adminProductAdd}
            className="px-4 py-2  bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Thêm sản phẩm
          </Link>
        </div>
      </form>

    </>
  )
}
