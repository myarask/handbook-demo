import { useShop } from "../controllers/state";

export const ProductListSearch = () => {
  const searchTerm = useShop((state) => state.searchTerm);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    useShop.setState({ searchTerm: event.target.value, page: 1 });
  };

  return (
    <label>
      Search
      <input type="search" value={searchTerm} onChange={handleChange} />
    </label>
  );
};
