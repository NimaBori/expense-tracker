import { Container } from "react-bootstrap";
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
import { useGlobalContext } from "../context";

const CashFlow = () => {
  const { transactions } = useGlobalContext();
  const data = [
    {
      name: "Income",
      balance: transactions
        .map((transact) => {
          if (transact.type === "income") {
            return transact.amount;
          }
        })
        .reduce((acc, cur) => {
          let num = typeof cur === "number" ? cur : Number(cur);
          if (!isNaN(num)) {
            return acc + cur;
          }
          return acc;
        }, 0),
    },
    {
      name: "Expense",
      balance: Math.abs(
        transactions
          .map((transact) => {
            if (transact.type === "expense") {
              return transact.amount;
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
    },
  ];

  return (
    <>
      <h2>CashFlow </h2>
      <Container width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          width={450}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: -10,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis
            tick={{ fontSize: "0.7rem", fill: "#333", fontWeight: "bold" }}
            type="number"
            label={
              <text
                x={260}
                y={380}
                dy={10}
                dx={10}
                textAnchor="end"
                fill="#666"
              >
                PHP
              </text>
            }
          />
          <YAxis
            tick={{ fontSize: "0.7rem", fill: "#333", fontWeight: "bold" }}
            dataKey="name"
            type="category"
            scale="auto"
          />
          <Tooltip />
          <Area fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="balance" barSize={80} fill="#413ea0" />
        </ComposedChart>
      </Container>
    </>
  );
};

export default CashFlow;
