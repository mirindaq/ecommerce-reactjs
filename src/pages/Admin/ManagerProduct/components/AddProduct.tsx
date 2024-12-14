import { useEffect, useState } from 'react';
import { Category } from '../../../../types/category.type';
import { Brand } from '../../../../types/brand.type';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import { getAllBrands } from '../../../../apis/brand.api';
import { getAllCategory } from '../../../../apis/category.api';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  price: number;
  stock: number;
  description: string;
  brandName: string;
  categoryName: string;
  attributes: { value: string }[]; // Phần này xử lý các thuộc tính động
};

export default function AddProduct() {
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [brandList, setBrandList] = useState<Brand[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const getCategories = useMutation({
    mutationFn: () => getAllCategory(),
    onSuccess: (data) => {
      setCategoryList(data.data.data.categories);
      setSelectedCategory(data.data.data.categories[0])
    },
    onError: () => {
      toast.error("Lấy danh sách loại sản phẩm thất bại");
    }
  });

  const getBrands = useMutation({
    mutationFn: () => getAllBrands(),
    onSuccess: (data) => {
      setBrandList(data.data.data.brands);
    },
    onError: () => {
      toast.error("Lấy danh sách hãng thất bại");
    }
  });

  useEffect(() => {
    getCategories.mutate();
    getBrands.mutate();
  }, []);

  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();

  const categoryName = watch("categoryName");

  useEffect(() => {
    const selectedCategory = categoryList.find(cat => cat.name === categoryName);
    if (selectedCategory) {
      setSelectedCategory(selectedCategory);
    }
  }, [categoryName, categoryList]);

  const onSubmit = (data: any) => {
    console.log(data);
    // Bạn có thể gọi API để thêm sản phẩm ở đây
  };

  return (
    <div className="mx-auto px-14 py-8 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Thêm Sản Phẩm</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-gray-700">Tên sản phẩm</label>
          <input
            {...register("name", { required: "Tên sản phẩm là bắt buộc" })}
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Nhập tên sản phẩm"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-700">Giá</label>
          <input
            type="number"
            {...register("price", { required: "Giá là bắt buộc" })}
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Nhập giá"
          />
        </div>

        {/* Stock */}
        <div>
          <label className="block text-gray-700">Số lượng</label>
          <input
            type="number"
            {...register("stock", { required: "Số lượng là bắt buộc" })}
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Nhập số lượng"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700">Mô tả</label>
          <textarea
            {...register("description", { required: "Mô tả là bắt buộc" })}
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Nhập mô tả sản phẩm"
            rows={4}
          />
        </div>

        {/* Brand */}
        <div>
          <label className="block text-gray-700">Thương hiệu</label>
          <select
            {...register("brandName", { required: "Thương hiệu là bắt buộc" })}
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
          >
            {brandList && brandList.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-700">Danh mục</label>
          <select
            {...register("categoryName", { required: "Danh mục là bắt buộc" })}
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
          >
            {categoryList && categoryList.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        {/* Attributes */}
        {selectedCategory && selectedCategory.listAttribute.map((attr, index) => (
          <div key={index} className="flex items-center space-x-2 mb-2">
            <span className="w-1/3 text-gray-600">{attr}</span>
            <input
              {...register(`attributes.${index}.value`, {
                required: `${attr} là bắt buộc`,
              })}
              className="w-2/3 p-2 border rounded-md focus:ring focus:ring-blue-300"
              placeholder={`Nhập ${attr.toLowerCase()}`}
            />
            {errors.attributes?.[index]?.value && (
              <p className="text-red-500">{errors.attributes[index].value.message}</p>
            )}
          </div>
        ))}

        {/* Submit */}
        <button
          type="submit"
          className="w-full p-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300"
        >
          Lưu Sản Phẩm
        </button>
      </form>
    </div>
  );
}
