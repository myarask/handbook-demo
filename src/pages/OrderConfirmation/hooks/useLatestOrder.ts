import { useSuspenseQuery } from "@tanstack/react-query";
import type { Order } from "../types/Order.types";

const fetcher = async (): Promise<Order> => {
  // Custom endpoint for fetching the "latest order"
  const res = await fetch("https://dummyjson.com/c/eaba-a1fa-479e-a9f7", {
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product by id");
  }

  return res.json();
};

export const useLatestOrder = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["latest-order"],
    queryFn: fetcher,
  });

  return data;
};
