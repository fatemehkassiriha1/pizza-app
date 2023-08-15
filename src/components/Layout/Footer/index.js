import React from "react";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BiLogoTelegram } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <nav
      className="flex flex-col justify-center gap-3 items-center text-white 
      bg-black divide-y-2 p-6"
    >
      <ul className="flex justify-center gap-7 [&>*]:text-4xl w-full p-5">
        <li className="hover:bg-zinc-700 transition duration-300 rounded-full p-2">
          <Link to={"#"}>
            <AiOutlineTwitter />
          </Link>
        </li>
        <li className="hover:bg-zinc-700 transition duration-300 rounded-full p-2">
          <Link to={"#"}>
            <BiLogoTelegram />
          </Link>
        </li>
        <li className="hover:bg-zinc-700 transition duration-300 rounded-full p-2">
          <Link to={"#"}>
            <AiOutlineInstagram />
          </Link>
        </li>
        <li className="hover:bg-zinc-700 transition duration-300 rounded-full p-2">
          <Link to={"#"}>
            <AiOutlineWhatsApp />
          </Link>
        </li>
      </ul>
      <div className="flex justify-center text-sm w-full pt-3 font-serif">
        <span>&copy; 2023 fatemepizza.com</span>
      </div>
    </nav>
  );
};

export default Footer;
