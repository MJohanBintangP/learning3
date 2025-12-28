import { UsersRound } from "lucide-react";

export default function Clients() {
  const data = [
    {
      name: "Acme Corporation",
      email: "contact@acme.com",
      value: "45,200",
      project: "3",
    },
    {
      name: "TechStart Inc",
      email: "hello@techstart.io",
      value: "32,100",
      project: "2",
    },
    {
      name: "Global Systems",
      email: "info@globalsys.com",
      value: "78,500",
      project: "5",
    },
    {
      name: "StartUp Hub",
      email: "team@startuphub.co",
      value: "15,800",
      project: "1",
    },
    {
      name: "Digital Agency",
      email: "hi@digitalagency.com",
      value: "28,900",
      project: "4",
    },
  ];

  const getInitial = (name: string) => {
    return name
      .split(" ")
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  return (
    <section>
      <div className="flex flex-col gap-1 mb-6">
        <h1 className="text-white font-semibold text-xl">Clients</h1>
        <p className="text-[#94A3B8] text-sm">
          Manage your client relationships
        </p>
      </div>
      <div className="rounded-xl bg-[#0B111E] w-full border border-white/15 h-auto p-6">
        <div className="flex items-center gap-2 mb-6">
          <UsersRound size={20} color="white" />
          <h1 className="text-xl text-white font-semibold">All Clients</h1>
        </div>
        <div className="flex flex-col gap-4">
          {data.map((d) => (
            <div
              key={d.name}
              className="bg-[#101523] flex justify-between items-center rounded-xl p-4 w-full h-auto"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-[#151B28] text-white font-semibold p-2">
                  {getInitial(d.name)}
                </div>
                <div className="flex flex-col">
                  <h1 className="text-white font-medium text-md">{d.name}</h1>
                  <h2 className="text-gray-400 font-medium text-sm">
                    {d.email}
                  </h2>
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-white font-medium text-md flex justify-end">
                  ${d.value}
                </h1>
                <h2 className="text-gray-400 font-medium text-sm flex justify-end">
                  {d.project} Project
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
