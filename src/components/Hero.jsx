import React from "react";
import HeroBg from "../assets/hero2.jpg";
import Container from "./Container";
import { IoLocation } from "react-icons/io5";
import Button from "./Button";
const Hero = () => {
  return (
    <div className="min-h-screen  w-screen relative flex flex-col">
      <img
        src={HeroBg}
        alt=""
        className="absolute  w-full h-full object-cover brightness-[0.2]"
      />
      <Container classes="flex-1 relative pt-24 flex flex-col gap-4 md:gap-10 justify-center">
        <h1 className="text-6xl font-semibold text-primary-500 max-w-3xl">
          Find a <span className="text-accent-500">perfect Home</span> to live
          with your family
        </h1>
        <p className="text-xl max-w-xl text-primary-100 ">
          Our mission is to engage in issues that are of concern to individuals
        </p>
        <div className="h-16 p-2 bg-primary-500 flex items-center max-w-xl ">
          <IoLocation className="text-accent-500 text-4xl mr-2 " />
          <input
            type="text"
            placeholder="Search"
            className="flex-1 outline-none border-none"
          />
          <Button>Search</Button>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
