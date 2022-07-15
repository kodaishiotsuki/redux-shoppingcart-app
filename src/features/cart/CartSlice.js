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
  reducers: {
    //clearCart:Action名
    clearCart: (state) => {
      // state.cartItems = [];
      // state.amount = 0;
      // state.total = 0;
      return { cartItems: [], amount: 0, total: 0 };
    },
    removeItem: (state, action) => {
      // console.log(action);//actionはtype,payloadを含む
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId); //選択したid以外を残す(選択したid削除)
    },
  },
});
// console.log(cartSlice);

export const { clearCart, removeItem } = cartSlice.actions; //console.log(cartSlice)参照
export default cartSlice.reducer;
