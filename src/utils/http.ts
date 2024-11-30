import axios, { AxiosError, AxiosInstance, HttpStatusCode } from "axios";
import { toast } from "react-toastify";
import { AuthLogin } from "../types/auth.type";
import {
  getAccessTokenFromLocalStorage,
  removeAccessTokenFromLocalStorage,
  setAccessTokenToLocalStorage,
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
          this.accessToken = (response.data as AuthLogin).data.accessToken;
          setAccessTokenToLocalStorage(this.accessToken);
        } else if (url === path.logout) {
          this.accessToken = "";
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
