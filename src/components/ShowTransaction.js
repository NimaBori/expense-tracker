import React from "react";
import { useGlobalContext } from "./context";

const ShowTransaction = () => {
  const { transactions } = useGlobalContext();
  console.log(transactions.length);

  return (
    <div>
      <div>
        {transactions.map((i, index) => (
          <div key={index} className="border">
            <div>{i.date}</div>
            <div>{i.type}</div>
            <div>{i.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowTransaction;
