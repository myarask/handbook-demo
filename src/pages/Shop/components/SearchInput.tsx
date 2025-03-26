import { usePage } from "../ShopState";

export const SearchInput = () => {
  const searchTerm = usePage((state) => state.searchTerm);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    usePage.setState({ searchTerm: event.target.value, page: 1 });
  };

  return <input type="search" value={searchTerm} onChange={handleChange} />;
};
