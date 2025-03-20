import { useProductList } from "../controller/state";
import { handleSearchProduct } from "../controller/actions";

export const ProductListSearch = () => {
  const searchTerm = useProductList((state) => state.searchTerm);

  return (
    <input type="search" value={searchTerm} onChange={handleSearchProduct} />
  );
};
