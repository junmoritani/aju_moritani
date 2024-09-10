import "./style.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
      <nav>
        <ul className=" bg flex justify-center md:min-h-fit  min-h-[10vh] flex-row  items-center  links-nav text-xl font-semibold text-gray-900 ">
          <li>
            <NavLink
              to="/Produtos"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "link_ativo text-greenUmbu font-bold"
                    : "text-gray-800"
                } 
                hover:text-gray-500 px-4 py-2 rounded transition duration-300`
              }
            >
              produtos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Orders"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "link_ativo text-greenUmbu font-bold"
                    : "text-gray-800"
                } 
                hover:text-gray-500 px-4 py-2 rounded transition duration-300`
              }
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
