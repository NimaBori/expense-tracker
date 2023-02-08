import React, { useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Container } from "react-bootstrap";
import { useGlobalContext } from "../context";

const BalanceTrend = () => {
  const { transactions } = useGlobalContext();
  const currentBalance = transactions
    .map((transact) => transact.amount)
    .reduce((acc, cur) => acc + cur, 0);
  let allBalances = [];

  const dates = [
    ...new Set(
      transactions.map((transact, index) => {
        return transact.date;
      })
    ),
  ].sort((a, b) => a - b);

  dates.map((date) => {
    allBalances.push({
      date,
      balance: transactions
        .map((transac, index) => {
          if (transac.date === date) {
            return transac.amount;
          }
        })
        .reduce((acc, cur) => {
          let num = typeof cur === "number" ? cur : Number(cur);
          if (!isNaN(num)) {
            return acc + cur;
          }
          return acc;
        }, 0),
    });
  });

  console.log(allBalances);

  return (
    <Container>
      <h2>Total Balance: {currentBalance} PHP</h2>
      <h3>Trend of your balance per expenses in each day.</h3>
      <Container width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={allBalances}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="balance"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </Container>
    </Container>
  );
};

export default BalanceTrend;
