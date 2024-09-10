import { ShoppingCart } from "feather-icons-react";
import "./style.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function CartWidget() {
  const { cartQtd } = useCart();

  return (
    <div className="   justify-center items-center size-16  p-2 rounded-full bg-lime-800">
      <div id="cart-icon">
        <Link
          className=" flex pt-2 justify-center items-center  h-full"
          to="/Checkout"
        >
          <ShoppingCart size="37" color="white" />
        </Link>
      </div>
      {cartQtd() > 0 ? (
        <span className="bg-red-500  w-6 h-6 rounded-full relative bottom-16 left-10 flex justify-center items-center text-center text-white font-bold">
          {cartQtd()}
        </span>
      ) : (
        ""
      )}
    </div>
  );
}

export default CartWidget;
