import React from "react";
import Navbar from "./navbar";
import HeroSection from "./hero_section";
import SkillsSection from "./SkillsSection";
import Featured from "./Featured";
import Contact from "./contact"



function Home(){

  return (

    <>
    <Navbar/>
    <HeroSection/>
    <SkillsSection/>
    <Featured/>
   <Contact/>
    </>
  )
}

export default Home;