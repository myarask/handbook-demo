import { renderHook, act } from "@testing-library/react";
import { useProductListQuery } from "./useProductListQuery";
import { useProductList } from "../controller/state";
import { useQuery } from "@tanstack/react-query";

vi.mock("@tanstack/react-query");
vi.mock("../controller/state");

test("useProductListQuery", () => {
  const page = 1;
  const pageSize = 10;
  const searchTerm = "test";

  vi.mocked(useProductList).mockReturnValue({ page, pageSize, searchTerm });
  vi.mocked(useQuery).mockReturnValue("foo");

  const { result } = renderHook(() => useProductListQuery());

  expect(useQuery).toHaveBeenCalledWith({
    queryKey: ["products", searchTerm, { searchTerm, offset: 0, limit: 10 }],
    queryFn: expect.any(Function),
  });
  expect(result.current).toBe("foo");
});
