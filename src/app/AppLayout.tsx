import { NavLink, Outlet } from "react-router";

export const AppLayout = () => {
  return (
    <div>
      {/* Navigation */}
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Products</NavLink>
      </nav>
      {/* Main content */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};
