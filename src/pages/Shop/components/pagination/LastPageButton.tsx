import { usePage } from "../../ShopState";
import { useLastPage } from "../../hooks/useLastPage";

export const LastPageButton = () => {
  const lastPage = useLastPage();

  const handleClick = () => {
    usePage.setState({ page: lastPage });
  };

  return (
    <button onClick={handleClick} aria-label="Go to the last page">
      {">>"}
    </button>
  );
};
