import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "../../../hooks/useDebounce";
import { useProductList } from "../controller/state";
import { fetchProducts } from "./fetchProducts";

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
    queryFn: () => fetchProducts(args),
  });
};
