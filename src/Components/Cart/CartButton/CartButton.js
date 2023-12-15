import carticon from "./shopping-cart.png";
import "./CartButton.css";
import Cart from "../CartComponent/Cart";
import { useState } from "react";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const CartButton = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const cartctx = useContext(CartContext);

  const numberOfItems = cartctx.items.reduce((accumulator, item) => {
    return accumulator +  item.amount;
  }, 0);
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
