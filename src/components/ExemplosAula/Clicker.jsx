function Clicker({ contador, adicionar, clickTime }) {
  return (
    <div className="Clicker">
      <p>{contador}</p>
      <button onClick={adicionar}>+</button>
      <p>Last click at {clickTime}</p>
    </div>
  );
}

export default Clicker;
