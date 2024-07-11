import NavBar from "../NavBar";
import "./style.css";
import CartWidget from "../CartWidget";
import Button from "../Button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <Link to="/">
        <h1>Logo</h1>
      </Link>

      <NavBar />
      <div>
        <Button>
          <span>Login/Registre-se</span>
        </Button>
        <CartWidget />
      </div>
    </div>
  );
}

export default Header;
