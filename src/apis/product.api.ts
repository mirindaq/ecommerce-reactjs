import {
  ProductSearchParams,
  SuccessProduct,
  SuccessProductList,
} from "../types/product.type";
import http from "../utils/http";

export const getAllProducts = () => {
  return http.get<SuccessProductList>("/admin/products");
};

export const getProductById = (id: number) => {
  return http.get<SuccessProduct>(`/products/${id}`);
};

export const searchProducts = (params: ProductSearchParams) => {
  return http.get<SuccessProductList>("/products", { params });
};
