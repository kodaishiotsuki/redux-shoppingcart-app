import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  //{amount}=>store.cart.amount
  const { amount } = useSelector((store) => store.cart); //sliceで定義したname(cart)
  // console.log(amount);

  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Shopping</h3>
        <div className="nav-container">
          ロゴ
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
