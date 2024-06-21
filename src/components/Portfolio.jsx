import React from "react"
import { portfolio } from "../constants";
import { FaGithub, AiFillEye } from "../assets";
import { Link } from "react-router-dom";


const Portfolio = () => {
     return (
          <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:hscreen z-10 pt-5 pb-14">
               <div className="h-full mx-auto flex flex-col justify-center w-[90%] lg:w-4/5 pt-2 md:pt-0">
                    <div className="py-4">
                         <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                         <p className="py-6">Check out some of my work right here</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 px-0 lg:px-4 sm:px-0">
                         {portfolio.map(({ id, src, link, view }) => (
                              <div key={id} className="shadow-md shadow-gray-600 rounded-lg relative z-5">
                                   <img src={src} alt="" className="rounded-md duration-200 hover:scale-105 h-full" />
                                   <div className="flex items-center absolute top-0 rounded-md h-6 mt-1 ml-2 px-2 py-5 gap-1 border bg-zinc-500">
                                        <button>
                                             <Link to={link} target="_blank"><FaGithub size={20} /></Link>
                                        </button>
                                        <button>
                                             <Link to={view} target="_blank"><AiFillEye size={25} /></Link>
                                        </button>
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>
          </div >
     );
}

export default Portfolio;