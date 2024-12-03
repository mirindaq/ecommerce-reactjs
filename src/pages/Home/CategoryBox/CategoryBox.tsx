import { Link } from "react-router";
import { path } from "../../../constants/path";
import { Category } from "../../../types/category.type";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { getAllCategory } from "../../../apis/category.api";

export default function CategoryBox() {
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Set to true initially

  const getAllCate = useMutation({
    mutationFn: () => getAllCategory(),
    onSuccess: (data) => {
      setIsLoading(false);
      setCategoryList(data.data.data.categories);
      console.log(data.data.data.categories);
    },
    onError: (error) => {
      console.error("Error fetching Cate:", error);
    },
  });

  useEffect(() => {
    getAllCate.mutate();
  }, []);

  return (
    <>
      <p className="font-bold text-3xl pb-5">Danh mục sản phẩm</p>
      <div className="grid grid-cols-12 bg-white mb-5">
        {isLoading && (
          <>
            <div>
              <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
              </div>
            </div>
          </>
        )}
        {categoryList &&
          categoryList.map((item) => (
            <Link
              to={path.productClient + `/?categoryName=${item.name}`}
              className="col-span-3 text-center border py-4 rounded-tl-lg hover:border-orange-300 hover:shadow-md "
            >
              <div className="w-full object-scale-down flex items-center justify-center flex-col transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200">
                <img src={item.image} alt="laptop" className="w-14 h-14" />
                {item.name}
              </div>
            </Link>
          ))}
      </div>
    </>
  );
}
