import { DollarSign } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";

export default function Dashboard() {
  const headerCard = [
    {
      title: "Total Revenue",
      value: "845,231",
      percentage: "12.5",
      icon: <DollarSign />,
    },
    {
      title: "Active Users",
      value: "32,110",
      percentage: "8.1",
      icon: <DollarSign />,
    },
    {
      title: "New Orders",
      value: "1,284",
      percentage: "5.6",
      icon: <DollarSign />,
    },
    {
      title: "Refunds",
      value: "210",
      percentage: "-1.2",
      icon: <DollarSign />,
    },
  ];

  const chartData = [
    { month: "Jan", revenue: 42000, expenses: 28000 },
    { month: "Feb", revenue: 48500, expenses: 30000 },
    { month: "Mar", revenue: 51000, expenses: 29000 },
    { month: "Apr", revenue: 54500, expenses: 33000 },
    { month: "May", revenue: 57000, expenses: 32000 },
    { month: "Jun", revenue: 61000, expenses: 34500 },
    { month: "Jul", revenue: 66000, expenses: 37000 },
    { month: "Aug", revenue: 70000, expenses: 40000 },
    { month: "Sep", revenue: 76000, expenses: 42000 },
    { month: "Oct", revenue: 80000, expenses: 44000 },
    { month: "Nov", revenue: 85500, expenses: 47000 },
    { month: "Dec", revenue: 92000, expenses: 51000 },
  ];

  const currencyTick = (v: number) => `$${(v / 1000).toFixed(0)}k`;

  const expenseData = [
    { name: "Software", value: 35 },
    { name: "Marketing", value: 25 },
    { name: "Operations", value: 20 },
    { name: "Salaries", value: 15 },
    { name: "Other", value: 5 },
  ];

  const EXPENSE_COLORS = [
    "#22d3a6",
    "#3b82f6",
    "#fbbf24",
    "#a855f7",
    "#64748b",
  ];

  const topClientsData = [
    {
      rank: 1,
      name: "Acme Corporation",
      revenue: "$45,000",
      percentage: "+12%",
    },
    { rank: 2, name: "TechStart Inc.", revenue: "$32,000", percentage: "+8%" },
    {
      rank: 3,
      name: "Global Solutions",
      revenue: "$28,000",
      percentage: "-3%",
    },
    { rank: 4, name: "Innovate Labs", revenue: "$21,000", percentage: "+15%" },
  ];

  const transactionsData = [
    {
      id: "TXN001",
      name: "Payment from Acme Corp",
      category: "Invoice",
      date: "Dec 8, 2024",
      status: "completed",
      amount: 12500,
      type: "income",
    },
    {
      id: "TXN002",
      name: "AWS Cloud Services",
      category: "Software",
      date: "Dec 7, 2024",
      status: "completed",
      amount: 2340,
      type: "expense",
    },
    {
      id: "TXN003",
      name: "Consulting fee - Project Alpha",
      category: "Services",
      date: "Dec 6, 2024",
      status: "completed",
      amount: 8750,
      type: "income",
    },
    {
      id: "TXN004",
      name: "Office supplies",
      category: "Operations",
      date: "Dec 5, 2024",
      status: "completed",
      amount: 456,
      type: "expense",
    },
    {
      id: "TXN005",
      name: "Client retainer - TechStart",
      category: "Retainer",
      date: "Dec 4, 2024",
      status: "pending",
      amount: 5000,
      type: "income",
    },
    {
      id: "TXN006",
      name: "Marketing campaign",
      category: "Marketing",
      date: "Dec 3, 2024",
      status: "completed",
      amount: 3200,
      type: "expense",
    },
  ];

  return (
    <section className="">
      <div className="flex flex-col gap-1 mb-6">
        <h1 className="text-white font-semibold text-xl">Dashboard Overview</h1>
        <p className="text-[#94A3B8] text-sm">
          Welcome back! Here's your financial summary.
        </p>
      </div>

      <div className="flex flex-row items-center gap-6 justify-between">
        {headerCard.map((h, idx) => (
          <div
            key={`${h.title}-${idx}`}
            className="flex flex-row justify-between w-full p-5 rounded-xl bg-[#0B0F1C] border border-white/5"
          >
            <div className="flex flex-col gap-4">
              <h1 className="text-gray-400 text-sm">{h.title}</h1>
              <h2 className="text-white font-semibold text-3xl">${h.value}</h2>
              <p
                className={`text-xs ${
                  parseFloat(h.percentage) >= 0
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {parseFloat(h.percentage) >= 0 ? "+" : ""}
                {h.percentage}%{" "}
                <span className="text-gray-400">vs last month</span>
              </p>
            </div>
            <div className="h-fit w-fit rounded-xl p-2 text-green-600 bg-[#0B3130]">
              {h.icon}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl bg-[#0B0F1C] border border-white/5 p-6">
        <div className="mb-4">
          <h2 className="text-white font-semibold text-lg">
            Revenue vs Expenses
          </h2>
          <p className="text-[#94A3B8] text-sm">Monthly comparison for 2024</p>
        </div>

        <div className="h-96 w-full">
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart
              data={chartData}
              margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="revGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22d3a6" stopOpacity={0.25} />
                  <stop offset="100%" stopColor="#22d3a6" stopOpacity={0.05} />
                </linearGradient>
                <linearGradient id="expGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f87171" stopOpacity={0.22} />
                  <stop offset="100%" stopColor="#f87171" stopOpacity={0.04} />
                </linearGradient>
              </defs>

              <CartesianGrid
                stroke="#1f2937"
                strokeDasharray="3 3"
                vertical={false}
              />
              <XAxis
                dataKey="month"
                stroke="#94A3B8"
                tick={{ fill: "#94A3B8" }}
              />
              <YAxis
                stroke="#94A3B8"
                tick={{ fill: "#94A3B8" }}
                tickFormatter={currencyTick}
                domain={[0, 100000]}
              />
              <Tooltip
                contentStyle={{
                  background: "#0F172A",
                  border: "1px solid #1f2937",
                }}
                labelStyle={{ color: "#e2e8f0" }}
                formatter={(value: number | string | undefined) => [
                  `$${Number(value ?? 0).toLocaleString()}`,
                  "",
                ]}
              />
              <Legend
                verticalAlign="top"
                align="right"
                wrapperStyle={{ paddingBottom: 12, color: "#e2e8f0" }}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                name="Revenue"
                stroke="#22d3a6"
                strokeWidth={2.5}
                fill="url(#revGradient)"
              />
              <Area
                type="monotone"
                dataKey="expenses"
                name="Expenses"
                stroke="#f87171"
                strokeWidth={2.5}
                fill="url(#expGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-6">
        {/* Expense Breakdown */}
        <div className="rounded-2xl bg-[#0B0F1C] border border-white/5 p-6">
          <div className="mb-6">
            <h2 className="text-white font-semibold text-lg">
              Expense Breakdown
            </h2>
            <p className="text-[#94A3B8] text-sm">Current month distribution</p>
          </div>

          <div className="flex items-center gap-8">
            <div className="h-64 w-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={expenseData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {expenseData.map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={EXPENSE_COLORS[index]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: "#0F172A",
                      border: "1px solid #1f2937",
                    }}
                    labelStyle={{ color: "#e2e8f0" }}
                    formatter={(value) => [`${value}%`, "Percentage"]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="flex flex-col gap-3">
              {expenseData.map((item, idx) => (
                <div key={item.name} className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: EXPENSE_COLORS[idx] }}
                  />
                  <span className="text-[#94A3B8] text-sm">{item.name}</span>
                  <span className="text-white font-semibold text-sm ml-auto">
                    {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Clients */}
        <div className="rounded-2xl bg-[#0B0F1C] border border-white/5 p-6">
          <div className="mb-6">
            <h2 className="text-white font-semibold text-lg">Top Clients</h2>
            <p className="text-[#94A3B8] text-sm">By revenue this quarter</p>
          </div>

          <div className="space-y-4">
            {topClientsData.map((client) => (
              <div
                key={client.rank}
                className="flex items-center justify-between p-4 rounded-lg bg-[#0F172A]/50 hover:bg-[#0F172A] transition"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 font-semibold text-sm">
                    {client.rank}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-white font-semibold text-sm">
                      {client.name}
                    </h3>
                    <p className="text-[#94A3B8] text-xs">{client.revenue}</p>
                  </div>
                </div>
                <span
                  className={`text-sm font-semibold ${
                    client.percentage.startsWith("+")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {client.percentage}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="mt-8 rounded-2xl bg-[#0B0F1C] border border-white/5 p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-white font-semibold text-lg">
              Recent Transactions
            </h2>
            <p className="text-[#94A3B8] text-sm">Latest financial activity</p>
          </div>
          <a
            href="#"
            className="text-teal-400 hover:text-teal-300 text-sm font-semibold"
          >
            View all
          </a>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/5">
                <th className="px-4 py-4 text-left text-[#64748b] text-xs font-semibold tracking-wider">
                  TRANSACTION
                </th>
                <th className="px-4 py-4 text-left text-[#64748b] text-xs font-semibold tracking-wider">
                  CATEGORY
                </th>
                <th className="px-4 py-4 text-left text-[#64748b] text-xs font-semibold tracking-wider">
                  DATE
                </th>
                <th className="px-4 py-4 text-left text-[#64748b] text-xs font-semibold tracking-wider">
                  STATUS
                </th>
                <th className="px-4 py-4 text-right text-[#64748b] text-xs font-semibold tracking-wider">
                  AMOUNT
                </th>
              </tr>
            </thead>
            <tbody>
              {transactionsData.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="border-b border-white/5 hover:bg-[#0F172A]/50 transition"
                >
                  <td className="px-4 py-5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          transaction.type === "income"
                            ? "bg-teal-500/20 text-teal-400"
                            : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {transaction.type === "income" ? (
                          <ArrowUpRight size={16} />
                        ) : (
                          <ArrowDownLeft size={16} />
                        )}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm">
                          {transaction.name}
                        </h4>
                        <p className="text-[#64748b] text-xs">
                          {transaction.id}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-5">
                    <span className="text-[#94A3B8] text-sm">
                      {transaction.category}
                    </span>
                  </td>
                  <td className="px-4 py-5">
                    <span className="text-[#94A3B8] text-sm">
                      {transaction.date}
                    </span>
                  </td>
                  <td className="px-4 py-5">
                    <span
                      className={`inline-block px-3 py-1 rounded text-xs font-semibold ${
                        transaction.status === "completed"
                          ? "bg-teal-500/20 text-teal-400"
                          : "bg-amber-500/20 text-amber-400"
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                  <td className="px-4 py-5 text-right">
                    <span
                      className={`font-semibold text-sm ${
                        transaction.type === "income"
                          ? "text-teal-400"
                          : "text-red-400"
                      }`}
                    >
                      {transaction.type === "income" ? "+" : "-"}$
                      {transaction.amount.toLocaleString()}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
