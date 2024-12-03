import { useLocation } from "react-router";

export const useQueries = (): Record<string, string | undefined> => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const result: Record<string, string | undefined> = {};
  params.forEach((value, key) => {
    result[key] = value;
  });

  return result;
};
