import { ScrollText } from "lucide-react";

type InvoiceStatus = "Paid" | "Pending" | "Overdue";

type Invoice = {
  id: string;
  name: string;
  value: string;
  date: string;
  status: InvoiceStatus;
};

export default function Invoices() {
  const data: Invoice[] = [
    {
      id: "INV-001",
      name: "Acme Corp",
      value: "5,200",
      date: "Dec 15, 2024",
      status: "Paid",
    },
    {
      id: "INV-002",
      name: "TechStart Inc",
      value: "3,800",
      date: "Dec 12, 2024",
      status: "Pending",
    },
    {
      id: "INV-003",
      name: "Global Systems",
      value: "12,500",
      date: "Dec 10, 2024",
      status: "Paid",
    },
    {
      id: "INV-004",
      name: "StartUp Hub",
      value: "2,100",
      date: "Dec 05, 2024",
      status: "Overdue",
    },
    {
      id: "INV-005",
      name: "Digital Agency",
      value: "8,900",
      date: "Dec 01, 2024",
      status: "Pending",
    },
  ];

  const statusStyle = {
    Paid: "bg-green-400 text-black",
    Overdue: " bg-[#DC2828] text-white",
    Pending: "bg-[#171D2C] text-white",
  };

  return (
    <section>
      <div className="flex flex-col gap-1 mb-6">
        <h1 className="text-white font-semibold text-xl">Invoices</h1>
        <p className="text-[#94A3B8] text-sm">
          Manage your invoices and billing
        </p>
      </div>
      <div className="rounded-xl bg-[#0B111E] w-full border border-white/15 h-auto p-6">
        <div className="flex items-center gap-2 mb-6">
          <ScrollText size={20} color="white" />
          <h1 className="text-xl text-white font-semibold">Recent Invoices</h1>
        </div>
        <div className="flex flex-col gap-4">
          {data.map((d) => (
            <div
              key={d.id}
              className="bg-[#101523] flex justify-between items-center rounded-xl p-4 w-full h-auto"
            >
              <div className="flex flex-col">
                <h1 className="text-white font-medium text-md">{d.id}</h1>
                <h2 className="text-gray-400 font-medium text-sm">{d.name}</h2>
              </div>
              <div className="flex flex-col">
                <h1 className="text-white font-medium text-md flex justify-end">
                  ${d.value}
                </h1>
                <h2 className="text-gray-400 font-medium text-sm">{d.date}</h2>
              </div>
              <div className="flex flex-col">
                <div
                  className={`rounded-full px-2.5 text-sm font-medium ${
                    statusStyle[d.status]
                  }`}
                >
                  {d.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
