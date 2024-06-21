import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
     const form = useRef();
     const isFormValid = () => {
          const inputs = form.current.querySelectorAll(
               "input[required], textarea[required]",
          );
          for (const input of inputs) {
               if (!input.validity.valid) {
                    return false;
               }
          }
          return true;
     };
     const sendEmail = (e) => {
          e.preventDefault();
          if (isFormValid()) {
               emailjs
                    .sendForm(
                         "service_xd1e2o5",
                         "template_qq1qffk",
                         form.current,
                         "2lqDOVZNlk1IdjjhZ",
                    )
                    .then(
                         (result) => {
                              console.log(result.text);
                              console.log("message sent");
                              form.current.reset();
                         },
                         (error) => {
                              console.log(error.text);
                         },
                    );
          } else {
               console.log("Form is not valid");
          }
     };

     return (
          <div name="contact" className="w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white">
               <div className="w-full mx-auto max-w-screen-lg flex flex-col justify-center">
                    <div className="p-8">
                         <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
                         <p className="py-6">Let`s grab some coffee together.</p>
                    </div>
                    <div className="flex justify-center items-center">
                         <form ref={form} onSubmit={sendEmail} method="POST" className="flex flex-col w-full md:w-1/2">
                              <input type="text" name="fullname" placeholder="Enter your name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" required />
                              <input type="email" name="address" placeholder="Enter your email" className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" required />
                              <textarea name="message" rows="10" className="p-4 bg-transparent border-2 rounded-md text-white focus:outline-none" placeholder="Enter your message" required>
                              </textarea>
                              <button className="text-white bg-gradient-to-b from-green-500 to-lime-400 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Let`s talk</button>
                         </form>
                    </div>
               </div>
          </div>
     );
}

export default Contact;