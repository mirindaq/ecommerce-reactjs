import { ResponseApi } from "./utils.type";

export type Attribute = {
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
  rating: number;
  active: boolean;
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
  sortBy?: "createdDate" | "rating" | "price";
  sortOrder?: "asc" | "desc";
}

export interface ProductSearchParamsAdmin {
  name?: string;
  minPrice?: number;
  maxPrice?: number;
  discount?: number;
  brandName?: string;
  categoryName?: string;
  page?: number | string;
  limit?: number | string;
  sortBy?: "createdDate" | "rating" | "price" | "stock";
  sortOrder?: "asc" | "desc";
  active?: boolean | string;
  createdDateFrom?: string;
  createdDateTo?: string;
  modifiedDateFrom?: string; 
  modifiedDateTo?: string; 
  createdBy?: string; 
  modifiedBy?: string; 
}

export type SuccessProductList = ResponseApi<{
  products: Product[];
  total: number;
  page: number;
  limit: number;
}>;

export type SuccessProduct = ResponseApi<{ product: Product }>;
