import React from "react";
import { useGlobalContext } from "./context";
import { Container } from "react-bootstrap";

const ShowRecords = () => {
  const { transactions } = useGlobalContext();

  return (
    <>
      {transactions.length > 0 ? (
        transactions
          .sort((a, b) => new Date(a.date) - new Date(b.date))
          .map((transact, index) => (
            <Container key={index} className="d-flex">
              <div>No. {index + 1}</div>
              <div>{transact.date}</div>
              <div>
                {transact.amount
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                PHP
              </div>
              <div>{transact.category}</div>
              <div>{transact.status}</div>
              <div>{transact.paymentMode}</div>
              <div>{transact.note}</div>
            </Container>
          ))
      ) : (
        <div>NO RECORDS TO SHOW!</div>
      )}
    </>
  );
};

export default ShowRecords;
