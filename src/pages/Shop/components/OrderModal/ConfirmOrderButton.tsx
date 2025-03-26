import { Link } from "react-router";
import { paths } from "../../../../app/AppRouter.constants";

export const ConfirmOrderButton = () => {
  return (
    <Link to={paths.order.confirmation.replace(":orderId", "123")}>
      <button>Yes, Buy Now!</button>
    </Link>
  );
};
