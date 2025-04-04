import { usePage } from "../../ShopState";
import { useLastPage } from "../../hooks/useLastPage";

export const NextPageButton = () => {
  const lastPage = useLastPage();

  const handleClick = () => {
    usePage.setState((state) => ({
      page: Math.min(lastPage, state.page + 1),
    }));
  };

  return (
    <button onClick={handleClick} aria-label="Go to the next page">
      {">"}
    </button>
  );
};
