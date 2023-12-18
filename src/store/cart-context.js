
import React from "react";

const CartContext = React.createContext({
    items:[],
    totalItems:0,
    totalPrice:0,
    addItem: ()=>{},
    removeItem: ()=>{},
    addItemsArray: ()=>{},
    removeAllItems: ()=>{}
})


export default CartContext;