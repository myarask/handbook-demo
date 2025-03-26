import { useShop } from "../../controllers/state";
import { getLastPage } from "../../controllers/utils";

export const LastPageButton = () => {
  const handleClick = () => {
    useShop.setState({ page: getLastPage() });
  };

  return (
    <button onClick={handleClick} aria-label="Go to the last page">
      {">>"}
    </button>
  );
};
