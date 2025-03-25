import { Link } from "react-router";
import { paths } from "../../app/AppRouter.constants";

export const Home = () => {
  return (
    <>
      <h1>Welcome to myStore</h1>
      <Link to={paths.shop}>Shop now!</Link>
    </>
  );
};
