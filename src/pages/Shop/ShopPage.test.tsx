import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../utils/test-utils";
import { ShopPage } from "./ShopPage";
import { usePage } from "./ShopState";

import "./mocks/server";

beforeEach(() => {
  usePage.setState(usePage.getInitialState());
});

test("I can browse products", async () => {
  renderWithProviders(<ShopPage />);

  // Test first page
  let products = await screen.findAllByText("fragrances");
  expect(products.length).toBe(5);
  expect(screen.getByLabelText("On page 1")).toBeInTheDocument();

  // Go to next page
  const nextPageButton = screen.getByRole("button", { name: /next/i });
  await userEvent.click(nextPageButton);

  products = await screen.findAllByText("furniture");
  expect(products.length).toBe(5);
  expect(screen.getByLabelText("On page 2")).toBeInTheDocument();

  // Go to first page
  const firstPageButton = screen.getByRole("button", { name: /first/i });
  await userEvent.click(firstPageButton);

  products = await screen.findAllByText("fragrances");
  expect(products.length).toBe(5);
  expect(screen.getByLabelText("On page 1")).toBeInTheDocument();

  // Go to last page
  const lastPageButton = screen.getByRole("button", { name: /last/i });
  await userEvent.click(lastPageButton);

  products = await screen.findAllByText("womens-watches");
  expect(products.length).toBe(4);
  expect(screen.getByLabelText("On page 20")).toBeInTheDocument();

  // Go to previous page
  const previousPageButton = screen.getByRole("button", { name: /previous/i });
  await userEvent.click(previousPageButton);

  products = await screen.findAllByText("womens-jewellery");
  expect(products.length).toBe(3);
  expect(screen.getByLabelText("On page 19")).toBeInTheDocument();

  // Search for products
  const searchInput = screen.getByLabelText("Search");
  await userEvent.type(searchInput, "lap");

  products = await screen.findAllByText("laptops");
  expect(products.length).toBe(5);
  expect(screen.getByLabelText("On page 1")).toBeInTheDocument();
});

test("I can place an order", async () => {
  const pushState = vi.spyOn(history, "pushState");

  renderWithProviders(<ShopPage />);

  const orderButton = await screen.findAllByRole("button", {
    name: /place order/i,
  });
  await userEvent.click(orderButton[0]);

  const confirmationButton = await screen.findByRole("button", {
    name: /buy now/i,
  });
  await userEvent.click(confirmationButton);

  // Redirect to order confirmation page
  expect(pushState).toHaveBeenCalledWith(
    expect.any(Object),
    "",
    "/order/123/confirmation"
  );
});
