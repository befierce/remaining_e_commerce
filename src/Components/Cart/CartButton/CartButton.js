import carticon from "./shopping-cart.png";
import "./CartButton.css";
import Cart from "../CartComponent/Cart";
import { useState } from "react";

const CartButton = () => {
  const numberOfItems = 1;
  const [cartOpen, setCartOpen] = useState(false);
  const openCartHandler = () => {
    setCartOpen((prevstate)=>{return !prevstate});
  };
  const closeCartHandler = ()=>{
    setCartOpen(setCartOpen(!cartOpen));
  }
  return (
    <>
      <span>
        <button className="cart-button" onClick={openCartHandler}>
          <img src={carticon} alt="Cart" className="cart-icon" /> Cart
          <span className="numberofitems">{numberOfItems}</span>
        </button>
      </span>
      {cartOpen && <Cart onClose={closeCartHandler}/>}
    </>
  );
};

export default CartButton;
