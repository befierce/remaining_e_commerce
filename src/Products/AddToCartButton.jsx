import "./AddToCartButton.css"
import { useContext } from "react";
import CartContext from "../store/cart-context";

const AddToCartButton = (props)=>{
    const cartctx = useContext(CartContext);
    
    // cartctx.items.push(props.item);
    const addToCartHandler = ()=>{
        cartctx.addItem(props.item);
        // console.log("add to cart",props.item);
    }

    return <>
        <button onClick={addToCartHandler}>{props.description}</button>
    </>
}

export default AddToCartButton;