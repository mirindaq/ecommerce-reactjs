import { SuccessBrandList } from "../types/brand.type";
import { getAccessTokenFromLocalStorage } from "../utils/auth";
import http from "../utils/http";

export const getBrandByCategory = (categoryName: string) => {
  return http.get<SuccessBrandList>(`/categories/brands`, {
    params: {
      categoryName,
    },
  });
};

export const getAllBrands = () => {
  const token = getAccessTokenFromLocalStorage();
  return http.get<SuccessBrandList>("/admin/brands", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
