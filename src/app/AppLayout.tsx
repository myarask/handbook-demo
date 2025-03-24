import { NavLink, Outlet } from "react-router";

export const AppLayout = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
