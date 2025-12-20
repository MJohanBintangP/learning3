import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <nav className="w-52 min-h-screen bg-white border-r-2 border-r-gray-300">
      <div className="flex flex-col gap-4">
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/accounts">Account</NavLink>
      </div>
    </nav>
  );
}
