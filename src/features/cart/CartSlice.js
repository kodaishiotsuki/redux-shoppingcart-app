import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

//買い物かごの初期化
const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
};

//sliceを定義(state,action,reducerを全て作ることができる)
const cartSlice = createSlice({
  name: "cart", //useSelectorで呼び出す
  initialState, //state
  reducers: {}, //reducer
});

export default cartSlice.reducer;
