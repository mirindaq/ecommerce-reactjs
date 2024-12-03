import { SuccessCategoryList } from "../types/category.type";
import http from "../utils/http";

export const getAllCategory = () => {
  return http.get<SuccessCategoryList>("/categories");
};
