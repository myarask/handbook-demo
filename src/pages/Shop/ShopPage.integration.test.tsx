import { screen } from "@testing-library/react";
import { ShopPage } from "./ShopPage";
import { renderWithProviders } from "../../clients/react-query.test-utils";

test("I can browse products", async () => {
  renderWithProviders(<ShopPage />);

  const products = await screen.findAllByText("fragrances");
  expect(products.length).toBe(5);
});
