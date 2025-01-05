import React from "react";
import Navbar from "./Componenets/Navbar/Navbar";
import Hero from "./Componenets/Hero/Hero";
import About from "./Componenets/About/About";
import MyWork from "./Componenets/MyWork/MyWork";
import Contact from "./Componenets/Contact/Contact";
import Footer from "./Componenets/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <MyWork></MyWork>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default App;
