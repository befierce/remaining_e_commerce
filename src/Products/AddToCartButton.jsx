import "./AddToCartButton.css"
import { useContext } from "react";
import CartContext from "../store/cart-context";

const AddToCartButton = (props)=>{
    const cartctx = useContext(CartContext);


    return <>
        <button>{props.description}</button>
    </>
}

export default AddToCartButton;