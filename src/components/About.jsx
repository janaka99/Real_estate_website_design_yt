import React from "react";
import Container from "./Container";
import Button from "./Button";

const About = () => {
  return (
    <Container classes="py-32 grid grid-cols-1 gap-20 md:grid-cols-2 text-center md:text-left">
      <div className="text-5xl leading-[60px] font-semibold text-secondary-500 ">
        We build quality real estate projects <br />
        <span className="text-accent-500">Since 1999'</span>
      </div>
      <div className="">
        <p className=" text-lg text-secondary-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          accusamus, in, facilis delectus laborum ullam necessitatibus officiis,
          provident ratione ipsum voluptates error animi. Adipisci ipsum quasi
          aperiam voluptates sequi repellat!
        </p>
        <Button classes="mt-10">About Us</Button>
      </div>
    </Container>
  );
};

export default About;
