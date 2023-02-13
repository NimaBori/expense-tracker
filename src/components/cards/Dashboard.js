import React from "react";
import { Container } from "react-bootstrap";
import PieChartWithNeedle from "./PieChartWithNeedle";
import { useGlobalContext } from "../context";

const Dashboard = () => {
  const { transactions } = useGlobalContext();
  const currentBalance = transactions
    .map((transact) => transact.amount)
    .reduce((acc, cur) => acc + cur, 0);
  let incomes = [];
  let expenses = [];
  transactions.map((transac) => {
    if (transac.type === "income") {
      incomes.push(transac.amount);
    } else {
      expenses.push(transac.amount);
    }
  });
  const totalExpenses = expenses.reduce((acc, cur) => acc + cur, 0);

  return (
    <Container className="d-flex text-center">
      <h2 className="">Dashboard</h2>
      <PieChartWithNeedle
        status={currentBalance}
        title="BALANCE"
        maximum={Math.max(...incomes)}
      />
      <PieChartWithNeedle
        status={totalExpenses}
        title="SPENDING"
        maximum={Math.abs(Math.min(...expenses))}
      />
    </Container>
  );
};

export default Dashboard;
