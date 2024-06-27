import "./style.css";
import CartWidget from "../CartWidget";

function NavBar({ contador }) {
  return (
    <div className="NavBar">
      <nav>
        <ul className="links-nav">
          <li>Sobre</li>
          <li>Produtos</li>
        </ul>
      </nav>
      <CartWidget contador={contador} />
    </div>
  );
}

export default NavBar;
