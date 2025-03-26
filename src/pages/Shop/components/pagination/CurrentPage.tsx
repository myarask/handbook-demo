import { usePage } from "../../ShopState";

export const CurrentPage = () => {
  const { page } = usePage();

  return (
    <button disabled aria-label={`On page ${page}`}>
      {page}
    </button>
  );
};
