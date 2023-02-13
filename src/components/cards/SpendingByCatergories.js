import React from "react";
import { useGlobalContext } from "../context";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const SpendingByCatergories = () => {
  const { transactions } = useGlobalContext();

  const categories = [
    ...new Set(
      transactions.map((transact, index) => {
        if (transact.type === "expense") {
          return transact.category;
        }
      })
    ),
  ];

  const data = [];
  categories.map((cat) => {
    if (cat !== undefined && categories.length > 1) {
      data.push({
        name: cat,
        value: Math.abs(
          transactions
            .map((transac, index) => {
              if (transac.category === cat) {
                return transac.amount;
              }
            })
            .reduce((acc, cur) => {
              let num = typeof cur === "number" ? cur : Number(cur);
              if (!isNaN(num)) {
                return acc + cur;
              }
              return acc;
            }, 0)
        ),
      });
    }
  });

  return (
    <>
      <h2>Spending by Categories</h2>
      {data.length > 0 && (
        <div width="100%" height="100%">
          <ComposedChart
            layout="vertical"
            width={600}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 120,
              bottom: 20,
              left: 80,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Area fill="#8884d8" stroke="#8884d8" />
            <Bar
              dataKey="value"
              barSize={100}
              fill="#413ea0"
              label={{
                position: "right",
                fill: "black",
                formatter: (value) =>
                  `₱${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
              }}
            />
          </ComposedChart>
        </div>
      )}
    </>
  );
};

export default SpendingByCatergories;
