import { lazy, Suspense } from "react";
import ErrorBoundary from "../../components/ErrorBoundary";

const ProductListLayout = lazy(() => import("./ProductListLayout"));

export const ProductListPage = () => {
  return (
    <ErrorBoundary>
      <Suspense>
        <ProductListLayout />
      </Suspense>
    </ErrorBoundary>
  );
};
