import "./CartTotal.css"

const CartTotal = (props) => {
    return (
      <>
        <div className="total">
          <span>Total Amount</span>
          <span>{props.totalPrice.toFixed(2)}</span>
        </div>

      </>
    );
  };
  
  export default CartTotal;