import "./style.css";

function Button({ children, className, onClick }) {
  return (
    <div className="Button">
      <button className={className} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

export default Button;
