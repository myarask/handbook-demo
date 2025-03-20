import type {
  ProductListQueryArgs,
  ProductListQueryResults,
} from "./fetchProducts.types";

export const fetchProducts = async ({
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
