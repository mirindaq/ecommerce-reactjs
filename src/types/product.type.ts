import { ResponseApi } from "./utils.type";

export interface Attribute {
  name: string;
  value: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  discount: number;
  description: string;
  image: string;
  brandName: string;
  categoryName: string;
  attributeList: Attribute[];
  createdDate: string; 
  createdBy: string;
  modifiedDate: string; 
  modifiedBy: string;
}

export type SuccessProductList = ResponseApi<{ products : Product[] }>;