import { ADD_TO_Cart, REMOVE_TO_Cart } from "../constant";

export const addToCart = (data) => {
  return {
    type: ADD_TO_Cart,
    data: data,
  };
};

export const removeToCart = (data) => {
  return {
    type: REMOVE_TO_Cart,
    data: data,
  };
};
