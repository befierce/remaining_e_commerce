import "./CartTotal.css"

const CartTotal = (props) => {
    return (
      <div className="total-amount-procedd-to-pay-button-container">
        <div className="total">
          <span>Total Amount</span>
          <br/>
          <span>{props.totalPrice.toFixed(2)}</span>
        </div>
        <button className="proceed-to-pay">
          Proceed To Pay
        </button>
      </div>
    );
  };
  
  export default CartTotal;