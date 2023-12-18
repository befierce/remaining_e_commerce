import "./AddToCartButton.css";
import { useContext } from "react";
import CartContext from "../store/cart-context";

const AddToCartButton = (props) => {
  const cartctx = useContext(CartContext);

 
  // console.log(emailid);
  const addToCartHandler = async () => {
    cartctx.addItem(props.item);
    const emailid = localStorage.getItem("userEmail").replace(/[.@]/g, "");
    const response = await fetch(
      `https://crudcrud.com/api/a8fe2055922d40b2bf1a384e7b83be95/cart${emailid}`,
      {
        method: "POST",
        body: JSON.stringify(props.item),
        headers: { "content-type": "application/json" },
      }
    );
    console.log("response from crd crud", response);
  };

  return (
    <>
      <button onClick={addToCartHandler}>{props.description}</button>
    </>
  );
};

export default AddToCartButton;
