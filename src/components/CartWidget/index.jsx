import { ShoppingCart } from "feather-icons-react";
import "./style.css";

function CartWidget({ contador }) {
  return (
    <div className="CartWidget">
      <div id="cart-icon">
        <ShoppingCart size="50" color="white" />
      </div>
      <span id="contador">{contador}</span>
    </div>
  );
}

export default CartWidget;
