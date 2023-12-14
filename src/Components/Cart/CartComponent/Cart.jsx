import Modal from "../../ProductsCard/Modal";

const Cart = (props) => {
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
