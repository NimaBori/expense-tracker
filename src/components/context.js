import React, { useContext, useReducer } from "react";
import expenses from "../data/expenses";
import reducer from "./reducer";

const AppContext = React.createContext();
const initialTeams = [];

const AppProvider = ({ children }) => {
  const [transactions, dispatch] = useReducer(reducer, []);

  // add a new transaction
  function handleAddTransaction(transact) {
    dispatch({ type: "add-transaction", transact });
  }

  return (
    <AppContext.Provider
      value={{
        transactions,
        handleAddTransaction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
