import { useProductList } from "./state";

test("should initialize with default state", () => {
  const state = useProductList.getState();
  expect(state).toMatchSnapshot();
});
