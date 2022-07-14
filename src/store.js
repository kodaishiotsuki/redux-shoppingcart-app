import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/CartSlice";

//storeの中にreducerを作る
export const store = configureStore({
  reducer: {
    cart: cartReducer, //reducer
  },
});
