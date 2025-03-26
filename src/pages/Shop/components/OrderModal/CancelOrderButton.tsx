import { useShop } from "../../controllers/state";

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
