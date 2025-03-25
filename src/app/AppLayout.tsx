import { NavLink, Outlet } from "react-router";
import { paths } from "./AppRouter.constants";

export const AppLayout = () => {
  return (
    <div>
      {/* Navigation */}
      <nav>
        <NavLink to={paths.home}>Home</NavLink>
        <NavLink to={paths.shop}>Shop</NavLink>
      </nav>
      {/* Main content */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};
