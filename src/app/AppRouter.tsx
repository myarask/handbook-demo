import { Route, Routes } from "react-router";
import { ShopPage } from "../pages/Shop/ShopPage";
import { AppLayout } from "./AppLayout";
import { Home } from "../pages/Home/Home";
import { OrderConfirmationPage } from "../pages/OrderConfirmation/OrderConfirmationPage";
import { RoutePath } from "./AppRouter.constants";

export const AppRouter = () => (
  <Routes>
    <Route element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path={RoutePath.shop} element={<ShopPage />} />
      <Route
        path={RoutePath.orderConfirmation}
        element={<OrderConfirmationPage />}
      />
    </Route>
  </Routes>
);
