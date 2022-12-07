import React, { useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    document.title = "Nadirhan Şahin | Computer Engineering Student";
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
