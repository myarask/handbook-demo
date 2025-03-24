import { Suspense } from "react";
import { ProductPreview } from "./components/ProductPreview";
import ErrorBoundary from "../../components/ErrorBoundary";
import { useProductList } from "./controllers/state";
import { ProductListSearch } from "./components/ProductListSearch";
import { ProductListResults } from "./components/ProductListResults";
import { ProductListPagination } from "./components/ProductListPagination";

export const ShopLayout = () => {
  const previewProductId = useProductList((state) => state.previewProductId);

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
        <ErrorBoundary>
          <Suspense>
            <ProductPreview />
          </Suspense>
        </ErrorBoundary>
      )}
    </div>
  );
};

export default ShopLayout;
