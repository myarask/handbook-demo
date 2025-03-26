import { useShop } from "../../ShopState";
import { CancelOrderButton } from "./CancelOrderButton";
import { ConfirmOrderButton } from "./ConfirmOrderButton";

export const OrderModal = () => {
  const isOpen = useShop((state) => state.orderModal.isOpen);

  return (
    <dialog open={isOpen}>
      <h2>Buy Now?</h2>
      <ConfirmOrderButton />
      <CancelOrderButton />
    </dialog>
  );
};
