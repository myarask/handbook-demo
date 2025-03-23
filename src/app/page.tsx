import { Routes, Route, NavLink } from "react-router";
import { Home } from "../pages/Home/Home";
import { MissionLauncher } from "../pages/Mission/MissionLauncher";
import { ProductListPage } from "../pages/ProductList/ProductListPage";

export const App = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/mission">Last Mission</NavLink>
        <NavLink to="/products">Products</NavLink>
      </nav>

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="mission" element={<MissionLauncher />} />
        <Route path="products" element={<ProductListPage />} />
      </Routes>
    </>
  );
};
