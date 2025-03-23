import { Outlet } from "react-router";
import { AppNavigation } from "./components/Navigation";

export const AppLayout = () => {
  return (
    <div>
      <AppNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
