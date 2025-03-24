import { useProductListQuery } from "../hooks/useProductListQuery";
import { usePrevious } from "../hooks/usePrevious";
import { Product } from "../types/Product.types";
import { showProductPreview } from "../controllers/actions";

const Loading = () => (
  <tr>
    <td colSpan={3}>Loading...</td>
  </tr>
);

const Error = () => (
  <tr>
    <td colSpan={3}>Failed to get products</td>
  </tr>
);

const NoResults = () => (
  <tr>
    <td colSpan={3}>No results found</td>
  </tr>
);

const ProductListItem = (props: Product) => {
  return (
    <tr key={props.id} onMouseEnter={() => showProductPreview(props.id)}>
      <td>{props.title}</td>
      <td>{props.category}</td>
      <td>{props.price}</td>
    </tr>
  );
};

export const ProductListResults = () => {
  const { data, error } = useProductListQuery();
  const previousData = usePrevious(data);

  if (error) return <Error />;
  if (data && data.products.length === 0) return <NoResults />;
  if (data) return <>{data.products.map(ProductListItem)}</>;
  if (previousData) return <>{previousData.products.map(ProductListItem)}</>;

  return <Loading />;
};
