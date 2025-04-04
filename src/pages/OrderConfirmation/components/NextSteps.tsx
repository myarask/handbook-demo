import { Link } from "react-router";
import { paths } from "../../../app/AppRouter.constants";

export const NextSteps = () => {
  return (
    <div>
      <h2>What to do next</h2>
      <p>
        Your order has been placed. You will receive an email confirmation
        shortly.
      </p>
      <p>
        While you wait, the shop is always open.{" "}
        <Link to={paths.shop}>Shop now</Link>!
      </p>
    </div>
  );
};
