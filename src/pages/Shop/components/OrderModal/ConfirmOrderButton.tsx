import { Link, useLocation, useNavigate } from "react-router";
import { paths } from "../../../../app/AppRouter.constants";
import { useShop } from "../../ShopState";

export const ConfirmOrderButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    useShop.setState({
      orderModal: {
        isOpen: false,
        productId: null,
      },
    });

    navigate(paths.order.confirmation.replace(":orderId", "123"));
  };

  return <button onClick={handleClick}>Yes, Buy Now!</button>;
};
