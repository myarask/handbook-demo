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

export const placeOrder = () => {
  useShop.setState((state) => ({
    orderModal: {
      isOpen: true,
      productId: state.preview.productId,
    },
  }));
};

export const cancelOrder = () => {
  useShop.setState({
    orderModal: {
      isOpen: false,
      productId: null,
    },
  });
};
