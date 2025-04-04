import { lazy, Suspense } from "react";
import ErrorBoundary from "../../components/ErrorBoundary";

const Layout = lazy(() => import("./ShopLayout"));

export const ShopPage = () => {
  return (
    <ErrorBoundary fallback="Shop not available">
      <Suspense>
        <Layout />
      </Suspense>
    </ErrorBoundary>
  );
};
