import NavBar from "../NavBar";
import "./style.css";
import CartWidget from "../CartWidget";
// import Button from "../Button";
import { Link } from "react-router-dom";
import Logo from "../../imgs/Logo/Logo.png";
import SearchBar from "../Search";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  // Check if the current path matches the products page or its variants
  const isProductsPage = location.pathname.startsWith("/Produtos");

  return (
    <div className="px-8 py-3 flex flex-row justify-between items-center border-b-2">
      <Link to="/">
        <img className="w-52" src={Logo} alt="Logo" />
      </Link>
      {isProductsPage && <SearchBar />}
      <div className="flex flex-row justify-center items-center gap-12">
        <NavBar />
        <div>
          {/* <Button>
          <span>Login/Registre-se</span>
        </Button> */}
          <CartWidget />
        </div>
      </div>
    </div>
  );
}

export default Header;
