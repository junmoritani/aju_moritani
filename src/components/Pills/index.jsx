import React from "react";
import { Link, useParams } from "react-router-dom";

function Pills({ types }) {
  const { filter } = useParams();
  return (
    <div>
      <Link
        to={`/Produtos`}
        className={filter === undefined ? "selected" : "unselected"}
      >
        Todos
      </Link>
      {types.map((item, index) => (
        <Link
          to={`/${item}`}
          key={index}
          className={filter === `/${item}` ? "selected" : "unselected"}
        >
          {item}
        </Link>
      ))}
    </div>
  );
}

export default Pills;
