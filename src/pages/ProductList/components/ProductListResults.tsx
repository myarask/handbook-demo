import { ProductListItem } from "./ProductListItem";
import { useProductListQuery } from "../server/useProductListQuery";
import { usePrevious } from "../../../hooks/usePrevious";

export const ProductListResults = () => {
  const { data, error } = useProductListQuery();
  const previousData = usePrevious(data);

  if (error) return <>Failed to get products</>;
  if (data) return <>{data.products.map(ProductListItem)}</>;
  if (previousData) return <>{previousData.products.map(ProductListItem)}</>;

  return <>Loading...</>;
};
