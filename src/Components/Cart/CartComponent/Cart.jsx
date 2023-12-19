import Modal from "../../ProductsCard/Modal";
import CartContext from "../../../store/cart-context";
import { useContext } from "react";
import "./Cart.css";
import CartTotal from "./CartTotal";

const Cart = (props) => {
  const cartctx = useContext(CartContext);
  const data = cartctx.items;

  // Calculate total amount
  const totalAmount = data.reduce((total, item) => {
    return total + item.price;
  }, 0);

  async function addItemHandler(item) {
    cartctx.addItem(item);
    console.log("add item to + ",item)
    delete item._id;
    console.log("add item to + ",item)
    const emailid = localStorage.getItem("userEmail").replace(/[.@]/g, "");
    const response = await fetch(
      `https://crudcrud.com/api/4f116e22f46c4e32b84ec1cc61be6702/cart${emailid}`,
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: { "content-type": "application/json" },
      }
    );
    console.log("response from crd crud when + button presseed", response);
  };
  const removeItemHandler = async (item)=>{
    const id = item._id;
    const emailid = localStorage.getItem("userEmail").replace(/[.@]/g, "");
    const removeResponse = await fetch(
      `https://crudcrud.com/api/4f116e22f46c4e32b84ec1cc61be6702/cart${emailid}/${id}`,
      {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      }
    );
    if(removeResponse.ok){
      const emailId = localStorage.getItem("userEmail").replace(/[.@]/g, "");
      const updatedResponse = await fetch(
        `https://crudcrud.com/api/4f116e22f46c4e32b84ec1cc61be6702/cart${emailId}`,
        {
          method: "GET",
        }
      )
      if(updatedResponse.ok){
        const data = await updatedResponse.json();
        cartctx.removeAllItems();
        cartctx.addItemsArray(data)
      }
    };
    
  }
  const cartItems = data.map((item) => (
    <div className="cart-items">
      <ul key={item.id}>
        <div className="itemTitleContainer">
          <li className="itemTitle">{item.title}</li>
          
          <li className="amount">Quantity: {item.amount}</li>
          <li>
            <button className="change_item_buttons_increase" onClick={()=>{addItemHandler(item)}}>+</button>
            <button className="change_item_buttons_decrease" onClick={()=>{removeItemHandler(item)}}>-</button>
          </li>
        </div>
      </ul>
    </div>
  ));

  return (
    <Modal onClick={props.onClose}>
    <div>
    {cartItems}
    </div>
      
        <CartTotal totalPrice={totalAmount} onHideCart={props.onHideCart} />
    </Modal>
  );
};

export default Cart;
