import React from "react";
import { Container } from "react-bootstrap";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const PieChartWithNeedle = ({ status, title, maximum }) => {
  const RADIAN = Math.PI / 180;
  let currentValue;
  let single;
  if (maximum === -Infinity || maximum === Infinity) {
    single = 100;
    currentValue = -65;
  } else {
    single = maximum / 3;
    currentValue = status;
  }

  const data = [
    { name: "A", value: single, color: "#ff0000" },
    { name: "B", value: single, color: "#EF8009" },
    { name: "C", value: single, color: "#5DF5A5" },
  ];
  const cx = 50;
  const cy = 100;
  const iR = 35;
  const oR = 45;
  const value = currentValue;

  const needle = (value, data, cx, cy, iR, oR, color) => {
    let total = 0;
    data.forEach((v) => {
      total += v.value;
    });
    const ang = 180.0 * (1 - value / total);
    const length = (iR + 2 * oR) / 3;
    const sin = Math.sin(-RADIAN * ang);
    const cos = Math.cos(-RADIAN * ang);
    const r = 5;
    const x0 = cx + 5;
    const y0 = cy + 5;
    const xba = x0 + r * sin;
    const yba = y0 - r * cos;
    const xbb = x0 - r * sin;
    const ybb = y0 + r * cos;
    const xp = x0 + length * cos;
    const yp = y0 + length * sin;

    return [
      <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
      <path
        d={`M${xba},${yba}L${xbb},${ybb},L${xp},${yp},L${xba},${yba}`}
        stroke="#none"
        fill={color}
      />,
    ];
  };

  return (
    <Container className="d-flex flex-sm-column justify-content-sm-start align-items-center">
      <div>
        <PieChart width={100} height={180}>
          <Pie
            dataKey="value"
            startAngle={220}
            endAngle={-40}
            data={data}
            cx={cx}
            cy={cy}
            innerRadius={iR}
            outerRadius={oR}
            fill="#8884d8"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          {needle(value, data, cx, cy, iR, oR, "#15250F")}
        </PieChart>
      </div>
      <Container>
        <p>{title}</p>
        <p>{status.toString().replace(/000$/, "K")} PHP</p>
      </Container>
    </Container>
  );
};

export default PieChartWithNeedle;
