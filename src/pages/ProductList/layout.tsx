import { ProductList } from "./components/ProductList";

export const ProductListLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <span>
        <ProductList />
      </span>
      <span>(ProductPreview)</span>
    </div>
  );
};

export default ProductListLayout;
