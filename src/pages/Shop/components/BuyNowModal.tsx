import { Link } from "react-router";
import { hideBuyNowModal } from "../controllers/actions";
import { useShop } from "../controllers/state";

export const BuyNowModal = () => {
  const productId = useShop((state) => state.buyNowProductId);

  return (
    <dialog open={Boolean(productId)}>
      <h2>Buy Now?</h2>
      <Link to="/order-confirmation">
        <button>Yes, Buy Now!</button>
      </Link>

      <button onClick={hideBuyNowModal}>NO, do not want</button>
    </dialog>
  );
};
