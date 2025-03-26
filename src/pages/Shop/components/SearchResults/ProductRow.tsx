import { queryClient } from "../../../../clients/react-query";
import { useShop } from "../../controllers/state";
import type { Product } from "../../types/Product.types";
import { PlaceOrderButton } from "./PlaceOrderButton";

export const ProductRow = (product: Product) => {
  const handleMouseEnter = () => {
    queryClient.setQueryData(["product", product.id], product);

    useShop.setState({
      preview: {
        isOpen: true,
        productId: product.id,
      },
    });
  };

  return (
    <tr key={product.id} onMouseEnter={handleMouseEnter}>
      <td>{product.title}</td>
      <td>{product.category}</td>
      <td>{product.price}</td>
      <td>
        <PlaceOrderButton />
      </td>
    </tr>
  );
};
