import React from "react";

export const Home = (props) => {
  return (
    <div>
      <h1> Home component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://img6.gadgetsnow.com/gd/images/products/additional/large/G76850_View_1/mobiles/smartphones/apple-iphone-xs-max-256-gb-4-gb-ram-.jpg" />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() =>
              props.addToCartHandler({ price: 1000, name: "Iphone xs max" })
            }
          >
            Add To Cart
          </button>
          <button
            style={{ backgroundColor: "purple", marginTop: "10px" }}
            onClick={() => props.removeToCartHandler()}
          >
            Remove to cart
          </button>
        </div>
      </div>
    </div>
  );
};
