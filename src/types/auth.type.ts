import { User } from "./user.type";
import { ResponseApi } from "./utils.type";

export type AuthLogin = ResponseApi<{
  accessToken: string;
  user: User;
  role: string[];
}>;

export type AuthRegister = ResponseApi<{ user: User }>;
