import React from "react";
import { About, Contact, Experience, Home, Navbar, Portfolio, SocialLinks, Working } from "./components/index";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Working />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
};

export default App;
