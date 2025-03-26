import { usePage } from "../../ShopState";

export const FirstPageButton = () => {
  const handleClick = () => {
    usePage.setState({ page: 1 });
  };

  return (
    <button onClick={handleClick} aria-label="Go to the first page">
      {"<<"}
    </button>
  );
};
