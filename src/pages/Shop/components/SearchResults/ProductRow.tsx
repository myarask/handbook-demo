import { placeOrder, reviewProduct } from "../../controllers/actions";
import type { Product } from "../../types/Product.types";

export const ProductRow = (product: Product) => {
  return (
    <tr key={product.id} onMouseEnter={() => reviewProduct(product)}>
      <td>{product.title}</td>
      <td>{product.category}</td>
      <td>{product.price}</td>
      <td>
        <button onClick={placeOrder}>Place Order</button>
      </td>
    </tr>
  );
};
