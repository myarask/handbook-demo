import { useShop } from "../../ShopState";

export const PlaceOrderButton = () => {
  const handleClick = () => {
    useShop.setState((state) => ({
      orderModal: {
        isOpen: true,
        productId: state.preview.productId,
      },
    }));
  };

  return <button onClick={handleClick}>Place Order</button>;
};
