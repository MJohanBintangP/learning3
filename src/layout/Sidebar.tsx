import { NavLink } from "react-router-dom";
import {
  Users,
  ScrollText,
  CreditCardIcon,
  LayoutDashboard,
  TrendingUp,
  Wallet,
  Settings,
  LogOut,
  HelpCircle,
  LucideChevronLeft,
} from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [Open, setOpen] = useState(false);

  return (
    <nav
      className={`transition-all duration-200 bg-[#070A13] flex flex-col min-h-screen border-r border-r-white/15 ${
        Open ? "w-14" : "w-67"
      }`}
    >
      <div className="flex items-center justify-between border-b border-b-white/15 p-4">
        <h1
          className={`text-white font-semibold text-xl ${
            Open ? "hidden" : "block"
          }`}
        >
          mjohanbintangp
        </h1>
        <button
          className={`hover:bg-[#151B28] cursor-pointer rounded-lg p-1 ${
            Open ? "rotate-180" : "rotate-0"
          }`}
          onClick={() => setOpen(!Open)}
        >
          <LucideChevronLeft size={18} color="gray" />
        </button>
      </div>
      <div className="flex flex-col justify-between flex-1">
        {/* top nav */}
        <div className="flex flex-col gap-2 p-4">
          <NavLink
            className={({ isActive }) =>
              `flex items-center w-full gap-3 ${
                Open ? "px-2 py-2 justify-center" : "px-3 py-2"
              } rounded-xl  ${
                isActive
                  ? "bg-[#151B28] text-[#13A87F]"
                  : "hover:text-white hover:bg-[#151B28] text-[#94A3B8] bg-none"
              }`
            }
            to="/"
            title="Dashboard"
          >
            <LayoutDashboard size={18} />
            <span className={Open ? "hidden" : "block"}>Dashboard</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center w-full gap-3 rounded-xl ${
                Open ? "px-2 py-2 justify-center" : "px-3 py-2"
              } ${
                isActive
                  ? "bg-[#151B28] text-[#13A87F]"
                  : "hover:text-white hover:bg-[#151B28] text-[#94A3B8] bg-none"
              }`
            }
            to="/accounts"
            title="Accounts"
          >
            <Wallet size={18} />
            <span className={Open ? "hidden" : "block"}>Accounts</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center w-full gap-3 rounded-xl ${
                Open ? "px-2 py-2 justify-center" : "px-3 py-2"
              } ${
                isActive
                  ? "bg-[#151B28] text-[#13A87F]"
                  : "hover:text-white hover:bg-[#151B28] text-[#94A3B8] bg-none"
              }`
            }
            to="/transactions"
            title="Transactions"
          >
            <CreditCardIcon size={18} />
            <span className={Open ? "hidden" : "block"}>Transactions</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center w-full gap-3 rounded-xl ${
                Open ? "px-2 py-2 justify-center" : "px-3 py-2"
              } ${
                isActive
                  ? "bg-[#151B28] text-[#13A87F]"
                  : "hover:text-white hover:bg-[#151B28] text-[#94A3B8] bg-none"
              }`
            }
            to="/analytic"
            title="Analytic"
          >
            <TrendingUp size={18} />
            <span className={Open ? "hidden" : "block"}>Analytic</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center w-full gap-3 rounded-xl ${
                Open ? "px-2 py-2 justify-center" : "px-3 py-2"
              } ${
                isActive
                  ? "bg-[#151B28] text-[#13A87F]"
                  : "hover:text-white hover:bg-[#151B28] text-[#94A3B8] bg-none"
              }`
            }
            to="/Invoices"
            title="Invoices"
          >
            <ScrollText size={18} />
            <span className={Open ? "hidden" : "block"}>Invoices</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center w-full gap-3 rounded-xl ${
                Open ? "px-2 py-2 justify-center" : "px-3 py-2"
              } ${
                isActive
                  ? "bg-[#151B28] text-[#13A87F]"
                  : "hover:text-white hover:bg-[#151B28] text-[#94A3B8] bg-none"
              }`
            }
            to="/clients"
            title="Clients"
          >
            <Users size={18} />
            <span className={Open ? "hidden" : "block"}>Clients</span>
          </NavLink>
        </div>

        {/* bottom nav */}
        <div className="flex flex-col gap-3 border-t border-t-white/15 p-4">
          <NavLink
            className={({ isActive }) =>
              `flex items-center w-full gap-3 rounded-xl ${
                Open ? "px-2 py-2 justify-center" : "px-3 py-2"
              } ${
                isActive
                  ? "bg-[#151B28] text-[#13A87F]"
                  : "hover:text-white hover:bg-[#151B28] text-[#94A3B8] bg-none"
              }`
            }
            to="/settings"
            title="Settings"
          >
            <Settings size={18} />
            <span className={Open ? "hidden" : "block"}>Setting</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center w-full gap-3 rounded-xl ${
                Open ? "px-2 py-2 justify-center" : "px-3 py-2"
              } ${
                isActive
                  ? "bg-[#151B28] text-[#13A87F]"
                  : "hover:text-white hover:bg-[#151B28] text-[#94A3B8] bg-none"
              }`
            }
            to="/help"
            title="Help"
          >
            <HelpCircle size={18} />
            <span className={Open ? "hidden" : "block"}>Help</span>
          </NavLink>
          <NavLink
            className={`text-red-500 font-medium flex items-center gap-3 ${
              Open ? "px-2 py-2 justify-center" : "px-3 py-2"
            }
              `}
            to="/"
            title="LogOut"
          >
            <LogOut size={18} />
            <span className={Open ? "hidden" : "block"}>LogOut</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
