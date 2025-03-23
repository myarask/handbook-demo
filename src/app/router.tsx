import { Route, Routes } from "react-router";
import { Home } from "../pages/Home/Home";
import { MissionLauncher } from "../pages/Mission/MissionLauncher";
import { ProductListPage } from "../pages/ProductList/ProductListPage";
import { AppLayout } from "./layout";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="mission" element={<MissionLauncher />} />
        <Route path="products" element={<ProductListPage />} />
      </Route>
    </Routes>
  );
};
