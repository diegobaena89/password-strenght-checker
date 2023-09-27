import { createContext } from "react";

type PasswordCheckerContextType = {
  password: string;
  setPassword: (password: string) => void;
  points: number;
  setPoints: (points: number) => void;
};

export const PasswordCheckerContext = createContext<PasswordCheckerContextType>(
  { password: "", setPassword: () => {}, points: 0, setPoints: () => {} }
);
