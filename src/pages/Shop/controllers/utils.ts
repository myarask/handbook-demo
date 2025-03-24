import { queryClient } from "../../../clients/react-query";
import { useShop } from "./state";
import type { ProductListQueryResults } from "../types/Product.types";

export const getLastPage = () => {
  const { pageSize, searchTerm } = useShop.getState();
  const [firstResult] = queryClient.getQueriesData<ProductListQueryResults>({
    queryKey: ["products", searchTerm],
  });

  const data = firstResult[1];

  if (!data) return 1;

  return Math.ceil(data.total / pageSize);
};
