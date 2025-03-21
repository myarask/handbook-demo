import { queryClient } from "../../../react-query";
import { useProductList } from "./state";
import type { ProductListQueryResults } from "../server/useProductListQuery.types";

export const getLastPage = () => {
  const { pageSize, searchTerm } = useProductList.getState();
  const [firstResult] = queryClient.getQueriesData<ProductListQueryResults>({
    queryKey: ["products", searchTerm],
  });

  const data = firstResult[1];

  if (!data) return 1;

  return Math.ceil(data.total / pageSize);
};
