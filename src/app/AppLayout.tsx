import { NavLink, Outlet } from "react-router";

export const AppLayout = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/mission">Last Mission</NavLink>
        <NavLink to="/products">Products</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
