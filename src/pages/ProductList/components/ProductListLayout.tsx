import { ProductListSearch } from "./ProductListSearch";
import { ProductListResults } from "./ProductListResults";
import { ProductListPagination } from "./ProductListPagination";

const ProductListLayout = () => {
  return (
    <>
      <label>
        Search
        <ProductListSearch />
      </label>
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

export default ProductListLayout;
