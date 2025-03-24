import { NavLink, Outlet } from "react-router";
import { RoutePath } from "./AppRouter.constants";

export const AppLayout = () => {
  return (
    <div>
      {/* Navigation */}
      <nav>
        <NavLink to={RoutePath.home}>Home</NavLink>
        <NavLink to={RoutePath.shop}>Shop</NavLink>
      </nav>
      {/* Main content */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};
