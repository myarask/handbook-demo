import { usePage } from "../../ShopState";

export const PlaceOrderButton = () => {
  const handleClick = () => {
    usePage.setState((state) => ({
      orderModal: {
        isOpen: true,
        productId: state.preview.productId,
      },
    }));
  };

  return <button onClick={handleClick}>Place Order</button>;
};
