import { useSuspenseQuery } from "@tanstack/react-query";
import type { Product } from "../types/Product.types";

const fetcher = async (id: number): Promise<Product> => {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product by id");
  }

  return res.json();
};

export const useProduct = (id: number) => {
  const { data } = useSuspenseQuery({
    queryKey: ["product", id],
    queryFn: () => fetcher(id),
  });

  return data;
};
