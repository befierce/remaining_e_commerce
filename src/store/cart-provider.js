import CartContext from "./cart-context";
import { useState } from "react";


const CartProvider  = (props)=>{
    const [items, setItems] = useState([]);

    const addItemHandler = (item)=>{
        console.log("additem handler working")
        const itemIndex = items.findIndex((cartItem)=>cartItem.id ===item.id)
        if(itemIndex !== -1){
            setItems((prevItems)=>{
                const updatedItems = [...prevItems];
                const updatedItem = {
                    ...updatedItems[itemIndex],
                    amount: updatedItems[itemIndex].amount + 1 
                };
                updatedItems[itemIndex] = updatedItem;
                return updatedItems;
            })
        }
        else{
            setItems((prevItems)=>{
                return [...prevItems,{...item,amount:1}];
            })
        }
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