import React from "react";
import "./index.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import About from "./components/About";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About/>
      <Education/>
      <Experience/>
      <Footer></Footer>
    </>
  );
};

export default App;
