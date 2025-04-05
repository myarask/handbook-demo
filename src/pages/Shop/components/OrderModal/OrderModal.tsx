import { usePage } from "../../ShopState";
import { CancelOrderButton } from "./CancelOrderButton";
import { ConfirmOrderButton } from "./ConfirmOrderButton";

export const OrderModal = () => {
  const isOpen = usePage((state) => state.orderModal.isOpen);

  return (
    <dialog open={isOpen}>
      <h2>Please confirm the order</h2>
      <ConfirmOrderButton />
      <CancelOrderButton />
    </dialog>
  );
};
