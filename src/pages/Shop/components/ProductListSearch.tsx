import { handleSearchProduct } from "../controllers/actions";
import { useProductList } from "../controllers/state";

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
