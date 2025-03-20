import { useProductList } from "./state";
import { getLastPage } from "./actions.utils";

export const handleGoToFirstPage = () => {
  useProductList.setState({ page: 1 });
};

export const handleGoToLastPage = () => {
  useProductList.setState({ page: getLastPage() });
};

export const handleGoToNextPage = () => {
  useProductList.setState((state) => ({
    page: Math.min(getLastPage(), state.page + 1),
  }));
};

export const handleGoToPreviousPage = () => {
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
