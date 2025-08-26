import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";
import "./Chart.css";

const monthlyData = [
  { name: "Jan", sales: 20000, purchase: 15000 },
  { name: "Feb", sales: 25000, purchase: 20000 },
  { name: "Mar", sales: 18000, purchase: 16000 },
  { name: "Apr", sales: 22000, purchase: 17000 },
  { name: "May", sales: 24000, purchase: 21000 },
  { name: "Jun", sales: 26000, purchase: 23000 },
  { name: "Jul", sales: 28000, purchase: 25000 },
  { name: "Aug", sales: 30000, purchase: 27000 },
  { name: "Sep", sales: 27000, purchase: 24000 },
  { name: "Oct", sales: 32000, purchase: 28000 },
  { name: "Nov", sales: 31000, purchase: 26000 },
  { name: "Dec", sales: 33000, purchase: 29000 }
];

const weeklyData = [
  { name: "Week 1", sales: 5000, purchase: 4000 },
  { name: "Week 2", sales: 6000, purchase: 4500 },
  { name: "Week 3", sales: 7000, purchase: 4800 },
  { name: "Week 4", sales: 6500, purchase: 5000 }
];

const yearlyData = [
  { name: "2021", sales: 200000, purchase: 150000 },
  { name: "2022", sales: 250000, purchase: 210000 },
  { name: "2023", sales: 300000, purchase: 240000 }
];

const Chart = () => {
  const [range, setRange] = useState("monthly");

  const getData = () => {
    if (range === "weekly") return weeklyData;
    if (range === "yearly") return yearlyData;
    return monthlyData;
  };

  return (
    <div className="chart-container">
      <div className="chart-header">
        <h3 className="chart-title">Sales & Purchase</h3>
        <div className="chart-dropdown">
          <select value={range} onChange={(e) => setRange(e.target.value)}>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>

      <div className="chart-body">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={getData()}
            margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
            barCategoryGap="20%"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
            <Bar dataKey="sales" fill="#4285F4" radius={[6, 6, 0, 0]} />
            <Bar dataKey="purchase" fill="#FB8C00" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
