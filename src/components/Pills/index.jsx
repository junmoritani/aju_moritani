import React from "react";
import { Link, useParams } from "react-router-dom";

function Pills({ types }) {
  const { filter } = useParams();
  return (
    <div className="flex flex-row w-3/4 justify-between  items-center mb-12 mt-5">
      <Link
        to={`/Produtos`}
        className={
          filter === undefined
            ? "bg-greenUmbu shadow-sm  text-lg font-semibold text-white px-8 py-1 rounded-full"
            : "bg-bejeFundo shadow-sm  text-lg font-semibold text-greenUmbu px-8 py-1 rounded-full"
        }
      >
        Todos
      </Link>
      {types.map((item, index) => (
        <Link
          to={`/Produtos/${item}`}
          key={index}
          className={
            filter === `${item}`
              ? "bg-greenUmbu shadow-sm  text-lg font-semibold text-white px-8 py-1 rounded-full"
              : "bg-bejeFundo shadow-sm text-lg font-semibold text-greenUmbu px-8 py-1 rounded-full"
          }
        >
          {item}
        </Link>
      ))}
    </div>
  );
}

export default Pills;
