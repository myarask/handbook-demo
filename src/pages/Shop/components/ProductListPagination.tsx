import {
  goToFirstPage,
  goToLastPage,
  goToNextPage,
  goToPreviousPage,
} from "../controllers/actions";
import { useShop } from "../controllers/state";

export const ProductListPagination = () => {
  const { page } = useShop();

  return (
    <tr>
      <td colSpan={3}>
        <button onClick={goToFirstPage} aria-label="Go to the first page">
          {"<<"}
        </button>
        <button onClick={goToPreviousPage} aria-label="Go to the previous page">
          {"<"}
        </button>
        <button>{page}</button>
        <button onClick={goToNextPage} aria-label="Go to the next page">
          {">"}
        </button>
        <button onClick={goToLastPage} aria-label="Go to the last page">
          {">>"}
        </button>
      </td>
    </tr>
  );
};
