import { ResponseApi } from "./utils.type";

export type Brand = {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
};

export type SuccessBrandList = ResponseApi<{ brands: Brand[] }>;
