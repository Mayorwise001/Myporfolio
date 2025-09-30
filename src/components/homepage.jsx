import React from "react";
import Navbar from "./navbar";
import HeroSection from "./hero_section";
import LogoSlider from "./LogoSlider";
import FeaturesSection from "./FeaturesSection";
import FeatureHighlight from "./FeatureHighlight";
import Footer from "./footer";
import SkillsSection from "./SkillsSection";



function Home(){

  return (

    <>
    <Navbar/>
    <HeroSection/>
    <SkillsSection/>
    <LogoSlider/>
    <FeaturesSection/>
    <FeatureHighlight/>
    <Footer/>
    </>
  )
}

export default Home;