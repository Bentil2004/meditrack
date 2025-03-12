import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { name: "M", value: 400 },
  { name: "T", value: 200 },
  { name: "W", value: 300 },
  { name: "T", value: 500 },
  { name: "F", value: 700 },
  { name: "S", value: 600 },
  { name: "S", value: 800 },
];

const GraphChart = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-2">Total Medicine</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Line type="monotone" dataKey="value" stroke="#7E48F0" strokeWidth={3} dot={{ r: 5, fill: "#7E48F0" }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphChart;
