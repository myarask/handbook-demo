import {
  handleGoToFirstPage,
  handleGoToLastPage,
  handleGoToNextPage,
  handleGoToPreviousPage,
} from "../controllers/actions";
import { useProductList } from "../controllers/state";

export const ProductListPagination = () => {
  const { page } = useProductList();

  return (
    <tr>
      <td colSpan={3}>
        <button onClick={handleGoToFirstPage} aria-label="Go to the first page">
          {"<<"}
        </button>
        <button
          onClick={handleGoToPreviousPage}
          aria-label="Go to the previous page"
        >
          {"<"}
        </button>
        <button>{page}</button>
        <button onClick={handleGoToNextPage} aria-label="Go to the next page">
          {">"}
        </button>
        <button onClick={handleGoToLastPage} aria-label="Go to the last page">
          {">>"}
        </button>
      </td>
    </tr>
  );
};
