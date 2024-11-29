import { AuthLogin, AuthRegister } from "./../types/auth.type";
import http from "../utils/http";

export const registerAccount = (body: { email: string; password: string }) =>
  http.post<AuthRegister>("/register", body);

export const loginAccount = (body: { email: string; password: string }) => {
  return http.post<AuthLogin>("/login", body); 
};

