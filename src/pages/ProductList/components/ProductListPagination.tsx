import {
  handleGoToFirstPage,
  handleGoToLastPage,
  handleGoToNextPage,
  handleGoToPreviousPage,
} from "../controller/actions";
import { useProductList } from "../controller/state";

export const ProductListPagination = () => {
  const { page } = useProductList();

  return (
    <div>
      <button onClick={handleGoToFirstPage}>{"<<"}</button>
      <button onClick={handleGoToPreviousPage}>{"<"}</button>
      <button>{page}</button>
      <button onClick={handleGoToNextPage}>{">"}</button>
      <button onClick={handleGoToLastPage}>{">>"}</button>
    </div>
  );
};
