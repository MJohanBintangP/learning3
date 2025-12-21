import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="p-4 flex-1 bg-[#080C16] h-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
