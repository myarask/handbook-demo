import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProductListPage } from "./ProductListPage";
import { Mock, vi } from "vitest";
import { useQuery } from "@tanstack/react-query";
import { mockProductListData } from "./server/useProductListQuery.mock";
import { queryClient } from "../../react-query";

vi.mock("@tanstack/react-query");

test("I can see products", async () => {
  (useQuery as Mock).mockReturnValue({ data: mockProductListData });
  vi.spyOn(queryClient, "getQueriesData").mockReturnValue([
    [[], { total: 99 }],
  ]);
  render(<ProductListPage />);

  const products = await screen.findAllByText("fragrances");
  expect(products.length).toBe(5);
});

test("I can search products", async () => {
  (useQuery as Mock).mockReturnValue({ data: mockProductListData });
  vi.spyOn(queryClient, "getQueriesData").mockReturnValue([
    [[], { total: 99 }],
  ]);
  render(<ProductListPage />);

  const searchField = await screen.findByLabelText("Search");
  const searchTerm = "test";
  await userEvent.type(searchField, searchTerm);

  waitFor(async () => {
    await expect(useQuery).toHaveBeenCalledWith({
      queryKey: ["products", searchTerm, { searchTerm, offset: 0, limit: 10 }],
      queryFn: expect.any(Function),
    });
  });
});

test("I can browse products", async () => {
  (useQuery as Mock).mockReturnValue({ data: mockProductListData });
  vi.spyOn(queryClient, "getQueriesData").mockReturnValue([
    [[], { total: 99 }],
  ]);
  render(<ProductListPage />);

  // Pagination
  const nextButton = await screen.findByRole("button", {
    name: "Go to the next page",
  });
  await userEvent.click(nextButton);
  waitFor(async () => {
    await expect(useQuery).toHaveBeenCalledWith({
      queryKey: ["products", "", { searchTerm: "", offset: 10, limit: 10 }],
      queryFn: expect.any(Function),
    });
  });
});
