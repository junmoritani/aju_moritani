import { ShoppingCart } from "feather-icons-react";
import "./style.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function CartWidget() {
  const { cartQtd } = useCart();

  return (
    <div className="CartWidget">
      <div id="cart-icon">
        <Link to="/Checkout">
          <ShoppingCart size="50" color="white" />
        </Link>
      </div>
      {cartQtd() > 0 ? <span className="contador">{cartQtd()}</span> : ""}
    </div>
  );
}

export default CartWidget;
