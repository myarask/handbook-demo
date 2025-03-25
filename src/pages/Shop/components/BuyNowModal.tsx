import { Link } from "react-router";
import { hideBuyNowModal } from "../controllers/actions";
import { useShop } from "../controllers/state";
import { RoutePath } from "../../../app/AppRouter.constants";

export const BuyNowModal = () => {
  const productId = useShop((state) => state.buying.productId);

  return (
    <dialog open={Boolean(productId)}>
      <h2>Buy Now?</h2>
      <Link to={RoutePath.orderConfirmation}>
        <button>Yes, Buy Now!</button>
      </Link>

      <button onClick={hideBuyNowModal}>NO, do not want</button>
    </dialog>
  );
};
