import React from "react";

const Button = ({ children, type }) => {
  switch (type) {
    case "button":
      return (
        <button
          type={type}
          className="rounded-lg bg-zinc-700 text-white text-sm
       font-light flex justify-center px-4 py-2 hover:bg-zinc-500 transition
        duration-100 focus:shadow-lg focus:shadow-neutral-600"
        >
          {children}
        </button>
      );
      break;
    case "submit":
      return (
        <button
          type={type}
          className="rounded-lg bg-zinc-700 text-white font-light flex justify-center
           px-4 py-2 hover:bg-zinc-500 transition duration-100 focus:ring-2 focus:ring-zinc-600 
           focus:ring-offset-2"
        >
          {children}
        </button>
      );
      break;
    default:
      return (
        <button
          type={type}
          className="rounded-md bg-black text-white font-light 
            flex justify-center px-4 py-2 hover:bg-zinc-800 transition
            duration-100"
        >
          {children}
        </button>
      );
  }
};

export default Button;
