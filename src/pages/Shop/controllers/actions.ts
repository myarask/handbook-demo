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

export const showProductPreview = (productId: number) => {
  useShop.setState({ previewProductId: productId });
};
