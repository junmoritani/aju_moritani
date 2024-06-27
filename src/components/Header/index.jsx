import NavBar from "../NavBar";
import "./style.css";

function Header({ contador }) {
  return (
    <div className="Header">
      <h1>Logo</h1>
      <NavBar contador={contador} />
    </div>
  );
}

export default Header;
