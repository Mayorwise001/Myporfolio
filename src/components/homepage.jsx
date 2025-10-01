import React from "react";
import Navbar from "./navbar";
import HeroSection from "./hero_section";
import LogoSlider from "./LogoSlider";
import FeaturesSection from "./FeaturesSection";
import FeatureHighlight from "./FeatureHighlight";
import Footer from "./footer";
import SkillsSection from "./SkillsSection";
import Featured from "./Featured";



function Home(){

  return (

    <>
    <Navbar/>
    <HeroSection/>
    <SkillsSection/>
    <Featured/>
    <LogoSlider/>
    <FeaturesSection/>
    <FeatureHighlight/>
    <Footer/>
    </>
  )
}

export default Home;