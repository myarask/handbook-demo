import { Suspense } from "react";
import { ProductList } from "./components/ProductList";
import { ProductPreview } from "./components/ProductPreview";
import ErrorBoundary from "../../components/ErrorBoundary";
import { useProductList } from "./controllers/state";

export const ProductListLayout = () => {
  const previewProductId = useProductList((state) => state.previewProductId);
  return (
    <div style={{ display: "flex" }}>
      <span>
        <ProductList />
      </span>
      {previewProductId && (
        <span>
          <ErrorBoundary>
            <Suspense>
              <ProductPreview />
            </Suspense>
          </ErrorBoundary>
        </span>
      )}
    </div>
  );
};

export default ProductListLayout;
