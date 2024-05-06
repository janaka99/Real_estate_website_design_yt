import React, { useState } from "react";
import Logo from "./Logo";
import { NAV_LINKS } from "../../data";
import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

const Header = () => {
  const [isNavClosed, setisNavClosed] = useState(true);

  return (
    <div className="absolute w-full h-24 z-10">
      <nav className="max-w-screen-xl mx-auto px-10 h-full flex justify-between items-center">
        <Logo />
        <ul className="hidden md:flex items-center gap-10 text-primary-500">
          {NAV_LINKS.map((link, i) => (
            <li className="capitalize hover:text-accent-500">
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
          <li>
            <Button>Get In Touch</Button>
          </li>
        </ul>
        <button
          className="md:hidden text-4xl text-primary-500 z-20"
          onClick={() => {
            setisNavClosed(!isNavClosed);
          }}
        >
          {isNavClosed ? (
            <GiHamburgerMenu />
          ) : (
            <CgClose className="text-secondary-500" />
          )}
        </button>
      </nav>
      <ul
        style={{
          transform: isNavClosed ? "translateX(100%)" : "translateX(0)",
        }}
        className="md:hidden text-primary-500 absolute top-0 right-0 z-10 flex flex-col pt-32 text-2xl pl-10 gap-10 h-screen w-80 bg-primary-500 transition-all duration-300"
      >
        {NAV_LINKS.map((link, i) => (
          <li className="capitalize text-secondary-500 hover:text-accent-500">
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
