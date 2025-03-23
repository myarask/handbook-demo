import { NavLink } from "react-router";

export const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/mission">Last Mission</NavLink>
      <NavLink to="/products">Products</NavLink>
    </nav>
  );
};
