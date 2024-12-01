import axios, { AxiosError, HttpStatusCode } from "axios";

export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  return axios.isAxiosError(error);
}

export function isAxiosConflictError<FormError>(
  error: unknown
): error is AxiosError<FormError> {
  return (
    isAxiosError(error) && error.response?.status === HttpStatusCode.Conflict
  );
}

export interface SuccessResponse<Data> {
  message: string;
  data: Data;
}

export interface ErrorResponse<Data> {
  message: string;
  data?: Data;
}
