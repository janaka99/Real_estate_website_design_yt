import React from "react";

const Container = ({ children, classes }) => {
  return (
    <div className={`w-full h-full max-w-screen-xl mx-auto px-10 ${classes} `}>
      {children}
    </div>
  );
};

export default Container;
