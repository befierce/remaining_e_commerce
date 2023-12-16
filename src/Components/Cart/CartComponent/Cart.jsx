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
    <div className="cart-items">
      <ul key={item.id}>
        <div className="itemTitleContainer">
          <li className="itemTitle">{item.title}</li>
          <li className="amount">Quantity: {item.amount}</li>
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
