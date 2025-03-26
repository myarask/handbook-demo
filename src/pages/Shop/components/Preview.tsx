import { usePage } from "../ShopState";
import { useProduct } from "../hooks/useProduct";

export const Preview = () => {
  const productId = usePage((state) => state.preview.productId);

  if (!productId) {
    throw new Error("Missing productId in the Preview panel");
  }

  const product = useProduct(productId);
  const src = product.images?.[0];

  if (!src) return null;

  return <img src={src} height="200px" width="200px" />;
};
