import React, { useState, useEffect } from "react";
import { links } from "../constants";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
     const [nav, setNav] = useState(false);
     const [scrolled, setScrolled] = useState(false);

     useEffect(() => {
          const handleScroll = () => {
               if (window.scrollY > 0) {
                    setScrolled(true);
               } else {
                    setScrolled(false);
               }
          };
          window.addEventListener("scroll", handleScroll);
          return () => {
               window.removeEventListener("scroll", handleScroll);
          };
     }, []);

     return (
          <div className={`flex justify-between items-center w-full h-20 px-4 lg:px-12 text-white bg-black ${scrolled ? "fixed top-0 z-50" : "relative"}`}>
               <div>
                    <a href="https://devemma.netlify.app" rel="noreferrer" target="_blank" className="text-5xl font-signature ml-2 cursor-pointer">
                         devEmma
                    </a>
               </div>
               <ul className="hidden md:flex">
                    {links.map(({ id, link }) => (
                         <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
                              <Link to={link} smooth duration={500}>
                                   {link}
                              </Link>
                         </li>
                    ))}
               </ul>
               <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
               </div>
               {nav && (
                    <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                         {links.map(({ id, link }) => (
                              <li key={id} className="px-4 cursor-pointer capitalize py-6 text-2xl">
                                   <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                                        {link}
                                   </Link>
                              </li>
                         ))}
                    </ul>
               )}
          </div>
     );
};

export default Navbar;