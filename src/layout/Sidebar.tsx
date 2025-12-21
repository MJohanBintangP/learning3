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
} from "lucide-react";

export default function Sidebar() {
  return (
    <nav className="bg-[#070A13] flex flex-col w-72 min-h-screen border-r border-r-white/15">
      <h1 className="text-white font-medium text-xl border-b border-b-white/15 p-4">
        nigugus
      </h1>
      <div className="flex flex-col justify-between flex-1">
        {/* top nav */}
        <div className="flex flex-col gap-3 p-4">
          <NavLink
            className={({ isActive }) =>
              `flex items-center w-full gap-3 px-3 py-2 rounded-xl ${
                isActive
                  ? "bg-[#151B28] text-[#13A87F]"
                  : "text-[#94A3B8] bg-none"
              }`
            }
            to="/"
          >
            <LayoutDashboard size={18} />
            Dashboard
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center w-full gap-3 px-3 py-2 rounded-xl ${
                isActive
                  ? "bg-[#151B28] text-[#13A87F]"
                  : "text-[#94A3B8] bg-none"
              }`
            }
            to="/accounts"
          >
            <Wallet size={18} />
            Accounts
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center w-full gap-3 px-3 py-2 rounded-xl ${
                isActive
                  ? "bg-[#151B28] text-[#13A87F]"
                  : "text-[#94A3B8] bg-none"
              }`
            }
            to="/transactions"
          >
            <CreditCardIcon size={18} />
            Transactions
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center w-full gap-3 px-3 py-2 rounded-xl ${
                isActive
                  ? "bg-[#151B28] text-[#13A87F]"
                  : "text-[#94A3B8] bg-none"
              }`
            }
            to="/analytic"
          >
            <TrendingUp size={18} />
            Analytic
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center w-full gap-3 px-3 py-2 rounded-xl ${
                isActive
                  ? "bg-[#151B28] text-[#13A87F]"
                  : "text-[#94A3B8] bg-none"
              }`
            }
            to="/Invoices"
          >
            <ScrollText size={18} />
            Invoices
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center w-full gap-3 px-3 py-2 rounded-xl ${
                isActive
                  ? "bg-[#151B28] text-[#13A87F]"
                  : "text-[#94A3B8] bg-none"
              }`
            }
            to="/clients"
          >
            <Users size={18} />
            Clients
          </NavLink>
        </div>

        {/* bottom nav */}
        <div className="flex flex-col gap-3 border-t border-t-white/15 p-4">
          <NavLink
            className={({ isActive }) =>
              `flex items-center w-full gap-3 px-3 py-2 rounded-xl ${
                isActive
                  ? "bg-[#151B28] text-[#13A87F]"
                  : "text-[#94A3B8] bg-none"
              }`
            }
            to="/settings"
          >
            <Settings size={18} />
            Setting
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center w-full gap-3 px-3 py-2 rounded-xl ${
                isActive
                  ? "bg-[#151B28] text-[#13A87F]"
                  : "text-[#94A3B8] bg-none"
              }`
            }
            to="/help"
          >
            <HelpCircle size={18} />
            Help
          </NavLink>
          <NavLink
            className="text-red-500 font-medium flex items-center gap-3 px-3 py-2"
            to="/"
          >
            <LogOut size={18} />
            LogOut
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
