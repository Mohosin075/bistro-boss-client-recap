import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavBar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  const navOption = (
    <>
      <li>
        <Link
          to={"/"}
          className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to={"/menu"}
          className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
        >
          menu
        </Link>
      </li>
      <li>
        <Link
          to={"/order/pizza"}
          className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
        >
          order
        </Link>
      </li>
    </>
  );

  // Array containing navigation items

  return (
    <div className="bg-black fixed z-10 max-w-7xl bg-opacity-30 text-white w-full">
      <div className="flex justify-between items-center h-24 mx-auto px-4 text-white">
        {/* Logo */}
        <h1 className="w-full text-3xl font-bold text-white">
          Bistro <span>Boss</span>
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex">{navOption}</ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-50 space-y-6"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] z-50"
          }
        >
          {/* Mobile Logo */}
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
            Bistro <span>Boss</span>
          </h1>

          {navOption}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
