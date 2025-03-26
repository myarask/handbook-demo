import { Suspense } from "react";
import { Preview } from "./components/Preview";
import ErrorBoundary from "../../components/ErrorBoundary";
import { useShop } from "./ShopState";
import { SearchInput } from "./components/SearchInput";
import { SearchResults } from "./components/SearchResults/SearchResults";
import { FirstPageButton } from "./components/Pagination/FirstPageButton";
import { PreviousPageButton } from "./components/Pagination/PreviousPageButton";
import { NextPageButton } from "./components/Pagination/NextPageButton";
import { CurrentPage } from "./components/Pagination/CurrentPage";
import { LastPageButton } from "./components/Pagination/LastPageButton";
import { OrderModal } from "./components/OrderModal/OrderModal";

export const ShopLayout = () => {
  const hasShownInterest = useShop((state) => state.preview.isOpen);

  return (
    <div style={{ display: "flex" }}>
      <span>
        <label>
          Search
          <SearchInput />
        </label>
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
            <SearchResults />
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
            <Preview />
          </Suspense>
        </ErrorBoundary>
      )}
      {/* Modals */}
      <ErrorBoundary fallback="Order placement is currently not available">
        <Suspense>
          <OrderModal />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default ShopLayout;
