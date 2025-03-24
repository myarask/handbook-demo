import { useProductList } from "./state";
import { getLastPage } from "./utils";

export const goToFirstPage = () => {
  useProductList.setState({ page: 1 });
};

export const goToLastPage = () => {
  useProductList.setState({ page: getLastPage() });
};

export const goToNextPage = () => {
  useProductList.setState((state) => ({
    page: Math.min(getLastPage(), state.page + 1),
  }));
};

export const goToPreviousPage = () => {
  useProductList.setState((state) => ({
    page: Math.max(1, state.page - 1),
  }));
};

export const handleSearchProduct = (
  event: React.ChangeEvent<HTMLInputElement>
) => {
  useProductList.setState({
    searchTerm: event.target.value,
    page: 1,
  });
};

export const showProductPreview = (productId: number) => {
  useProductList.setState({ previewProductId: productId });
};
