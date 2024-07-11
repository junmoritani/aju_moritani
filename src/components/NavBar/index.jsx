import "./style.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
      <nav>
        <ul className="links-nav">
          <li>
            <NavLink
              to="/produtos"
              className={({ isActive }) => (isActive ? "link_ativo" : "")}
            >
              Produtos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Orders"
              className={({ isActive }) => (isActive ? "link_ativo" : "")}
            >
              Pedidos
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
