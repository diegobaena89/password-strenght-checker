import { createContext } from "react";

type PasswordCheckerContextType = {
  password: string;
  setPassword: (password: string) => void;
};

export const PasswordCheckerContext = createContext<PasswordCheckerContextType>(
  { password: "", setPassword: () => {} }
);
