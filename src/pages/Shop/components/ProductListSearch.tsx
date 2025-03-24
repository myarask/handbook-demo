import { handleSearchProduct } from "../controllers/actions";
import { useShop } from "../controllers/state";

export const ProductListSearch = () => {
  const searchTerm = useShop((state) => state.searchTerm);

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
