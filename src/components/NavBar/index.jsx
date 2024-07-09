import "./style.css";
import CartWidget from "../CartWidget";
import { NavLink } from "react-router-dom";

function NavBar({ contador }) {
  return (
    <div className="NavBar">
      <nav>
        <ul className="links-nav">
          <li>Sobre</li>
          <NavLink
            to="/produtos"
            className={({ isActive }) => (isActive ? "link_ativo" : "")}
          >
            Produtos
          </NavLink>
        </ul>
      </nav>
      <CartWidget contador={contador} />
    </div>
  );
}

export default NavBar;
