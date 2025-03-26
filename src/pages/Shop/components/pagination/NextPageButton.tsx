import { useShop } from "../../controllers/state";
import { getLastPage } from "../../controllers/utils";

export const NextPageButton = () => {
  const handleClick = () => {
    useShop.setState((state) => ({
      page: Math.min(getLastPage(), state.page + 1),
    }));
  };

  return (
    <button onClick={handleClick} aria-label="Go to the next page">
      {">"}
    </button>
  );
};
