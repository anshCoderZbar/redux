import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator } from "../services/index";

const Shop = () => {
  const dispatch = useDispatch();
  const { depositMoney, withdrewMoney } = bindActionCreators(
    actionCreator,
    dispatch
  );
  return (
    <div className="shop">
      <h1>Your shoping cart</h1>
      <button onClick={() => depositMoney(100)} className="shopBtn">
        +
      </button>
      <span>Your shoping cart</span>
      <button onClick={() => withdrewMoney(100)} className="shopBtn">
        -
      </button>
    </div>
  );
};

export default Shop;
