import { getAccessTokenFromLocalStorage } from "../utils/auth";
import { createContext, useState } from "react";
import React from "react";

interface AppContextInterface {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const getInitialAuthState = () => {
  return Boolean(getAccessTokenFromLocalStorage());
};

const initialAppContext: AppContextInterface = {
  isAuthenticated: getInitialAuthState(),
  setIsAuthenticated: () => null,
};

export const AppContext = createContext<AppContextInterface>(initialAppContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    initialAppContext.isAuthenticated
  );

  return (
    <AppContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AppContext.Provider>
  );
};
