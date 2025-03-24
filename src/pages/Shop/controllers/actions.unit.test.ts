import {
  goToFirstPage,
  goToLastPage,
  goToNextPage,
  goToPreviousPage,
  handleSearchProduct,
  showProductPreview,
} from "./actions";
import { useShop } from "./state";
import { getLastPage } from "./utils";

vi.mock("./utils");
vi.mocked(getLastPage).mockReturnValue(2);

test("goToFirstPage", () => {
  useShop.setState({ page: 2 });
  goToFirstPage();
  expect(useShop.getState().page).toBe(1);
});

test("goToLastPage", () => {
  useShop.setState({ page: 1 });
  goToLastPage();
  expect(useShop.getState().page).toBe(2);
});

test("goToNextPage", () => {
  useShop.setState({ page: 1 });
  goToNextPage();
  expect(useShop.getState().page).toBe(2);
  goToNextPage();
  expect(useShop.getState().page).toBe(2);
});

test("goToPreviousPage", () => {
  useShop.setState({ page: 2 });
  goToPreviousPage();
  expect(useShop.getState().page).toBe(1);
  goToPreviousPage();
  expect(useShop.getState().page).toBe(1);
});

test("handleSearchProduct", () => {
  goToLastPage();
  handleSearchProduct({ target: { value: "apple" } } as any);
  expect(useShop.getState().searchTerm).toBe("apple");
  expect(useShop.getState().page).toBe(1);
});

test("showProductPreview", () => {
  useShop.setState({ previewProductId: null });
  showProductPreview(1);
  expect(useShop.getState().previewProductId).toBe(1);
});
