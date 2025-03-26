import { useShop } from "../../ShopState";

export const CurrentPage = () => {
  const { page } = useShop();

  return <button disabled>{page}</button>;
};
