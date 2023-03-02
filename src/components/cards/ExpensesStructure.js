import React, { useState } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";
import { useGlobalContext } from "../context";
import { Container } from "react-bootstrap";

const ExpensesStructure = () => {
  const { transactions } = useGlobalContext();
  const [activeIndex, setActiveIndex] = useState(0);
  const currentBalance = transactions
    .map((transact) => transact.amount)
    .reduce((acc, cur) => acc + cur, 0);
  let expensesStractue = [];
  const categories = [
    ...new Set(
      transactions.map((transact, index) => {
        return transact.category;
      })
    ),
  ];

  categories.map((category) => {
    expensesStractue.push({
      name: category,
      value: Math.abs(
        transactions
          .map((transac, index) => {
            if (transac.category === category && transac.type === "expense") {
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
  });

  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 4}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 8}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
        >{`PHP ${value}`}</text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 8}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="#999"
        >
          {`(Rate ${Math.round((percent * 100).toFixed(2))}%)`}
        </text>
      </g>
    );
  };

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <Container>
      <h2>Expenses Structure</h2>
      <h4>Total Balance: {currentBalance} PHP</h4>
      <Container width="100%" height="100%" className="">
        <PieChart width={450} height={300}>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={expensesStractue}
            cx="50%"
            cy="50%"
            innerRadius={65}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={onPieEnter}
          />
        </PieChart>
      </Container>
    </Container>
  );
};

export default ExpensesStructure;
