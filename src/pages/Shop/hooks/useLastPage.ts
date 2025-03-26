import { useShop } from "../ShopState";
import { usePrevious } from "./usePrevious";
import { useProductListQuery } from "./useProductListQuery";

export const useLastPage = () => {
  const pageSize = useShop((state) => state.pageSize);
  const { data } = useProductListQuery();
  const previousData = usePrevious(data);

  const response = data || previousData;

  if (response) {
    return Math.ceil(response.total / pageSize);
  }

  return 1;
};
