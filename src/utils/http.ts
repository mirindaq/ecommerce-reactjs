import axios, { AxiosError, AxiosInstance, HttpStatusCode } from "axios";
import { toast } from "react-toastify";
import { AuthLogin } from "../types/auth.type";
import {
  getAccessTokenFromLocalStorage,
  removeAccessTokenFromLocalStorage,
  removeUserFromLocalStorage,
  setAccessTokenToLocalStorage,
  setUserToLocalStorage,
} from "./auth";
import { path } from "../constants/path";

class Http {
  instance: AxiosInstance;
  private accessToken: string;
  constructor() {
    this.accessToken = getAccessTokenFromLocalStorage();
    this.instance = axios.create({
      baseURL: "http://localhost:8080/",
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken) {
          config.headers.Authorization = "Bearer " + this.accessToken;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config;
        if (url === path.login) {
          const responseData = response.data as AuthLogin;
          this.accessToken = responseData.data.accessToken;
          setAccessTokenToLocalStorage(this.accessToken);
          setUserToLocalStorage(responseData.data.user, responseData.data.role);
        } else if (url === path.logout) {
          this.accessToken = "";
          removeUserFromLocalStorage();
          removeAccessTokenFromLocalStorage();
        }
        return response;
      },
      function (error: AxiosError) {
        if (error.response?.status !== HttpStatusCode.Conflict) {
          const message = error.message;
          toast.error(message);
        }
        return Promise.reject(error);
      }
    );
  }
}

const http = new Http().instance;

export default http;
