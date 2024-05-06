import React from "react";
import Container from "./Container";
import { DESTINATIONS } from "../../data";

const Destinations = () => {
  return (
    <div className="py-32">
      <Container>
        <div className="w-full flex flex-col gap-20">
          <div className="text-5xl font-semibold text-secondary-500 dm-sans text-center">
            Destinations We Love The <br /> Most
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DESTINATIONS.map((sp, i) => (
              <div className=" relative w-full aspect-[8/10] flex flex-col justify-end items-start p-6 group overflow-hidden">
                <img
                  src={sp.link}
                  alt=""
                  className="w-full h-full absolute top-0 left-0 object-cover brightness-50 group-hover:scale-105 transition-all duration-300"
                />
                <div className="text-2xl font-semibold text-primary-500 relative">
                  {sp.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Destinations;
