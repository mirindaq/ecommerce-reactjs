import { User } from "../types/user.type";

export const setAccessTokenToLocalStorage = (accessToken: string) => {
  localStorage.setItem("accessToken", accessToken);
};

export const removeAccessTokenFromLocalStorage = () => {
  localStorage.removeItem("accessToken");
};

export const getAccessTokenFromLocalStorage = () =>
  localStorage.getItem("accessToken") || "";

export function getUserFromLocalStorage(): (User & { role: string[] }) | null {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

export const setUserToLocalStorage = (user: User, role: string[]) => {
  const userString = JSON.stringify({ ...user, role });
  localStorage.setItem("user", userString);
};

export const removeUserFromLocalStorage = () => localStorage.removeItem("user");
