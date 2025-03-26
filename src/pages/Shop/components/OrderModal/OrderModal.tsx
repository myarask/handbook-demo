import { Link } from "react-router";
import { useShop } from "../../controllers/state";
import { paths } from "../../../../app/AppRouter.constants";

export const CancelOrderButton = () => {
  const handleClick = () => {
    useShop.setState({
      orderModal: {
        isOpen: false,
        productId: null,
      },
    });
  };

  return <button onClick={handleClick}>NO, do not want</button>;
};

export const ConfirmOrderButton = () => {
  return (
    <Link to={paths.order.confirmation.replace(":orderId", "123")}>
      <button>Yes, Buy Now!</button>
    </Link>
  );
};

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
