import { usePage } from "../../ShopState";

export const CancelOrderButton = () => {
  const handleClick = () => {
    usePage.setState({
      orderModal: {
        isOpen: false,
        productId: null,
      },
    });
  };

  return <button onClick={handleClick}>Cancel Order</button>;
};
