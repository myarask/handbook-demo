import { lazy, Suspense } from "react";
import ErrorBoundary from "../../components/ErrorBoundary";

const ProductListLayout = lazy(() => import("./components/ProductListLayout"));

export const ProductListPage = () => {
  return (
    <ErrorBoundary>
      <Suspense>
        <ProductListLayout />
      </Suspense>
    </ErrorBoundary>
  );
};
