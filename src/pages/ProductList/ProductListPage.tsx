import { lazy, Suspense } from "react";
import ErrorBoundary from "../../components/ErrorBoundary";

const ProductListLayout = lazy(() => import("./layout"));

export const ProductListPage = () => {
  return (
    <ErrorBoundary>
      <Suspense>
        <ProductListLayout />
      </Suspense>
    </ErrorBoundary>
  );
};
