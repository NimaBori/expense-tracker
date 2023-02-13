import React from "react";
import { Container } from "react-bootstrap";
import { useGlobalContext } from "../context";

const LastRecords = () => {
  const { transactions } = useGlobalContext();
  console.log(transactions);
  return (
    <Container>
      <h2>Last Five Records</h2>
      {transactions.length > 0 &&
        transactions.map((transact, index) => {
          if (transact.no > transactions.length - 5) {
            const { category, mode, date, time, amount } = transact;
            const money = amount
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return (
              <div key={index}>
                <div>{category}</div>
                <div>{money}</div>
                <div>{date}</div>
                <div>{time}</div>
              </div>
            );
          }
        })}
    </Container>
  );
};

export default LastRecords;
