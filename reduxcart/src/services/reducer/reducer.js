import { ADD_TO_Cart, REMOVE_TO_Cart } from "../constant";

const initialState = {
  cartData: [],
};

export default function cartItems(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_Cart:
      return {
        ...state,
        cartData: [...state.cartData, { cardItems: action.data }],
      };
    case REMOVE_TO_Cart:
      const newCartData = [...state.cartData];
      newCartData.pop();
      return {
        ...state,
        cartData: newCartData,
      };
    default:
      return state;
  }
}
