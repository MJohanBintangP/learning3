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

export default function Analytic() {
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

  return (
    <section>
      <div className="flex flex-col gap-1 mb-6">
        <h1 className="text-white font-semibold text-xl">Analytic</h1>
        <p className="text-[#94A3B8] text-sm">Financial insights and reports</p>
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
    </section>
  );
}
