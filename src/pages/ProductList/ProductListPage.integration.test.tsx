import { render, screen } from "@testing-library/react";
import { ProductListPage } from "./ProductListPage";
import { mockProductListData } from "./server/useProductListQuery.mock";
import { TestQueryClientProvider } from "../../clients/react-query.utils";

test("I can browse products", async () => {
  render(
    <TestQueryClientProvider>
      <ProductListPage />
    </TestQueryClientProvider>
  );

  const products = await screen.findAllByText("fragrances");
  expect(products.length).toBe(5);
});
