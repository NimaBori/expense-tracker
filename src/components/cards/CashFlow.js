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

  // const income = transactions
  //   .map((transact) => {
  //     if (transact.type === "income") {
  //       return transact.amount;
  //     }
  //   })
  //   .reduce((acc, cur) => {
  //     let num = typeof cur === "number" ? cur : Number(cur);
  //     if (!isNaN(num)) {
  //       return acc + cur;
  //     }
  //     return acc;
  //   }, 0);

  // const expense = transactions
  //   .map((transact) => {
  //     if (transact.type === "expense") {
  //       return transact.amount;
  //     }
  //   })
  //   .reduce((acc, cur) => {
  //     let num = typeof cur === "number" ? cur : Number(cur);
  //     if (!isNaN(num)) {
  //       return acc + cur;
  //     }
  //     return acc;
  //   }, 0);

  return (
    <>
      <h2>CashFlow </h2>
      <div width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" label="PHP" />
          <YAxis dataKey="name" type="category" scale="band" />
          <Tooltip />
          {/* <Legend /> */}
          <Area fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="balance" barSize={100} fill="#413ea0" />
        </ComposedChart>
      </div>
    </>
  );
};

export default CashFlow;
