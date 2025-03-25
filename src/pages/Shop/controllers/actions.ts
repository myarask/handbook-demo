import { queryClient } from "../../../clients/react-query";
import { Product } from "../types/Product.types";
import { useShop } from "./state";
import { getLastPage } from "./utils";

export const goToFirstPage = () => {
  useShop.setState({ page: 1 });
};

export const goToLastPage = () => {
  useShop.setState({ page: getLastPage() });
};

export const goToNextPage = () => {
  useShop.setState((state) => ({
    page: Math.min(getLastPage(), state.page + 1),
  }));
};

export const goToPreviousPage = () => {
  useShop.setState((state) => ({
    page: Math.max(1, state.page - 1),
  }));
};

export const handleSearchProduct = (
  event: React.ChangeEvent<HTMLInputElement>
) => {
  useShop.setState({
    searchTerm: event.target.value,
    page: 1,
  });
};

export const reviewProduct = (product: Product) => {
  queryClient.setQueryData(["product", product.id], product);

  useShop.setState({
    reviewing: {
      hasShownInterest: true,
      productId: product.id,
    },
  });
};

export const placeOrder = () => {
  useShop.setState((state) => ({
    buying: {
      hasIntent: true,
      productId: state.reviewing.productId,
    },
  }));
};

export const cancelOrder = () => {
  useShop.setState({
    buying: {
      hasIntent: false,
      productId: null,
    },
  });
};
