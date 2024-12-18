import { useEffect, useState } from "react";
import { productApi } from "../../../apis/product.api";
import { useMutation } from "@tanstack/react-query";
import { Product } from "../../../types/product.type";
import { useParams } from "react-router";
import Button from "../../../components/Button/Button";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const [mainImage, setMainImage] = useState(product?.images[0]);

  const getProduct = useMutation({
    mutationFn: () => productApi.getProductById(Number(id)),
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
              <div className="h-80 relative overflow-hidden bg-white">
                <img
                  src={product?.images[0]}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="border border-200 rounded-3xl mb-3">
                <div className="border-b px-3 py-3 mt-2 text-base font-semibold">
                  Giới thiệu sản phẩm
                </div>
                <div className="px-3 py-2 bg-white text-gray-800">
                  <div dangerouslySetInnerHTML={{ __html: product?.description as string }}></div>
                </div>
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
                <p className="text-red-600 text-xl font-bold mt-1 mb-2 mr-3">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(product?.price || 0)}
                </p>
              )}

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

              <div className="mt-2 text-sm">
                Gọi đặt mua <span className="text-blue-500">1900 232 460</span> (8:00 - 21:30)
              </div>

              <div className="border border-200 rounded-3xl mb-3  mt-5">
                <div className="py-2 bg-white text-gray-800">
                  {product?.attributeList && (
                    <>
                      <div className="bg-white px-3 py-2 text-base font-semibold border-b">
                        Thông số kỹ thuật
                      </div>
                      {product.attributeList.map((item, index) => (
                        <div key={item.name}>
                          {index % 2 === 0 ? (
                            <div className="grid grid-cols-2 p-3">
                              <div className="col-span-1">{item.name}</div>
                              <div className="col-span-1">{item.value}</div>
                            </div>

                          ) : (<div className="grid grid-cols-2 p-3 bg-color-background-100">
                            <div className="col-span-1">{item.name}</div>
                            <div className="col-span-1">{item.value}</div>
                          </div>)}
                        </div>
                      ))}
                    </>

                  )}
                </div>
              </div>


            </div>

          </div>
        </div>

      </div >

    </>
  );
};

export default ProductDetail;
