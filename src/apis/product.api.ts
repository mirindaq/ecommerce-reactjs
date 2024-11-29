import { SuccessProductList } from "../types/product.type";
import http from "../utils/http";

export const getAllProducts = () => {
  return http.get<SuccessProductList>("/admin/products");
};
