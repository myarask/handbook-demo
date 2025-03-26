import { queryClient } from "../../../clients/react-query";
import { Product } from "../types/Product.types";
import { useShop } from "./state";

export const reviewProduct = (product: Product) => {
  queryClient.setQueryData(["product", product.id], product);

  useShop.setState({
    preview: {
      isOpen: true,
      productId: product.id,
    },
  });
};
