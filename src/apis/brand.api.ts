import { SuccessBrandList } from "../types/brand.type";
import http from "../utils/http";

export const getBrandByCategory = (categoryName: string) => {
  return http.get<SuccessBrandList>(`/categories/brands`, {
    params: {
      categoryName, 
    },
  });
};
