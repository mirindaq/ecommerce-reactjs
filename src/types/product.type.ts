import { ResponseApi } from "./utils.type";

export interface Attribute {
  name: string;
  value: string;
}

export type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
  discount: number;
  description: string;
  images: string[];
  brandName: string;
  categoryName: string;
  attributeList: Attribute[];
  createdDate: string;
  createdBy: string;
  modifiedDate: string;
  modifiedBy: string;
};

export interface ProductSearchParams {
  name?: string;
  minPrice?: number;
  maxPrice?: number;
  discount?: number;
  brandName?: string;
  categoryName?: string;
  page?: number | string;
  limit?: number | string;
  sort_by?: "createdAt" | "view" | "sold" | "price";
  order?: "asc" | "desc";
}

export type SuccessProductList = ResponseApi<{ products: Product[] }>;

export type SuccessProduct = ResponseApi<{ product: Product }>;
