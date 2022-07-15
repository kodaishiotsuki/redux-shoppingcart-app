import { createSlice } from "@reduxjs/toolkit";

//初期値
const initialState = {
  isOpen: false,
};

//sliceを定義(state,action,reducerを全て作ることができる)
const modalSlice = createSlice({
  name: "modal", //useSelector
  initialState, //state
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
  },
});
// console.log(modalSlice)

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
