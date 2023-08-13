import React,{useState} from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  const [openBar,setOpenBars] = useState(false)

  const handleClickBar = ()=>{
    setOpenBars(!openBar)
  }

  return (
    <nav className="bg-black w-full h-[10vh] relative">
      <div className="md:mx-36 mx-7 my-2 flex justify-between items-center">
        <div className="flex justify-center max-w-[70px]">
          <Link to="/">
            <img src={require("../assets/pizzaLogo.png")} alt="logo" />
          </Link>
        </div>
        <div className={`xs:block ${!openBar && "hidden"}`}>
          <div
            className="font-semibold text-white bg-black flex flex-col xs:flex-row justify-center  
                items-center xs:space-x-5 md:space-x-10 absolute xs:static top-[4.5rem] left-0 right-0 z-20 
                shadow-2xl shadow-neutral-800 xs:shadow-none [&>*]:p-3 [&>*]:w-full [&>*]:flex [&>*]:justify-center
                [&>*]:transition [&>*]:ease-in [&>*]:duration-300"
          >
            <Link className="hover:bg-zinc-800 xs:hover:bg-transparent rounded-lg" to="/"> Home </Link>
            <Link className="hover:bg-zinc-800 xs:hover:bg-transparent rounded-lg" to="/menu"> Menu </Link>
            <Link className="hover:bg-zinc-800 xs:hover:bg-transparent rounded-lg" to="/about">About</Link>
            <Link className="hover:bg-zinc-800 xs:hover:bg-transparent rounded-lg" to="/contact"> Contact</Link>
          </div>
        </div>
        <button id={openBar ? "open" : "close"} onClick={handleClickBar} className=" xs:hidden flex items-center cursor-pointer text-white">
          <FaBars size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
