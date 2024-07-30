import "./style.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
      <nav>
        <ul className="links-nav text-xl font-semibold text-gray-900 ">
          <li>
            <NavLink
              to="/produtos"
              className={({ isActive }) => (isActive ? "link_ativo" : "")}
            >
              produtos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Orders"
              className={({ isActive }) => (isActive ? "link_ativo" : "")}
            >
              pedidos
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
