import { lazy, Suspense } from "react";
import ErrorBoundary from "../../components/ErrorBoundary";

const ShopLayout = lazy(() => import("./ShopLayout"));

export const ShopPage = () => {
  return (
    <ErrorBoundary>
      <Suspense>
        <ShopLayout />
      </Suspense>
    </ErrorBoundary>
  );
};
