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

  const cartItems = data.map((item) => (
    <ul key={item.id}>
      <li>{item.title}</li>
      <li>Amount: {item.amount}</li>
    </ul>
  ));

  return (
    <Modal onClick={props.onClose}>
      {cartItems}
      <div>
        <CartTotal totalPrice={totalAmount} onHideCart={props.onHideCart} />
      </div>
    </Modal>
  );
};

export default Cart;
