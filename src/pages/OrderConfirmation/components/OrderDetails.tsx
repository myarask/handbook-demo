import { useLatestOrder } from "../hooks/useLatestOrder";

export const OrderDetails = () => {
  const order = useLatestOrder();

  return (
    <div>
      <h2>Order Details</h2>
      <p>Order Total: {order.total}</p>
      <ul>
        {order.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};
