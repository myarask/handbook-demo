import { usePage } from "../../ShopState";

export const CurrentPage = () => {
  const { page } = usePage();

  return <button disabled>{page}</button>;
};
