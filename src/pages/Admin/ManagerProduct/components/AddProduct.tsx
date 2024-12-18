import { useEffect, useState } from 'react';
import { Category } from '../../../../types/category.type';
import { Brand } from '../../../../types/brand.type';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import { getAllBrands } from '../../../../apis/brand.api';
import { getAllCategory } from '../../../../apis/category.api';
import { useForm } from 'react-hook-form';
import { productApi } from '../../../../apis/product.api';
import { Attribute } from '../../../../types/product.type';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from '../../../../components/Button/Button';


export type FormDataAddProduct = {
  name: string;
  price: number;
  stock: number;
  description: string;
  brandName: string;
  categoryName: string;
  attributes: Attribute[];
  images: File[]
};

export default function AddProduct() {
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [brandList, setBrandList] = useState<Brand[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setSelectedImages(Array.from(files));
    }
  };


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

  const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm<FormDataAddProduct>();

  const categoryName = watch("categoryName");

  useEffect(() => {
    const selectedCategory = categoryList.find(cat => cat.name === categoryName);
    if (selectedCategory) {
      setSelectedCategory(selectedCategory);
    }
  }, [categoryName, categoryList]);


  const addProduct = useMutation({
    mutationFn: (submitData: FormData) => productApi.addProduct(submitData),
    onSuccess: () => {
      toast.success("Thêm sản phẩm thành công");

      setSelectedImages([]);
      reset();
    },
    onError: () => {
      toast.error("Thêm sản phẩm thất bại");
    }
  })

  const onSubmit = (data: FormDataAddProduct) => {
    const attributeList: Attribute[] = selectedCategory?.listAttribute?.map((attr, index) => ({
      name: attr,
      value: data.attributes?.[index]?.value || ''
    })) || [];


    const formData = new FormData();

    // Thêm các thông tin sản phẩm vào formData
    formData.append("name", data.name);
    formData.append("price", data.price.toString());
    formData.append("stock", data.stock.toString());
    formData.append("description", data.description);
    formData.append("brandName", data.brandName);
    formData.append("categoryName", data.categoryName);

    // Thêm các thuộc tính sản phẩm vào formData
    attributeList.forEach((attribute, index) => {
      formData.append(`attributes[${index}].name`, attribute.name);
      formData.append(`attributes[${index}].value`, attribute.value);
    });

    // Thêm các file ảnh vào formData
    selectedImages.forEach((image, index) => {
      formData.append(`images[${index}]`, image);
    });
    addProduct.mutate(formData)

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
            className="w-full mt-1 p-2 border border-gray-300  rounded-md focus:ring focus:ring-blue-300"
            placeholder="Nhập tên sản phẩm"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-700">Giá</label>
          <input
            type="number"
            {...register("price", { required: "Giá là bắt buộc" })}
            className="w-full mt-1 p-2 border border-gray-300  rounded-md focus:ring focus:ring-blue-300"
            placeholder="Nhập giá"
          />
        </div>

        {/* Stock */}
        <div>
          <label className="block text-gray-700">Số lượng</label>
          <input
            type="number"
            {...register("stock", { required: "Số lượng là bắt buộc" })}
            className="w-full mt-1 p-2 border border-gray-300  rounded-md focus:ring focus:ring-blue-300"
            placeholder="Nhập số lượng"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700">Mô tả</label>
          <ReactQuill
            value={watch("description")}
            onChange={(content) => setValue("description", content, { shouldValidate: true })}
            className="mt-1 rounded-lg pb-0 h-24 mb-4"
            placeholder="Nhập mô tả sản phẩm"
            theme="snow"
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
        </div>

        {/* Brand */}
        <div>
          <label className="block text-gray-700 mt-14">Thương hiệu</label>
          <select
            {...register("brandName", { required: "Thương hiệu là bắt buộc" })}
            className="w-full mt-1 p-2 border border-gray-300  rounded-md focus:ring focus:ring-blue-300"
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
            className="w-full mt-1 p-2 border border-gray-300  rounded-md focus:ring focus:ring-blue-300"
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
              className="w-2/3 p-2 border border-gray-300  rounded-md focus:ring focus:ring-blue-300"
              placeholder={`Nhập ${attr.toLowerCase()}`}
            />
            {errors.attributes?.[index]?.value && (
              <p className="text-red-500">{errors.attributes[index].value.message}</p>
            )}
          </div>
        ))}

        {/* Images */}
        <div>
          <label className="block text-gray-700">Chọn ảnh</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
          />
          {selectedImages.length > 0 && (
            <div className="mt-2 grid grid-cols-8 gap-2">
              {selectedImages.map((file, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(file)}
                  alt={`Ảnh ${index + 1}`}
                  className="w-full h-full object-cover rounded-md"
                />
              ))}
            </div>
          )}
        </div>


        {/* Submit */}
        <Button
          className="flex justify-center items-center w-full p-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300"
          type="submit"
          disabled={addProduct.isPending}
          isLoading={addProduct.isPending}
        >
          Đăng nhập
        </Button>
      </form>
    </div>
  );
}
