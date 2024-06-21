import "./style.css";
import CartWidget from "../CartWidget";

function NavBar() {
  return (
    <div className="NavBar">
      <h1>Logo</h1>
      <nav>
        <ul>
          <li>Sobre</li>
          <li>Produtos</li>
        </ul>
      </nav>
      <CartWidget />
    </div>
  );
}

export default NavBar;
