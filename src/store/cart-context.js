
import React from "react";

const CartContext = React.createContext({
    items:[],
    totalItems:0,
    totalPrice:0,
    addItem: ()=>{},
    removeItem: ()=>{}
})


export default CartContext;