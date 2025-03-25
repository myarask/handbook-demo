import { Link } from "react-router";
import { cancelOrder } from "../controllers/actions";
import { useShop } from "../controllers/state";
import { paths } from "../../../app/AppRouter.constants";

export const PlaceOrderModal = () => {
  const hasIntent = useShop((state) => state.buying.hasIntent);

  return (
    <dialog open={hasIntent}>
      <h2>Buy Now?</h2>
      <Link to={paths.order.confirmation.replace(":orderId", "123")}>
        <button>Yes, Buy Now!</button>
      </Link>

      <button onClick={cancelOrder}>NO, do not want</button>
    </dialog>
  );
};
