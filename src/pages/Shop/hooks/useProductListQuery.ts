import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "./useDebounce";
import { useShop } from "../controllers/state";
import type {
  ProductListQueryArgs,
  ProductListQueryResults,
} from "../types/Product.types";

const fetcher = async ({
  limit = 10,
  searchTerm = "",
  offset = 0,
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
  const { searchTerm, page, pageSize } = useShop((state) => state);
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
