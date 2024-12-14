import {
  Product,
  ProductSearchParams,
  ProductSearchParamsAdmin,
  SuccessProduct,
  SuccessProductList,
} from "../types/product.type";
import http from "../utils/http";

export const productApi = {
  getAllProducts: () => {
    return http.get<SuccessProductList>("/admin/products");
  },

  getProductById: (id: number) => {
    return http.get<SuccessProduct>(`/products/${id}`);
  },

  searchProducts: (params: ProductSearchParams) => {
    return http.get<SuccessProductList>("/products", { params });
  },

  searchProductsAdmin: (params: ProductSearchParamsAdmin) => {
    return http.get<SuccessProductList>("/admin/products", { params });
  },

  addProduct: (data: Product) => {
    return http.post<SuccessProduct>("/admin/products", data);
  },

  updateProduct: (id: number, data: Product) => {
    return http.put<SuccessProduct>(`/admin/products/${id}`, data);
  },
};
