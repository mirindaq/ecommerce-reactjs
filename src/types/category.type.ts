import { ResponseApi } from "./utils.type";

export type Category = {
  id: number;
  name: string;
  image: string;
  listAttribute: string[];
};

export type SuccessCategoryList = ResponseApi<{ categories: Category[] }>;
