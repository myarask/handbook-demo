import {
  goToFirstPage,
  goToLastPage,
  goToNextPage,
  goToPreviousPage,
  handleSearchProduct,
} from "./actions";
import { useProductList } from "./state";
import { getLastPage } from "./utils";

vi.mock("./utils");
vi.mocked(getLastPage).mockReturnValue(2);

test("handleGoToFirstPage", () => {
  useProductList.setState({ page: 2 });
  goToFirstPage();
  expect(useProductList.getState().page).toBe(1);
});

test("handleGoToLastPage", () => {
  useProductList.setState({ page: 1 });
  goToLastPage();
  expect(useProductList.getState().page).toBe(2);
});

test("handleGoToNextPage", () => {
  useProductList.setState({ page: 1 });
  goToNextPage();
  expect(useProductList.getState().page).toBe(2);
  goToNextPage();
  expect(useProductList.getState().page).toBe(2);
});

test("handleGoToPreviousPage", () => {
  useProductList.setState({ page: 2 });
  goToPreviousPage();
  expect(useProductList.getState().page).toBe(1);
  goToPreviousPage();
  expect(useProductList.getState().page).toBe(1);
});

test("search", () => {
  goToLastPage();
  handleSearchProduct({ target: { value: "apple" } } as any);
  expect(useProductList.getState().searchTerm).toBe("apple");
  expect(useProductList.getState().page).toBe(1);
});
