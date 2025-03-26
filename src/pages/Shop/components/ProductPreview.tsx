import { useShop } from "../controllers/state";
import { useProduct } from "../hooks/useProduct";

export const ProductPreview = () => {
  const productId = useShop((state) => state.preview.productId);

  if (!productId) {
    throw new Error("Missing productId in ProductPreview");
  }

  const product = useProduct(productId);

  return <img src={product.images[0]} height="200px" width="200px" />;
};
