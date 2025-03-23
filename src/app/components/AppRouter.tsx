import { Route, Routes } from "react-router";
import { MissionLauncher } from "../../pages/Mission/MissionLauncher";
import { ProductListPage } from "../../pages/ProductList/ProductListPage";
import { AppLayout } from "../layout";
import { AppPage } from "../page";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<AppPage />} />
        <Route path="mission" element={<MissionLauncher />} />
        <Route path="products" element={<ProductListPage />} />
      </Route>
    </Routes>
  );
};
