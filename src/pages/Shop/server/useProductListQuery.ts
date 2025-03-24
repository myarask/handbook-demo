import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "../hooks/useDebounce";
import { useProductList } from "../controller/state";
import {
  ProductListQueryArgs,
  ProductListQueryResults,
} from "./useProductListQuery.types";

const fetcher = async ({
  limit,
  searchTerm,
  offset,
}: ProductListQueryArgs): Promise<ProductListQueryResults> => {
  const params = `limit=${limit}&q=${searchTerm}&skip=${offset}`;

  const res = await fetch(`https://dummyjson.com/products/search?${params}`, {
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
};

export const useProductListQuery = () => {
  const { searchTerm, page, pageSize } = useProductList((state) => state);
  const debouncedSearchTerm = useDebounce(searchTerm);

  // Debounce the search term
  const args = {
    searchTerm: debouncedSearchTerm,
    offset: (page - 1) * 10,
    limit: pageSize,
  };

  return useQuery({
    queryKey: ["products", debouncedSearchTerm, args],
    queryFn: () => fetcher(args),
  });
};
