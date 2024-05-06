import React from "react";

const Button = ({ children, classes }) => {
  return (
    <button
      className={` bg-accent-500 px-5 py-2 text-primary-500 font-semibold hover:bg-accent-300 cursor-pointer  ${classes}`}
    >
      {children}
    </button>
  );
};

export default Button;
