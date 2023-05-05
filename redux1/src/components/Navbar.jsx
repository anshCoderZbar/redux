import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const amount = useSelector((state) => state.amount);
  return (
    <button disabled className="btn">
      Your balance {amount}
    </button>
  );
};

export default Navbar;
