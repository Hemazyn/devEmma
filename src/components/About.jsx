const About = () => {
     return (
          <div name="about" className="w-full bg-gradient-to-b from-gray-800 to-black text-white pt-5 lg:pt-0">
               <div className="h-full mx-auto flex flex-col justify-center w-[90%] lg:w-4/5 py-10">
                    <div className="pb-4">
                         <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
                    </div>
                    <div className="mt-8">
                         <p className="text-sm lg:text-2xl text-gray-400 text-justify">
                              <span className="font-bold">Crafting Exceptional User Experiences with a Passion for Frontend Development </span>
                              As a dedicated Frontend Developer, I have honed my skills in building dynamic and responsive web applications. My expertise lies in creating intuitive user interfaces and delivering seamless user experiences. With a deep understanding of frontend technologies, I am committed to pushing the boundaries of web development.
                         </p>
                         <p className="text-sm lg:text-2xl text-gray-400 text-justify mt-4">
                              Alongside my established proficiency in frontend web development, I am eagerly venturing into the world of mobile app development with both Flutter and React Native. This journey allows me to leverage my frontend skills to create cross-platform mobile applications that are both functional and visually appealing.
                         </p>
                         <p className="text-sm lg:text-2xl text-gray-400 text-justify mt-4">
                              Driven by a passion for continuous learning and a keen eye for detail, I aim to bridge the gap between web and mobile development. My goal is to deliver innovative and impactful applications that cater to users’ needs, combining the strengths of web technologies with the versatility of mobile platforms using Flutter and React Native. Let's connect and bring your ideas to life!
                         </p>
                    </div>
               </div>
          </div>
     );
}

export default About;