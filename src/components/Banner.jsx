import { QUALITIES } from "../../data";
import Button from "./Button";
import Container from "./Container";
import Image from "../assets/banner.jpg";

export default function Banner() {
  return (
    <div className="bg-background-1 py-32 md:pt-28 md:pb-14">
      <Container>
        <div className="dm-sans w-full flex flex-col lg:flex-row gap-20">
          <div className="flex flex-col flex-1 gap-10 ">
            <div className="text-5xl text-secondary-500 font-semibold">
              We use Real Estate to show our appreciation of the world.
            </div>
            <div whileInView="open" className="text-secondary-100 text-xl">
              We provide equity and debt capital globally to back projects that
              make an impact.
            </div>
            <div className="grid grid-cols-2 gap-10">
              {QUALITIES.map((quality, i) => (
                <div className="w-full flex flex-col gap-6">
                  <span className="text-5xl font-semibold text-accent-500">
                    {quality.title}
                  </span>
                  <span className="text-secondary-100 text-xl">
                    {quality.description}
                  </span>
                </div>
              ))}
            </div>
            <div className="">
              <Button>Get In Touch</Button>
            </div>
          </div>
          <div className="flex-1 aspect-[4/2]  lg:aspect-[unset]  overflow-hidden  rounded-md relative group">
            <img
              src={Image}
              alt=""
              className="w-full h-full object-cover object-top absolute top-0 left-0 group-hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
