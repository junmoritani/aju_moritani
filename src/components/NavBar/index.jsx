import "./style.css";
import CartWidget from "../CartWidget";

function NavBar() {
  return (
    <div className="NavBar">
      <nav>
        <ul className="links-nav">
          <li>Sobre</li>
          <li>Produtos</li>
        </ul>
      </nav>
      <CartWidget />
    </div>
  );
}

export default NavBar;
