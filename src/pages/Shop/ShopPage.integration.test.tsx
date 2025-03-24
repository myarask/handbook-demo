import { render, screen } from "@testing-library/react";
import { ShopPage } from "./ShopPage";
import { TestQueryClientProvider } from "../../clients/react-query.utils";

test("I can browse products", async () => {
  render(
    <TestQueryClientProvider>
      <ShopPage />
    </TestQueryClientProvider>
  );

  const products = await screen.findAllByText("fragrances");
  expect(products.length).toBe(5);
});
