import { ProductListSearch } from "./components/ProductListSearch";
import { ProductListResults } from "./components/ProductListResults";
import { ProductListPagination } from "./components/ProductListPagination";

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
