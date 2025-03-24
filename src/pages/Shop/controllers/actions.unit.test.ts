import {
  goToFirstPage,
  goToLastPage,
  goToNextPage,
  goToPreviousPage,
  handleSearchProduct,
  showProductPreview,
} from "./actions";
import { useProductList } from "./state";
import { getLastPage } from "./utils";

vi.mock("./utils");
vi.mocked(getLastPage).mockReturnValue(2);

test("goToFirstPage", () => {
  useProductList.setState({ page: 2 });
  goToFirstPage();
  expect(useProductList.getState().page).toBe(1);
});

test("goToLastPage", () => {
  useProductList.setState({ page: 1 });
  goToLastPage();
  expect(useProductList.getState().page).toBe(2);
});

test("goToNextPage", () => {
  useProductList.setState({ page: 1 });
  goToNextPage();
  expect(useProductList.getState().page).toBe(2);
  goToNextPage();
  expect(useProductList.getState().page).toBe(2);
});

test("goToPreviousPage", () => {
  useProductList.setState({ page: 2 });
  goToPreviousPage();
  expect(useProductList.getState().page).toBe(1);
  goToPreviousPage();
  expect(useProductList.getState().page).toBe(1);
});

test("handleSearchProduct", () => {
  goToLastPage();
  handleSearchProduct({ target: { value: "apple" } } as any);
  expect(useProductList.getState().searchTerm).toBe("apple");
  expect(useProductList.getState().page).toBe(1);
});

test("showProductPreview", () => {
  useProductList.setState({ previewProductId: null });
  showProductPreview(1);
  expect(useProductList.getState().previewProductId).toBe(1);
});
