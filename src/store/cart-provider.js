import CartContext from "./cart-context";
import { useState } from "react";


const CartProvider  = (props)=>{
    const [items, setItems] = useState([]);
    // itmes = [];

    const addItemHandler = (item)=>{
        console.log("additem handler working")
        setItems((prevItems)=>{
            return [...prevItems,item];
        })
    }
    const removeItemHandler = (id)=>{

    }


    const cartContextValue = {
        items:items,
        // totalItems:totalItems,
        // totalPrice:totalPrice,
        addItem:addItemHandler,
        removeItem:removeItemHandler
    }

    console.log("items in the context", items);


    return <CartContext.Provider value={cartContextValue}>{props.children}</CartContext.Provider>
}

export default CartProvider;