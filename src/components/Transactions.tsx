import { ArrowUpRight, ArrowDownLeft } from "lucide-react";

export default function Transactions() {
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
    <section>
      <div className="flex flex-col gap-1 mb-6">
        <h1 className="text-white font-semibold text-xl">Transactions</h1>
        <p className="text-[#94A3B8] text-sm">
          View and manage all transactions
        </p>
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
