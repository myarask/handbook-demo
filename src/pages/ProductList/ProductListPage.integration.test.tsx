import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProductListPage } from "./ProductListPage";
import { mockProductListData } from "./server/useProductListQuery.mock";
import nock from "nock";
import { MockQueryClientProvider } from "../../clients/react-query.utils";

nock("https://dummyjson.com")
  .get("/products/search?limit=10&q=&skip=0")
  .reply(200, mockProductListData)
  .get("/products/search?limit=10&q=fragrance&skip=0")
  .reply(200, mockProductListData);

test("I can browse products", async () => {
  render(
    <MockQueryClientProvider>
      <ProductListPage />
    </MockQueryClientProvider>
  );

  const products = await screen.findAllByText("fragrances");
  expect(products.length).toBe(5);
});

// test("I can search products", async () => {
//   (useQuery as Mock).mockReturnValue({ data: mockProductListData });
//   vi.spyOn(queryClient, "getQueriesData").mockReturnValue([
//     [[], { total: 99 }],
//   ]);
//   render(<ProductListPage />);

//   const searchField = await screen.findByLabelText("Search");
//   const searchTerm = "test";
//   await userEvent.type(searchField, searchTerm);

//   waitFor(async () => {
//     await expect(useQuery).toHaveBeenCalledWith({
//       queryKey: ["products", searchTerm, { searchTerm, offset: 0, limit: 10 }],
//       queryFn: expect.any(Function),
//     });
//   });
// });

// test("I can browse products", async () => {
//   (useQuery as Mock).mockReturnValue({ data: mockProductListData });
//   vi.spyOn(queryClient, "getQueriesData").mockReturnValue([
//     [[], { total: 99 }],
//   ]);
//   render(<ProductListPage />);

//   // Pagination
//   const nextButton = await screen.findByRole("button", {
//     name: "Go to the next page",
//   });
//   await userEvent.click(nextButton);
//   waitFor(async () => {
//     await expect(useQuery).toHaveBeenCalledWith({
//       queryKey: ["products", "", { searchTerm: "", offset: 10, limit: 10 }],
//       queryFn: expect.any(Function),
//     });
//   });
// });
