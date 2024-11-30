export const setAccessTokenToLocalStorage = (accessToken: string) => {
  localStorage.setItem("accessToken", accessToken);
};

export const removeAccessTokenFromLocalStorage = () => {
  localStorage.removeItem("accessToken");
};

export const getAccessTokenFromLocalStorage = () =>
  localStorage.getItem("accessToken") || "";
