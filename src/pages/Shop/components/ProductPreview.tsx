import { useProductList } from "../controllers/state";
import { useProduct } from "../hooks/useProduct";

export const ProductPreview = () => {
  const previewProductId = useProductList((state) => state.previewProductId);

  if (!previewProductId) {
    throw new Error("Missing productId in ProductPreview");
  }

  const product = useProduct(previewProductId);

  return <img src={product.images[0]} height="200px" width="200px" />;
};
