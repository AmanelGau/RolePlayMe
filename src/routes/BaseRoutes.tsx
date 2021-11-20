import { Route, Routes } from "react-router";
import HomePage from "../page/HomePage";
import Expenses from "../page/StatsPage";
import Invoices from "../page/invoices";

const BaseRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />}>
      <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} />
    </Route>
  </Routes>
);

export default BaseRoutes;
