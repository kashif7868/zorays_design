import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";

export const rootReducer = combineReducers({
  cart: cartReducer,
});