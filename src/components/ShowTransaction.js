import React from "react";
import { useGlobalContext } from "./context";

const ShowTransaction = () => {
  const { transactions } = useGlobalContext();
  console.log(transactions.length);

  return (
    <div>
      <div>
        <p>asda</p>
        {transactions.map((i, index) => (
          <div key={index} className="border">
            <div>{i.no}</div>
            <div>{i.category}</div>
            <div>{i.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowTransaction;
