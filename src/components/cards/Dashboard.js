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
  console.log("dashboard incomes: ", typeof Math.min(...expenses));
  return (
    <Container>
      <h2>Dashboard</h2>
      <PieChartWithNeedle
        status={currentBalance}
        title="BALANCE"
        maximum={Math.max(...incomes)}
      />
      <PieChartWithNeedle
        status={Math.abs(totalExpenses)}
        title="SPENDING"
        maximum={Math.abs(Math.min(...expenses))}
      />
    </Container>
  );
};

export default Dashboard;
