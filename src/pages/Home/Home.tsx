import { Link } from "react-router";
import { RoutePath } from "../../app/AppRouter.constants";

export const Home = () => {
  return (
    <>
      <h1>Welcome to myStore</h1>
      <Link to={RoutePath.shop}>Shop now!</Link>
    </>
  );
};
