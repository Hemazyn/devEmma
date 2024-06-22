import React, { useState } from "react"
import { portfolioFlutter, portfolioReact } from "../constants";
import { FaGithub, AiFillEye } from "../assets";
import { Link } from "react-router-dom";

const Portfolio = () => {
     const [taskType, setTaskType] = useState('react');

     return (
          <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:hscreen z-10 pt-5 pb-14">
               <div className="h-full w-[90%] lg:w-4/5 mx-auto flex flex-col justify-center pt-2 md:pt-0">
                    <div className="py-4">
                         <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                         <p className="py-6">Check out some of my work right here</p>
                    </div>
                    <div className="w-full md:w-2/5 flex justify-center mb-2">
                         <div className={`w-full rounded font-bold animate-pulse cursor-pointer ${taskType === 'react' ? 'underline underline-offset-8' : ''} bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent`}
                              onClick={() => setTaskType('react')}>
                              React
                         </div>
                         <div className={`w-full rounded font-bold animate-pulse cursor-pointer ${taskType === 'react' ? 'underline underline-offset-8' : ''} bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent`}
                              onClick={() => setTaskType('react')}>
                              Flutter
                         </div>
                         <div className={`w-full rounded font-bold animate-pulse cursor-pointer ${taskType === 'react' ? 'underline underline-offset-8' : ''} bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent`}
                              onClick={() => setTaskType('react')}>
                              R- Native
                         </div>
                    </div>
                    {taskType === 'react' && (
                         <div className="grid md:grid-cols-3 gap-8 mt-3">
                              {portfolioReact.map(({ id, src, link, view }) => (
                                   <div key={id} className="h-[250px] md:h-full shadow-md shadow-gray-600 rounded-lg relative z-5">
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
                              ))
                              }
                         </div>
                    )}
                    {taskType === 'flutter' && (
                         <div className="grid md:grid-cols-3 gap-8 mt-3">
                              {portfolioFlutter.map(({ id, src, link }) => (
                                   <div key={id} className="h-[250px] md:h-full shadow-md shadow-gray-600 rounded-lg relative z-5">
                                        <img src={src} alt="" className="h-full w-full rounded-md duration-200 hover:scale-105" />
                                        <button className="flex items-center absolute top-0 rounded-md h-6 mt-1 ml-2 px-2 py-5 gap-1 border bg-zinc-500">
                                             <Link to={link} target="_blank"><FaGithub size={20} /></Link>
                                        </button>
                                   </div>
                              ))}
                         </div>
                    )}
                    {taskType === 'native' && (
                         <div className="h-[300px] flex justify-center items-center">
                              <h2 className="text-red">Project will be uploaded soon!</h2>
                         </div>
                    )}
               </div>
          </div >
     );
}

export default Portfolio;