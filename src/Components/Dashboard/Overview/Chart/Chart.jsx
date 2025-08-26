import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./Chart.css";

const Chart = () => {
  const monthlyData = [
    { name: "Jan", Sales: 20000, Purchase: 15000 },
    { name: "Feb", Sales: 25000, Purchase: 20000 },
    { name: "Mar", Sales: 18000, Purchase: 16000 },
    { name: "Apr", Sales: 22000, Purchase: 19000 },
    { name: "May", Sales: 27000, Purchase: 23000 },
    { name: "Jun", Sales: 30000, Purchase: 25000 },
    { name: "Jul", Sales: 28000, Purchase: 24000 },
    { name: "Aug", Sales: 26000, Purchase: 22000 },
    { name: "Sep", Sales: 32000, Purchase: 28000 },
    { name: "Oct", Sales: 35000, Purchase: 30000 },
    { name: "Nov", Sales: 33000, Purchase: 29000 },
    { name: "Dec", Sales: 37000, Purchase: 31000 },
  ];

  const weeklyData = [
    { name: "Week 1", Sales: 5000, Purchase: 4000 },
    { name: "Week 2", Sales: 6000, Purchase: 4500 },
    { name: "Week 3", Sales: 7000, Purchase: 4800 },
    { name: "Week 4", Sales: 8000, Purchase: 5200 },
  ];

  const yearlyData = [
    { name: "2020", Sales: 150000, Purchase: 120000 },
    { name: "2021", Sales: 180000, Purchase: 140000 },
    { name: "2022", Sales: 200000, Purchase: 160000 },
    { name: "2023", Sales: 220000, Purchase: 190000 },
    { name: "2024", Sales: 250000, Purchase: 210000 },
  ];

  const [chartData, setChartData] = useState(weeklyData);
  const [period, setPeriod] = useState("weekly");

  const handleChange = (e) => {
    const value = e.target.value;
    setPeriod(value);
    if (value === "weekly") setChartData(weeklyData);
    else if (value === "monthly") setChartData(monthlyData);
    else if (value === "yearly") setChartData(yearlyData);
  };

  const getBarSize = () => {
    const count = chartData.length;
    if (count <= 4) return 60; // weekly
    if (count <= 5) return 50; // yearly
    return 25; // monthly
  };

  return (
    <div className="chart-container">
      <div className="chart-header">
        <h3 className="chart-title">Sales vs Purchase</h3>
        <div className="chart-dropdown">
          <select onChange={handleChange} value={period}>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>
      <div className="chart-body">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            barGap={10}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 12, fontWeight: 500 }} />
            <YAxis tick={{ fontSize: 12, fontWeight: 500 }} />
            <Tooltip contentStyle={{ fontSize: 12 }} itemStyle={{ fontSize: 12 }} />
            <Legend wrapperStyle={{ fontSize: 12, fontWeight: 500 }} />
            <Bar dataKey="Sales" fill="#4f46e5" barSize={getBarSize()} />
            <Bar dataKey="Purchase" fill="#f97316" barSize={getBarSize()} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
