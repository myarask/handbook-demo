import { Link } from "react-router";
import { useShop } from "../controllers/state";
import { paths } from "../../../app/AppRouter.constants";

export const PlaceOrderModal = () => {
  const hasIntent = useShop((state) => state.buying.hasIntent);

  const handleClick = () => {
    useShop.setState({
      buying: {
        hasIntent: false,
        productId: null,
      },
    });
  };

  return (
    <dialog open={hasIntent}>
      <h2>Buy Now?</h2>
      <Link to={paths.order.confirmation.replace(":orderId", "123")}>
        <button>Yes, Buy Now!</button>
      </Link>

      <button onClick={handleClick}>NO, do not want</button>
    </dialog>
  );
};
