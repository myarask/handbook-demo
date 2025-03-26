import { useProductListQuery } from "../hooks/useProductListQuery";
import { usePrevious } from "../hooks/usePrevious";
import { Product } from "../types/Product.types";
import { placeOrder, reviewProduct } from "../controllers/actions";

const FullRow = ({ children }: { children: React.ReactNode }) => (
  <tr>
    <td colSpan={4}>{children}</td>
  </tr>
);

const ProductRow = (product: Product) => {
  return (
    <tr key={product.id} onMouseEnter={() => reviewProduct(product)}>
      <td>{product.title}</td>
      <td>{product.category}</td>
      <td>{product.price}</td>
      <td>
        <button onClick={placeOrder}>Place Order</button>
      </td>
    </tr>
  );
};

export const SearchResults = () => {
  const { data, error } = useProductListQuery();
  const previousData = usePrevious(data);

  if (error) return <FullRow>Can't get product now</FullRow>;
  if (data && data.products.length === 0) return <FullRow>No Results</FullRow>;
  if (data) return <>{data.products.map(ProductRow)}</>;
  if (previousData) return <>{previousData.products.map(ProductRow)}</>;

  return <FullRow>Loading...</FullRow>;
};
