import "./AddToCartButton.css";
import { useContext } from "react";
import CartContext from "../store/cart-context";

const AddToCartButton = (props) => {
  const cartctx = useContext(CartContext);

 
  // console.log(emailid);
  const addToCartHandler = async () => {
    cartctx.addItem(props.item);
    console.log("ADD ITEM TO CART BUTTON", props.item);
    const emailid = localStorage.getItem("userEmail").replace(/[.@]/g, "");
    const response = await fetch(
      `https://crudcrud.com/api/4f116e22f46c4e32b84ec1cc61be6702/cart${emailid}`,
      {
        method: "POST",
        body: JSON.stringify(props.item),
        headers: { "content-type": "application/json" },
      }
    );
    console.log("response from crd crud when add item to cart pressed", response);
  };

  return (
    <>
      <button onClick={addToCartHandler}>{props.description}</button>
    </>
  );
};

export default AddToCartButton;
