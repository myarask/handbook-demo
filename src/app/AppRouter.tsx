import { Route, Routes } from "react-router";
import { ProductListPage } from "../pages/Shop/ProductListPage";
import { AppLayout } from "./AppLayout";
import { AppPage } from "./AppPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<AppPage />} />
        <Route path="products" element={<ProductListPage />} />
      </Route>
    </Routes>
  );
};
