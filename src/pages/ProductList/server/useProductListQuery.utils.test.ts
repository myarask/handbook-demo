import { fetchProducts } from "./useProductListQuery.utils";
import { Mock, vi } from "vitest";

test("fetchProducts", async () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = vi.fn();

  const products = [{ id: 1, name: "phone" }];
  const args = { limit: 10, searchTerm: "phone", offset: 5 };

  (fetch as Mock).mockResolvedValue({
    ok: true,
    json: async () => ({ products }),
  });

  const result = await fetchProducts(args);

  expect(fetch).toHaveBeenCalledWith(
    "https://dummyjson.com/products/search?limit=10&q=phone&skip=5",
    { headers: { "Content-Type": "application/json" } }
  );
  expect(result).toEqual({ products });

  globalThis.fetch = originalFetch;
});
