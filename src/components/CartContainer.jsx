import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartContainer = () => {
  //CartSlice.jsからstateを取得
  const { amount, cartItems, total } = useSelector((store) => store.cart); //分割代入
  // console.log(cartItems);
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>買い物かご</h2>
          <h4 className="empty-cart">何も入ってません...</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>買い物かご</h2>
      </header>
      <div>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} {...cartItem} /> //スプレッド構文で全て展開 title={cartItem.title}を省く
        ))}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            合計 <span>{total}円</span>
          </h4>
        </div>
        <button className="btn clear-btn">全削除</button>
      </footer>
    </section>
  );
};

export default CartContainer;
