import { useProductList } from "./state";

test("initial state", () => {
  const state = useProductList.getState();
  expect(state).toEqual({
    searchTerm: "",
    pageSize: 10,
    page: 1,
    previewProductId: null,
  });
});
