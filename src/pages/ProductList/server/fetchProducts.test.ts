import { fetchProducts } from "./fetchProducts";
import { Mock, vi } from "vitest";

const originalFetch = globalThis.fetch;

beforeAll(() => {
  globalThis.fetch = vi.fn();
});

afterAll(() => {
  globalThis.fetch = originalFetch;
});

test("fetches products with correct query parameters", async () => {
  (fetch as Mock).mockResolvedValueOnce({
    ok: true,
    json: async () => ({ products: [] }),
  });

  const result = await fetchProducts({
    limit: 10,
    searchTerm: "phone",
    offset: 5,
  });

  expect(fetch).toHaveBeenCalledWith(
    "https://dummyjson.com/products/search?limit=10&q=phone&skip=5",
    { headers: { "Content-Type": "application/json" } }
  );

  expect(result).toEqual({ products: [] });
});

test("throws an error if the response is not ok", async () => {
  (fetch as Mock).mockResolvedValueOnce({ ok: false });

  await expect(
    fetchProducts({
      limit: 10,
      searchTerm: "phone",
      offset: 5,
    })
  ).rejects.toThrow("Failed to fetch products");
});
