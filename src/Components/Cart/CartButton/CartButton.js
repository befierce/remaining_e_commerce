import carticon from "./shopping-cart.png";
import "./CartButton.css";
import Cart from "../CartComponent/Cart";
import { useState } from "react";
import { useContext, useEffect } from "react";
import CartContext from "../../../store/cart-context";
import AuthContext from "../../../store/auth-context";

const CartButton = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const cartctx = useContext(CartContext);
  const authctx = useContext(AuthContext);
  
  // console.log()
  let data ;
  const fetchCartData = async () => {
    try {
      const emailId = localStorage.getItem("userEmail").replace(/[.@]/g, "");
      const response = await fetch(
        `https://crudcrud.com/api/a8fe2055922d40b2bf1a384e7b83be95/cart${emailId}`,
        {
          method: "get",
        }
      );
      if (response.ok) {
        data = await response.json();
        console.log("fetcheddata", data);
        cartctx.removeAllItems();
        cartctx.addItemsArray(data)
        //ad that data to the context
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!authctx.isLoggedIn) {
      // alert("log in pleasse")
    }
    else if(authctx.isLoggedIn){
      fetchCartData();
    }
  },[authctx.isLoggedIn]); 


  const numberOfItems = cartctx.items.reduce((accumulator, item) => {
    return accumulator + item.amount;
  }, 0);
  const openCartHandler = () => {
    setCartOpen((prevstate) => {
      return !prevstate;
    });
  };
  const closeCartHandler = () => {
    setCartOpen(setCartOpen(!cartOpen));
  };
  return (
    <>
      <span>
        <button className="cart-button" onClick={openCartHandler}>
          <img src={carticon} alt="Cart" className="cart-icon" /> Cart
          <span className="numberofitems">{numberOfItems}</span>
        </button>
      </span>
      {cartOpen && <Cart onClose={closeCartHandler} />}
    </>
  );
};

export default CartButton;
