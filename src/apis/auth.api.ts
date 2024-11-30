import { AuthLogin, AuthRegister } from "./../types/auth.type";
import http from "../utils/http";
import { path } from "../constants/path";

export const registerAccount = (body: { email: string; password: string }) =>
  http.post<AuthRegister>(path.register, body);

export const loginAccount = (body: { email: string; password: string }) => {
  return http.post<AuthLogin>(path.login, body);
};

export const logoutAccount = () => {
  return http.post(path.logout);
};
