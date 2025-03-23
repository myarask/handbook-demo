import { handleSearchProduct } from "../controller/actions";
import { useProductList } from "../controller/state";

export const ProductListSearch = () => {
  const searchTerm = useProductList((state) => state.searchTerm);

  return (
    <>
      <label>
        Search
        <input
          type="search"
          value={searchTerm}
          onChange={handleSearchProduct}
        />
      </label>
    </>
  );
};
