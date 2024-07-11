import { ShoppingCart } from "feather-icons-react";
import "./style.css";
import { Link } from "react-router-dom";

function CartWidget() {
  return (
    <div className="CartWidget">
      <div id="cart-icon">
        <Link to="/Checkout">
          <ShoppingCart size="50" color="white" />
        </Link>
      </div>
      <span id="contador">2</span>
    </div>
  );
}

export default CartWidget;
