import { useShop } from "../../controllers/state";

export const CurrentPage = () => {
  const { page } = useShop();

  return <button disabled>{page}</button>;
};
