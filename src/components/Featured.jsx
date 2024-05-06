import { FEATURED } from "../../data";
import Button from "./Button";
import Container from "./Container";

export default function Featured() {
  return (
    <div className="py-32 w-full  ">
      <Container>
        <div className="text-5xl font-semibold ">Exclusive Listing</div>
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {FEATURED.map((pr, i) => (
            <div
              key={i}
              className={`h-[240px] relative group overflow-hidden shadow-md rounded-md `}
            >
              <img
                src={pr.link}
                alt=""
                className="w-full h-full absolute object-cover group-hover:scale-105 transition-all duration-300 brightness-50"
              />
              <div className=" dm-sans flex h-full justify-between flex-col relative p-4">
                <div className="bg-accent-500 dm-sans text-primary-500 text-sm uppercase tracking-widest w-fit px-4 py-2 ">
                  {pr.tag}
                </div>
                <div className="flex flex-col gap-2 text-primary-500">
                  <span className="text-xl font-semibold">{pr.text}</span>
                  <hr />
                  <span className="text-xl ">{pr.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button classes="mt-10">Browse More Property</Button>
      </Container>
    </div>
  );
}
