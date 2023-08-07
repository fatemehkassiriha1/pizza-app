import React,{useState} from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Logo from "../assets/pizzaLogo.png";
const Navbar = () => {
  const [openBar,setOpenBars] = useState(false)

  const handleClickBar = ()=>{
    setOpenBars(!openBar)
  }

  return (
    <nav className="bg-black w-full relative">
      <div className="md:mx-36 mx-7 my-2 flex justify-between">
        <div className="flex justify-center w-[70px]">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className={`${openBar ? "xs:flex-row flex items-center space-x-5 font-semibold text-white " : "hidden"}`}>
          <ul
            className="bg-black flex flex-col xs:flex-row justify-center p-3 xs:py-0 
                items-center xs:space-x-5 md:space-x-10 absolute xs:static top-[4.5rem] left-0 right-0 z-20 
                shadow-2xl shadow-slate-300 xs:shadow-none [&>*]:p-3 [&>*]:w-full [&>*]:flex [&>*]:justify-center [&>*]:transition [&>*]:ease-in [&>*]:duration-300"
          >
            <Link className="hover:bg-zinc-800 xs:hover:bg-transparent rounded-lg" to="/"> Home </Link>
            <Link className="hover:bg-zinc-800 xs:hover:bg-transparent rounded-lg" to="/menu"> Menu </Link>
            <Link className="hover:bg-zinc-800 xs:hover:bg-transparent rounded-lg" to="/about">About</Link>
            <Link className="hover:bg-zinc-800 xs:hover:bg-transparent rounded-lg" to="/contact"> Contact</Link>
          </ul>
        </div>
        <button id={openBar ? "open" : "close"} onClick={handleClickBar} className=" xs:hidden flex items-center cursor-pointer text-white">
          <FaBars size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
