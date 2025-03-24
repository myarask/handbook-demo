import { getLastPage } from "./utils";
import { queryClient } from "../../../clients/react-query";

vi.mock("../../../react-query");

test("getLastPage", () => {
  // Round the page up
  vi.spyOn(queryClient, "getQueriesData").mockReturnValue([
    [undefined, { total: 11 }],
  ]);
  expect(getLastPage()).toBe(2);

  // Assume page 1 if no data
  vi.spyOn(queryClient, "getQueriesData").mockReturnValue([
    [undefined, undefined],
  ]);
  expect(getLastPage()).toBe(1);
});
