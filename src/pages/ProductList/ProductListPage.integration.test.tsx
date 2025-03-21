import { render, screen } from "@testing-library/react";
import { ProductListPage } from "./ProductListPage";
import { mockProductListData } from "./server/useProductListQuery.mock";
import { MockQueryClientProvider } from "../../clients/react-query.utils";

test("I can browse products", async () => {
  render(
    <MockQueryClientProvider>
      <ProductListPage />
    </MockQueryClientProvider>
  );

  const products = await screen.findAllByText("fragrances");
  expect(products.length).toBe(5);
});
