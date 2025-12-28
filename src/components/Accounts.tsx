import { Building2Icon, CreditCard, PiggyBank, Wallet } from "lucide-react";

export default function Accounts() {
  const cards = [
    {
      title: "Main Checking",
      value: "45,230.50",
      desc: "Checking • Active",
      icon: <Wallet size={20} />,
    },
    {
      title: "Business Savings",
      value: "128,450.00",
      desc: "Savings • Active",
      icon: <PiggyBank size={20} />,
    },
    {
      title: "Credit Card",
      value: "2,340.00",
      desc: "Credit • Active",
      icon: <CreditCard size={20} />,
    },
    {
      title: "Investment Account",
      value: "89,120.75",
      desc: "Investment • Active",
      icon: <Building2Icon size={20} />,
    },
  ];

  return (
    <section>
      <div className="flex flex-col gap-1 mb-6">
        <h1 className="text-white font-semibold text-xl">Accounts</h1>
        <p className="text-[#94A3B8] text-sm">Manage your financial accounts</p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {cards.map((c) => (
          <div className="bg-[#0B111E] rounded-2xl p-6 w-full border border-white/15">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <h1 className="text-white text-sm font-medium mb-3">
                  {c.title}
                </h1>
                <h3 className="text-white font-semibold text-2xl mb-2">
                  ${c.value}
                </h3>
                <p className="text-gray-400 text-xs">{c.desc}</p>
              </div>
              <div className="text-gray-400">{c.icon}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
