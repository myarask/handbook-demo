import { queryClient } from "../../../react-query";
import { getLastPage } from "./actions.utils";

test("getLastPage", () => {
  vi.spyOn(queryClient, "getQueriesData").mockReturnValue([
    [undefined, { total: 99 }],
  ]);
  expect(getLastPage()).toBe(10);
});
