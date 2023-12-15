import Modal from "../../ProductsCard/Modal";
import CartContext from "../../../store/cart-context";
import { useContext } from "react";


const Cart = (props) => {
  const cartctx = useContext(CartContext);
  console.log(cartctx);
  const cartItems = (
    <ul>
      <li>name</li>
      <li>amount</li>
    </ul>
  );

  return (
    <Modal onClick={props.onClose}>
      {cartItems}
      <div>
        <span>Total Amount</span>
      </div>
    </Modal>
  );
};

export default Cart;
