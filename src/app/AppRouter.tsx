import { Route, Routes } from "react-router";
import { ShopPage } from "../pages/Shop/ShopPage";
import { AppLayout } from "./AppLayout";
import { Home } from "../pages/Home/Home";
import { OrderConfirmationPage } from "../pages/OrderConfirmation/OrderConfirmationPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="order-confirmation" element={<OrderConfirmationPage />} />
      </Route>
    </Routes>
  );
};
