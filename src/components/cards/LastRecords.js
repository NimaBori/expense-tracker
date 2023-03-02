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
            const { category, type, date, time, amount } = transact;
            const money = amount
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return (
              <Container
                key={index}
                className={`d-flex ${
                  type === "expense" ? "bg-danger" : "bg-success"
                } bg-opacity-25 p-1 mb-1 `}
              >
                <div>{category}</div>
                <div className="d-flex ms-auto me-2">
                  <div className="">{date}</div>
                  <div className="ps-2">{time}</div>
                </div>
                <div className="ps-5">{money} PHP</div>
              </Container>
            );
          }
        })}
    </Container>
  );
};

export default LastRecords;
