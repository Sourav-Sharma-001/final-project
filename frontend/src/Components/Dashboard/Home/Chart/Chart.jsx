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
  // Updated weekly data with simple numbers
  const weeklyData = [
    { name: "Week 1", Sales: 50, Purchase: 40 },
    { name: "Week 2", Sales: 100, Purchase: 80 },
    { name: "Week 3", Sales: 150, Purchase: 120 },
    { name: "Week 4", Sales: 80, Purchase: 60 },
  ];

  const monthlyData = [
    { name: "Jan", Sales: 200, Purchase: 150 },
    { name: "Feb", Sales: 250, Purchase: 200 },
    { name: "Mar", Sales: 180, Purchase: 160 },
    { name: "Apr", Sales: 220, Purchase: 190 },
    { name: "May", Sales: 270, Purchase: 230 },
    { name: "Jun", Sales: 300, Purchase: 250 },
    { name: "Jul", Sales: 280, Purchase: 240 },
    { name: "Aug", Sales: 260, Purchase: 220 },
    { name: "Sep", Sales: 320, Purchase: 280 },
    { name: "Oct", Sales: 350, Purchase: 300 },
    { name: "Nov", Sales: 330, Purchase: 290 },
    { name: "Dec", Sales: 370, Purchase: 310 },
  ];

  const yearlyData = [
    { name: "2020", Sales: 1500, Purchase: 1200 },
    { name: "2021", Sales: 1800, Purchase: 1400 },
    { name: "2022", Sales: 2000, Purchase: 1600 },
    { name: "2023", Sales: 2200, Purchase: 1900 },
    { name: "2024", Sales: 2500, Purchase: 2100 },
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
        <h3 className="chart-title">Sales & Purchase</h3>
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
