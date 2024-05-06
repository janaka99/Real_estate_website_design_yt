import React from "react";
import Container from "./Container";
import { PROPERTIES } from "../../data";

const Properties = () => {
  return (
    <div className="bg-background-1 py-40">
      <Container>
        <div className="text-5xl leading-[60px] font-semibold text-secondary-500 ">
          Our Properties
        </div>
        <div className="mt-20 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
          {PROPERTIES.map((property, index) => (
            <div
              className="bg-primary-500 flex flex-col items-center p-10 shadow-md hover:shadow-xl transition-all duration-300"
              key={index}
            >
              <property.icon className="text-5xl text-accent-500" />
              <h3 className="text-xl text-secondary-500 font-semibold mt-5 text-center ">
                {property.type}
              </h3>
              <p className="mt-2 text-secondary-100">{property.count}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Properties;
