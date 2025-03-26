import { Suspense } from "react";
import { ProductPreview } from "./components/ProductPreview";
import ErrorBoundary from "../../components/ErrorBoundary";
import { useShop } from "./controllers/state";
import { ProductListSearch } from "./components/ProductListSearch";
import { ProductListResults } from "./components/ProductListResults";
import { FirstPageButton } from "./components/pagination/FirstPageButton";
import { PreviousPageButton } from "./components/pagination/PreviousPageButton";
import { NextPageButton } from "./components/pagination/NextPageButton";
import { CurrentPage } from "./components/pagination/CurrentPage";
import { LastPageButton } from "./components/pagination/LastPageButton";
import { PlaceOrderModal } from "./components/PlaceOrderModal";

export const ShopLayout = () => {
  const hasShownInterest = useShop((state) => state.reviewing.hasShownInterest);

  return (
    <div style={{ display: "flex" }}>
      <span>
        <ProductListSearch />
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <ProductListResults />
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>
                <FirstPageButton />
                <PreviousPageButton />
                <CurrentPage />
                <NextPageButton />
                <LastPageButton />
              </td>
            </tr>
          </tfoot>
        </table>
      </span>
      {hasShownInterest && (
        <ErrorBoundary fallback="Product preview is currently not available">
          <Suspense>
            <ProductPreview />
          </Suspense>
        </ErrorBoundary>
      )}
      {/* Modals */}
      <ErrorBoundary fallback="Order placement is currently not available">
        <Suspense>
          <PlaceOrderModal />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default ShopLayout;
