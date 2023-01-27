import React, { useContext, useReducer } from "react";
import expenses from "../data/expenses";
import reducer from "./reducer";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [transactions, dispatch] = useReducer(reducer, expenses);

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
