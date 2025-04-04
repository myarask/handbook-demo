import { Route, Routes } from "react-router";
import { ShopPage } from "../pages/Shop/ShopPage";
import { AppLayout } from "./AppLayout";
import { Home } from "../pages/Home/Home";
import { OrderConfirmationPage } from "../pages/OrderConfirmation/OrderConfirmationPage";
import { paths } from "./AppRouter.constants";

export const AppRouter = () => (
  <Routes>
    <Route element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path={paths.shop} element={<ShopPage />} />
      <Route
        path={paths.order.confirmation}
        element={<OrderConfirmationPage />}
      />
    </Route>
  </Routes>
);
