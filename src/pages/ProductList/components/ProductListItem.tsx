import type { Product } from "../types/Product.types";

export const ProductListItem = (props: Product) => {
  return (
    <tr key={props.id}>
      <td>{props.title}</td>
      <td>{props.category}</td>
      <td>{props.price}</td>
    </tr>
  );
};
