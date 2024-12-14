import { ResponseApi } from "./utils.type";

export interface User {
  id: number;
  address: string;
  avatar: string;
  email: string;
  fullName: string;
  phone: string;
  active: boolean;
  createdDate: string | null;
  createdBy: string | null;
  modifiedDate: string | null;
  modifiedBy: string | null;
  role: string[];
}

export type SuccessUserList = ResponseApi<{
  users: User[];
  total: number;
  page: number;
  limit: number;
}>;
