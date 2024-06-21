import React from "react";
import { About, Contact, Experience, Home, Navbar, Portfolio, SocialLinks } from "./components/index";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
};

export default App;
