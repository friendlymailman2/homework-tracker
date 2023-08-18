import { createContext, useContext } from "react";

interface DateContextType {
  selectedDate: string;
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
}

export const DateContext = createContext<DateContextType | undefined>(
  undefined
);

export const useDateContext = () => {
  const context = useContext(DateContext);
  if (!context) {
    throw new Error("useDateContext must be used within a DateContextProvider");
  }
  return context;
};
