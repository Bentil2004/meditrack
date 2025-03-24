import React,{ useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/TopBar/Topbar";
import { FaChevronDown, FaCalendarAlt } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import format from "date-fns/format";


const data = [
  { date: "1 Dec", sales: 50 },
  { date: "8 Dec", sales: 120 },
  { date: "16 Dec", sales: 60 },
  { date: "31 Dec", sales: 146 },
];

const orders = [
  { id: "2485855848598", date: "01 Dec 2021 10:25" },
  { id: "2485855848577", date: "02 Dec 2021 18:25" },
  { id: "2485855848563", date: "03 Dec 2021 18:25" },
  { id: "2485855848599", date: "05 Dec 2021 18:25" },
  { id: "2485855848568", date: "09 Dec 2021 18:25" },
  { id: "2485855848567", date: "10 Dec 2021 18:25" },
  { id: "2485855848564", date: "15 Dec 2021 18:25" },
  { id: "2485855848544", date: "21 Dec 2021 18:25" },
  { id: "2485855848565", date: "25 Dec 2021 18:25" },
  { id: "2485855848566", date: "28 Dec 2021 18:25" },
];

// Function to handle report download
const handleDownloadReport = () => {
  const csvContent =
    "Order ID,Date & Time\n" +
    orders.map((order) => `${order.id},${order.date}`).join("\n");

  const blob = new Blob([csvContent], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "Sales_Report.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

function Report() {
    // Date Range State
  const [range, setRange] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]);
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen">
        <Topbar />

        <div className="p-6 flex-1 overflow-auto">
          <div className="flex items-center justify-between p-4">
            <div>
              <h2 className="text-3xl font-bold text-[#979696]">Sales Report</h2>
              <h3>Sales related report of the pharmacy.</h3>
            </div>

            <button
              onClick={handleDownloadReport}
              className="border border-gray-400 px-4 py-2 rounded-md shadow-md flex items-center gap-2 cursor-pointer"
            >
              Download Report
              <FaChevronDown size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 mb-5">
            <div>
              <p className="font-medium mb-1">Date Range</p>
              <div className="relative">
                <input
                  type="text"
                  className="border border-gray-400 p-2 rounded-md w-full pr-10 "
                  value={`${format(range[0].startDate, "dd MMM yyyy")} - ${format(range[0].endDate, "dd MMM yyyy")}`}
                  readOnly
                  onClick={() => setShowCalendar(!showCalendar)}
                />
                <FaCalendarAlt className="absolute right-3 top-3 text-black " 
                onClick={() => setShowCalendar(!showCalendar)} />
              </div>
              {showCalendar && (
                <div className="absolute z-10 bg-white shadow-lg p-2 rounded-md mt-2 ">
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setRange([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={range}
                  />
                </div>
              )}
            </div>

            <div>
              <p className="font-medium mb-1">Medicine Group</p>
              <select className="border border-gray-400 p-2 rounded-md w-full">
                <option>- Select Group -</option>
              </select>
            </div>

            <div>
              <p className="font-medium mb-1">User Name</p>
              <select className="border border-gray-400 p-2 rounded-md w-full">
                <option>- Select User Name -</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start p-4 gap-6">
            <div className="bg-white shadow-md rounded-md p-4 border border-gray-400 w-full md:w-2/3">
              <h3 className="font-light text-lg">Sales Made</h3>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={data}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#6b46c1"
                    strokeWidth={2}
                    fillOpacity={0.3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white shadow-md rounded-md p-4 border border-gray-400 w-full md:w-1/3 overflow-auto max-h-[400px]">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-400">
                    <th className="text-left p-2">Order ID</th>
                    <th className="text-left p-2">Date & Time</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className="border-b border-gray-300">
                      <td className="p-2">{order.id}</td>
                      <td className="p-2">{order.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>     
      </div>
    </div>
  );
}

export default Report;
