import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/CartSlice";
import modalReducer from "./features/modal/ModalSlice";

//storeの中にreducerを作る
//sliceを作成時に忘れず定義!!
export const store = configureStore({
  reducer: {
    cart: cartReducer, //reducer
    modal: modalReducer,
  },
});
