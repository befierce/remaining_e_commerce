import CartContext from "./cart-context";
import { useContext, useEffect, useState } from "react";
import AuthContext from "./auth-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const authctx = useContext(AuthContext);
  const authContext = useContext(AuthContext); // Assuming AuthContext is imported

  useEffect(() => {
    if (!authctx.isLoggedIn) {
      setItems([]);
    }
  }, [authContext.isLoggedIn]);

  const addItemHandler = (item) => {
    console.log("additem handler working");
    const itemIndex = items.findIndex((cartItem) => cartItem.id === item.id);
    if (itemIndex !== -1) {
      setItems((prevItems) => {
        const updatedItems = [...prevItems];
        const updatedItem = {
          ...updatedItems[itemIndex],
          amount: updatedItems[itemIndex].amount + 1,
        };
        updatedItems[itemIndex] = updatedItem;
        return updatedItems;
      });
    } else {
      setItems((prevItems) => {
        return [...prevItems, { ...item, amount: 1 }];
      });
    }
  };
  const removeItemHandler = (id) => {
    setItems((prevItems) => {
      const itemIndex = prevItems.findIndex((cartItem) => cartItem.id === id);
      if (itemIndex === -1) {
        return prevItems;
      }
      const updatedItems = [...prevItems];
      if (updatedItems[itemIndex].amount > 1) {
        updatedItems[itemIndex] = {
          ...updatedItems[itemIndex],
          amount: updatedItems[itemIndex].amount - 1,
        };
      } else {
        updatedItems.splice(itemIndex, 1);
      }
      return updatedItems;
    });
  };

  const removeAllItemsHandler = () => {
    setItems([]);
  };
  const addItemsArrayHandler = (itemsArray) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];

      itemsArray.forEach((newItem) => {
        const itemIndex = updatedItems.findIndex(
          (cartItem) => cartItem.id === newItem.id
        );

        if (itemIndex !== -1) {
          updatedItems[itemIndex] = {
            ...updatedItems[itemIndex],
            amount: updatedItems[itemIndex].amount + 1,
          };
        } else {
          updatedItems.push({ ...newItem, amount: 1 });
        }
      });

      return updatedItems;
    });
  };

  const cartContextValue = {
    items: items,
    // totalItems:totalItems,
    // totalPrice:totalPrice,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    addItemsArray: addItemsArrayHandler,
    removeAllItems: removeAllItemsHandler,
  };

  console.log("items in the context", items);

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
