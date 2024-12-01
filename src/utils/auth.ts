import { User } from "../types/user.type";

export const setAccessTokenToLocalStorage = (accessToken: string) => {
  localStorage.setItem("accessToken", accessToken);
};

export const removeAccessTokenFromLocalStorage = () => {
  localStorage.removeItem("accessToken");
};

export const getAccessTokenFromLocalStorage = () =>
  localStorage.getItem("accessToken") || "";

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem("user");
  if (result) {
    return JSON.parse(result);
  }
  return null;
};

export const setUserToLocalStorage = (user: User) => {
  const userString = JSON.stringify(user);
  localStorage.setItem("user", userString);
};

export const removeUserFromLocalStorage = () => localStorage.removeItem("user");
