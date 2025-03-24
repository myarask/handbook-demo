import { lazy, Suspense } from "react";
import ErrorBoundary from "../../components/ErrorBoundary";

const Layout = lazy(() => import("./OrderConfirmationLayout"));

export const OrderConfirmationPage = () => {
  return (
    <ErrorBoundary fallback="Order Confirmation not available">
      <Suspense>
        <Layout />
      </Suspense>
    </ErrorBoundary>
  );
};
