import { useShop } from "../../ShopState";

export const PreviousPageButton = () => {
  const handleClick = () => {
    useShop.setState((state) => ({
      page: Math.max(1, state.page - 1),
    }));
  };

  return (
    <button onClick={handleClick} aria-label="Go to the previous page">
      {"<"}
    </button>
  );
};
