import React from "react";
import { techs } from "../constants";

const Experience = () => {
     return (
          <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full pt-5">
               <div className="h-full mx-auto flex flex-col justify-center w-[90%] lg:w-4/5 text-white">
                    <div>
                         <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">Experience</p>
                         <p className="py-6">These are the technologies I`ve  worked with</p>
                    </div>
                    <div className="w-full grid grid-cols-3 gap-8 text-center py-8 px-0 lg:px-2">
                         {techs.map(({ id, src, title, style }) => (
                              <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                   <img src={src} alt="" className="w-20 mx-auto" />
                                   <p className="mt-4">{title}</p>
                              </div>
                         ))}
                    </div>
               </div>
          </div>
     );
}

export default Experience;