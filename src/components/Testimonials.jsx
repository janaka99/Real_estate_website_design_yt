import { TESTIMONIALS } from "../../data";
import Container from "./Container";

const Testimonials = () => {
  return (
    <div className="bg-background-1  py-32  overflow-hidden">
      <Container>
        <div className="w-full flex flex-col lg:flex-row gap-12">
          <div className="w-mx">
            <div className="text-5xl dm-sans font-semibold text-secondary-500 flex flex-col">
              <div className="whitespace-nowrap">Don't take</div>
              <div className="whitespace-nowrap">Our Word.</div>
            </div>
            <div className="text-secondary-100 mt-4 text-xl">
              TAKE THEIRS...
            </div>
          </div>
          <div className="flex flex-col w-full gap-10 ">
            {TESTIMONIALS.map((ts, i) => (
              <div
                className={`  text-secondary-100 p-6 md:w-[90%]  shadow-md ${
                  i != 1 && "self-end"
                }`}
              >
                <div className=" mx-auto">"{ts.text}"</div>

                <div
                  className={`flex  gap-2 items-center mt-6 ${
                    i == 1 && "justify-end"
                  }`}
                >
                  <div className="w-10 h-10 rounded-full ">
                    <img
                      src={ts.src}
                      alt=""
                      className="w-full h-full rounded-full object-cover "
                    />
                  </div>
                  <div className="">
                    <div className="text-base text-left font-semibold text-secondary-500">
                      {ts.name}
                    </div>
                    <div className="text-sm text-left text-secondary-500">
                      {ts.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
