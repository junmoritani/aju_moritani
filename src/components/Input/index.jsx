import React from "react";

function Input({ label, placeholder, type, value, onChange, className }) {
  return (
    <div className={className + " w-full flex flex-col"}>
      <label className="text-start px-1 w-full text-gray-700 font-normal">
        {label}
      </label>
      <input
        value={value}
        placeholder={placeholder}
        type={type || "text"}
        className="bg-bejeFundo pl-3 rounded-lg w-full h-10 placeholder-zinc-400 font-normal  focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-sky-500
      
     "
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

export default Input;
