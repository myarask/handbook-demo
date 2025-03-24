import { Route, Routes } from "react-router";
import { ShopPage } from "../pages/Shop/ShopPage";
import { AppLayout } from "./AppLayout";
import { AppPage } from "./AppPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<AppPage />} />
        <Route path="products" element={<ShopPage />} />
      </Route>
    </Routes>
  );
};
