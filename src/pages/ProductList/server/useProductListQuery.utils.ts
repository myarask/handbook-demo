import type {
  ProductListQueryArgs,
  ProductListQueryResults,
} from "./useProductListQuery.types";

export const fetchProducts = async ({
  limit,
  searchTerm,
  offset,
}: ProductListQueryArgs): Promise<ProductListQueryResults> => {
  const params = `limit=${limit}&q=${searchTerm}&skip=${offset}`;

  const res = await fetch(`https://dummyjson.com/products/search?${params}`, {
    headers: { "Content-Type": "application/json" },
  });

  return res.json();
};
