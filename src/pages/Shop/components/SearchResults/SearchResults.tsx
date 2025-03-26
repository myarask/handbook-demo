import { useProductListQuery } from "../../hooks/useProductListQuery";
import { usePrevious } from "../../hooks/usePrevious";
import { ProductRow } from "./ProductRow";
import { FullRow } from "./FullRow";

export const SearchResults = () => {
  const { data, error } = useProductListQuery();
  const previousData = usePrevious(data);

  if (error) return <FullRow>Can't get product now</FullRow>;
  if (data && data.products.length === 0) return <FullRow>No Results</FullRow>;
  if (data) return <>{data.products.map(ProductRow)}</>;
  if (previousData) return <>{previousData.products.map(ProductRow)}</>;

  return <FullRow>Loading...</FullRow>;
};
