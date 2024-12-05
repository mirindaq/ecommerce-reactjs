import { useEffect, useState } from "react";
import { getProductById } from "../../apis/product.api";
import { useMutation } from "@tanstack/react-query";
import { Product } from "../../types/product.type";
import { useParams } from "react-router";
import Button from "../../components/Button/Button";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const [mainImage, setMainImage] = useState(product?.images[0]);

  const getProduct = useMutation({
    mutationFn: () => getProductById(Number(id)),
    onSuccess: (data) => {
      setIsLoading(false);
      setProduct(data.data.data.product);
      setMainImage(data.data.data.product.images[0]);
    },
    onError: (error) => {
      console.error("Error fetching products:", error);
    },
  });

  const changeImage = (src: string) => {
    setMainImage(src);
  };

  useEffect(() => {
    getProduct.mutate();
  }, []);

  return (
    <>
      <div className="flex justify-center mt-5">
        <div className="w-4/6">
          <div className="flex items-center">
            <div className="font-bold text-xl">{product?.name}</div>
            <div>* 4.9</div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-8">
              {/* <div className="h-80 relative overflow-hidden bg-white">
                <img
                  src={product?.images[0]}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div> */}


              <div id="default-carousel" className="relative w-full" data-carousel="slide">
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
    
                  <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="/docs/images/carousel/carousel-1.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                  </div>
           
                  <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="/docs/images/carousel/carousel-2.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                  </div>
          
                  <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="/docs/images/carousel/carousel-3.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                  </div>
          
                  <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="/docs/images/carousel/carousel-4.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                  </div>
              
                  <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="/docs/images/carousel/carousel-5.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                  </div>
                </div>
       
                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                  <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                  <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                  <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                  <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                  <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                </div>

                <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                  </span>
                </button>
                <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                  </span>
                </button>
              </div>

            </div>

            <div className="col-span-4">
              <img src="https://cdnv2.tgdd.vn/mwg-static/tgdd/Banner/76/8a/768adf80544c242387ff149266e18d95.png" alt="" className="mb-2" />
              <img src="https://cdnv2.tgdd.vn/mwg-static/dmx/Banner/ed/00/ed00740d334a562f1636f8bc80808fce.png" alt="" className="mb-2" />
              {product?.discount ? (
                <>
                  <div className="flex items-center">
                    <p className="text-red-600 text-xl font-bold mt-1 mb-1 mr-3">
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(product.price * (1 - product.discount / 100))}
                    </p>
                    <p className="text-gray-500 line-through font-medium text-base">
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(product.price)}
                    </p>
                  </div>

                </>
              ) : (
                <p className="mt-1">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(product?.price || 0)}
                </p>
              )}

              <div className="border border-200 rounded-3xl mb-3">
                <div className="bg-color-background-100 px-3 py-2 text-sm font-semibold">
                  Giới thiệu sản phẩm
                </div>
                <div className="px-3 py-2 bg-white text-gray-800">
                  Nhập mã VNPAYTGDD5 giảm từ 50,000đ đến 200,000đ (áp dụng tùy giá trị đơn hàng) khi thanh toán qua VNPAY-QR. (Xem chi tiết tại đây)
                </div>
              </div>

              <div className="grid grid-cols-2 gap-x-3 gap-y-2">
                <Button
                  className="w-full text-sm bg-white  text-blue-600 font-medium border border-blue-400 py-3.5 px-4 rounded-lg transition-all duration-300 flex justify-center items-center"
                  type="submit"
                  disabled={false}
                  isLoading={false}
                >
                  Thêm vào giỏ
                </Button>
                <Button
                  className="w-full text-sm bg-orange-400  text-white font-medium py-3.5 px-4 rounded-lg transition-all duration-300 flex justify-center items-center"
                  type="submit"
                  disabled={false}
                  isLoading={false}
                >
                  Mua ngay
                </Button>
                <Button
                  className="w-full text-sm text-white font-medium border bg-blue-500 py-3.5 px-4 rounded-lg transition-all duration-300 flex justify-center items-center"
                  type="submit"
                  disabled={false}
                  isLoading={false}
                >
                  Mua trả chậm
                </Button>
                <Button
                  className="w-full text-sm bg-blue-500  text-white font-medium border py-3.5 px-4 rounded-lg transition-all duration-300 flex justify-center items-center"
                  type="submit"
                  disabled={false}
                  isLoading={false}
                >
                  Trả chậm 0% qua thẻ
                </Button>

              </div>




            </div>

          </div>
        </div>

      </div>

    </>
  );
};

export default ProductDetail;
