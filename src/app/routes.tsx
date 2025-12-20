import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../components/Dashboard";
import Account from "../components/Account";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/accounts" element={<Account />} />
        <Route path="/transactions" element={<Dashboard />} />
        <Route path="/analytic" element={<Dashboard />} />
        <Route path="/invoices" element={<Dashboard />} />
        <Route path="/client" element={<Dashboard />} />
        <Route path="/setting" element={<Dashboard />} />
        <Route path="/help" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
