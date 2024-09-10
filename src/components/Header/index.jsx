import NavBar from "../NavBar";
import "./style.css";
import CartWidget from "../CartWidget";
// import Button from "../Button";
import { Link } from "react-router-dom";
import Logo from "../../imgs/Logo/Logo.png";
import SearchBar from "../Search";
import { useLocation } from "react-router-dom";
import { Menu, X } from "feather-icons-react";
import { useState } from "react";

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Check if the current path matches the products page or its variants
  const isProductsPage = location.pathname.startsWith("/Produtos");

  function onToggleMenu(e) {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="  px-8 py-3 flex flex-col md:flex-row justify-between items-center w-[92%] mx-auto border-b-2">
      <Link to="/">
        <img className="w-52" src={Logo} alt="Logo" />
      </Link>

      {/* Wrapper for Search and Nav elements */}
      <div className="flex   w-full flex-col md:flex-row  items-center justify-end">
        {/* Search Bar */}
        {isProductsPage && (
          <div className="  w-full md:px-5 order-2 md:order-1 mt-4 md:mt-0">
            <SearchBar />
          </div>
        )}

        {/* Navigation and Cart */}
        <div className="flex justify-between items-center md:gap-10 order-1 md:order-2">
          {/* <div
            className={`md:static absolute md:min-h-fit min-h-[25vh] right-0 ${
              isMenuOpen ? "top-[12%]" : "top-[-100%]"
            } md:w-auto w-[30vw] flex md:flex-row flex-col bg-white items-center gap-10`}
          >
            <NavBar />
            <div className="p-5">
              <CartWidget />
            </div>
          </div> */}
          <div>
            <NavBar />
          </div>

          <CartWidget />
        </div>
      </div>

      {/* {isMenuOpen ? (
        <X
          onClick={onToggleMenu}
          className="text-3xl cursor-pointer md:hidden"
        />
      ) : (
        <Menu
          onClick={onToggleMenu}
          className="text-3xl cursor-pointer md:hidden"
        />
      )} */}
    </div>
  );
}

export default Header;
