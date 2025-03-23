import { Suspense } from "react";
import { Outlet } from "react-router";
import ErrorBoundary from "../../components/ErrorBoundary";

export const ProductListLoader = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </ErrorBoundary>
  );
};
