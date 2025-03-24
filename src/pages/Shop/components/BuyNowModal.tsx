import { useShop } from "../controllers/state";

export const BuyNowModal = () => {
  const productId = useShop((state) => state.buyNowProductId);

  return (
    <dialog id="buy-now-modal" open={Boolean(productId)}>
      <h2>Modal Title</h2>
      <p>test</p>
      <button>Close</button>
    </dialog>
  );
};
