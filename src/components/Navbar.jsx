import { useState } from "react";
import logo from "../assets/LOGO.png";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=" bg-transparent md:bg-nav-bg py-4 xl:mx-6">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-5 xl:px-0">
        <img src={logo} alt="logo" />
        <div className="hidden md:block">
          <ul className="flex items-center gap-10 text-xl font-semibold list-none">
            <li>Blog</li>
            <li>Offer</li>
            <li>Airlines</li>
            <li>About</li>
          </ul>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="block text-3xl">
            {isMenuOpen ? <IoMdClose /> : <CiMenuFries />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden z-10 absolute top-0 left-0 bg-nav-bg py-2 px-10 rounded-md transform">
            <ul className="flex flex-col  gap-4 text-lg font-semibold list-none">
              <li>Blog</li>
              <li>Offer</li>
              <li>Airlines</li>
              <li>About</li>
            </ul>
            <button className="mt-2 bg-gradient-to-r from-blue-start from-80% to-blue-end to-100% py-2 px-8 text-white text-xl font-medium rounded-[10px] border-none">
              Sign in
            </button>
          </div>
        )}
        <button className="md:block hidden bg-gradient-to-r from-blue-start from-80% to-blue-end to-100% py-2 px-8 text-white text-xl font-medium rounded-[10px] border-none">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
