import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

import { NAV_LINKS } from "../../data";
import Container from "./Container";
import Logo from "./Logo";
import Button from "./Button";

export default function Footer() {
  return (
    <div className="pt-28 pb-10 bg-secondary-500 ">
      <Container>
        <div className="flex flex-col md:flex-row gap-16">
          <div className="flex w-full flex-col justify-center items-center mx-auto md:items-start sm:max-w-[400px]">
            <Logo />
            <div className="text-primary-100 mt-6 text-center md:text-start w-full ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, autem!
            </div>
            <div className="flex gap-6 mt-6 text-accent-500">
              <a href="">
                <AiFillFacebook size={30} />
              </a>
              <a href="">
                <AiFillInstagram size={30} />
              </a>
              <a href="">
                <AiFillLinkedin size={30} />
              </a>
            </div>
            <div className="flex items-center gap-4 mt-6">
              {NAV_LINKS.map((link, i) => (
                <a
                  key={i}
                  href={link.link}
                  className="transition-all duration-200 text-primary-100 hover:text-accent-500 "
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="flex-grow">
            <form className="w-full flex flex-col gap-6">
              <div className="flex flex-col gap-6 sm:flex-row w-full ">
                <input
                  type="text"
                  className="flex-1 h-10 text-primary-100 w-full py-4 outline-none bg-transparent border-b border-primary-100"
                  placeholder="Name"
                />
                <input
                  type="email"
                  className="flex-1 h-10 text-primary-100 w-full py-4 outline-none bg-transparent border-b border-primary-100"
                  placeholder="Email"
                />
              </div>
              <textarea
                className="flex-1 h-10 text-primary-100 w-full py-4 outline-none bg-transparent border-b border-primary-100"
                placeholder="Message"
              />
              <Button>Submit</Button>
            </form>
          </div>
        </div>
        <div className="w-full text-sm text-center text-primary-100 mt-12">
          &copy; All Rights Reserved.
        </div>
      </Container>
    </div>
  );
}
