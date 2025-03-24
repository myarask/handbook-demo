import { useShop } from "./state";

test("initial state", () => {
  const state = useShop.getState();
  expect(state).toEqual({
    searchTerm: "",
    pageSize: 10,
    page: 1,
    previewProductId: null,
  });
});
