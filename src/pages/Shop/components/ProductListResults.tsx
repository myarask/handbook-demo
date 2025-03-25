import { useProductListQuery } from "../hooks/useProductListQuery";
import { usePrevious } from "../hooks/usePrevious";
import { Product } from "../types/Product.types";
import { placeOrder, reviewProduct } from "../controllers/actions";

const FullRow = ({ children }: { children: React.ReactNode }) => (
  <tr>
    <td colSpan={4}>{children}</td>
  </tr>
);

const ProductListItem = (props: Product) => {
  return (
    <tr key={props.id} onMouseEnter={() => reviewProduct(props.id)}>
      <td>{props.title}</td>
      <td>{props.category}</td>
      <td>{props.price}</td>
      <td>
        <button onClick={placeOrder}>Place Order</button>
      </td>
    </tr>
  );
};

export const ProductListResults = () => {
  const { data, error } = useProductListQuery();
  const previousData = usePrevious(data);

  if (error) return <FullRow>Can't get product now</FullRow>;
  if (data && data.products.length === 0) return <FullRow>No Results</FullRow>;
  if (data) return <>{data.products.map(ProductListItem)}</>;
  if (previousData) return <>{previousData.products.map(ProductListItem)}</>;

  return <FullRow>Loading...</FullRow>;
};
