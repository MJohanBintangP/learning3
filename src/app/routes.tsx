import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../components/Dashboard";
import Account from "../components/Accounts";
import Transactions from "../components/Transactions";
import Analytic from "../components/Analytic";
import Invoices from "../components/Invoices";
import Clients from "../components/Clients";
import Settings from "../components/Settings";
import Help from "../components/Help";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/accounts" element={<Account />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/analytic" element={<Analytic />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/help" element={<Help />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
