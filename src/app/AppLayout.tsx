import { Link, Outlet } from "react-router";
import { paths } from "./AppRouter.constants";

export const AppLayout = () => {
  return (
    <div>
      {/* Navigation */}
      <nav>
        <Link to={paths.home}>Home</Link>
        <Link to={paths.shop}>Shop</Link>
      </nav>
      {/* Main content */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};
