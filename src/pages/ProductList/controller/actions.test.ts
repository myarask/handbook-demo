import {
  handleGoToFirstPage,
  handleGoToLastPage,
  handleGoToNextPage,
  handleGoToPreviousPage,
  handleSearchProduct,
} from "./actions";
import { useProductList } from "./state";
import { getLastPage } from "./utils";

vi.mock("./utils");
vi.mocked(getLastPage).mockReturnValue(2);

test("handleGoToFirstPage", () => {
  useProductList.setState({ page: 2 });
  handleGoToFirstPage();
  expect(useProductList.getState().page).toBe(1);
});

test("handleGoToLastPage", () => {
  useProductList.setState({ page: 1 });
  handleGoToLastPage();
  expect(useProductList.getState().page).toBe(2);
});

test("handleGoToNextPage", () => {
  useProductList.setState({ page: 1 });
  handleGoToNextPage();
  expect(useProductList.getState().page).toBe(2);
  handleGoToNextPage();
  expect(useProductList.getState().page).toBe(2);
});

test("handleGoToPreviousPage", () => {
  useProductList.setState({ page: 2 });
  handleGoToPreviousPage();
  expect(useProductList.getState().page).toBe(1);
  handleGoToPreviousPage();
  expect(useProductList.getState().page).toBe(1);
});

test("search", () => {
  handleGoToLastPage();
  handleSearchProduct({ target: { value: "apple" } } as any);
  expect(useProductList.getState().searchTerm).toBe("apple");
  expect(useProductList.getState().page).toBe(1);
});
