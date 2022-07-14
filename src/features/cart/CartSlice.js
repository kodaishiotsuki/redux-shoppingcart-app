import { createSlice } from "@reduxjs/toolkit";

//買い物かごの初期化
const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
};

//sliceを定義(state,action,reducerを全て作ることができる)
const cartslice = createSlice({
  name: "cart", //useSelectorで呼び出す
  initialState, //state
  reducers: {}, //reducer
});
