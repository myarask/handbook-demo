import { ProductListResults } from "./ProductListResults";
import { ProductListPagination } from "./ProductListPagination";
import { ProductListSearch } from "./ProductListSearch";

export const ProductList = () => {
  return (
    <>
      <ProductListSearch />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <ProductListResults />
        </tbody>
        <tfoot>
          <ProductListPagination />
        </tfoot>
      </table>
    </>
  );
};
