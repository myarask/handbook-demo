import { NextSteps } from "./components/NextSteps";
import { OrderDetails } from "./components/OrderDetails";

const OrderConfirmationLayout = () => {
  return (
    <>
      <h1>Order Confirmation</h1>
      <p>Thank you for your order!</p>
      <OrderDetails />
      <NextSteps />
    </>
  );
};

export default OrderConfirmationLayout;
