import { Navigation } from "../components/Navigation";
import { App } from "./page";

export const AppLayout = () => {
  return (
    <div>
      <Navigation />
      <main>
        <App />
      </main>
    </div>
  );
};
