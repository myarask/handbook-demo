import { Suspense } from "react";
import { ProductPreview } from "./components/ProductPreview";
import ErrorBoundary from "../../components/ErrorBoundary";
import { useShop } from "./controllers/state";
import { ProductListSearch } from "./components/ProductListSearch";
import { ProductListResults } from "./components/ProductListResults";
import { ProductListPagination } from "./components/ProductListPagination";
import { BuyNowModal } from "./components/BuyNowModal";

export const ShopLayout = () => {
  const previewProductId = useShop((state) => state.previewProductId);

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
            <ProductListPagination />
          </tfoot>
        </table>
      </span>
      {previewProductId && (
        <ErrorBoundary fallback="Product Preview not available">
          <Suspense>
            <ProductPreview />
          </Suspense>
        </ErrorBoundary>
      )}
      <ErrorBoundary fallback="Buy Now not available">
        <Suspense>
          <BuyNowModal />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default ShopLayout;
