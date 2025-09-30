import React from "react";
import "./styles/FeaturesSection.css";

const FeaturesSection = () => {
  const features = [
    {
      img: "inventory 2.jpg",
      bgClass: "bg-purple",
      shape: "rectangle",
      title: "#1 for frontline & desk teams",
      text: `Enterprises like Virgin Group unite frontline and desk-based employees 
             from across the globe in our complete, mobile-first employee 
             experience platform.`,
      linkText: "Virgin Group",
      linkUrl: "#",
    },
    {
      img: "inventory 3.jpg",
      bgClass: "bg-yellow",
      shape: "circle",
      title: "Boost engagement, elevate culture",
      text: `Inventory mgt App has a proven track record of boosting employee engagement, 
             helping customers like Mater Private Network build a “collaborative 
             community” that “changed its culture”.`,
      linkText: "Mater Private Network",
      linkUrl: "#",
    },
    {
      img: "inventory 4.jpg",
      bgClass: "bg-orange",
      title: "Unrivaled adoption rates",
      text: `Employees use Inventory mgt App because they want to, not because they have to, 
             allowing adoption rates to soar over 90% for organizations like Ryanair.`,
      linkText: "adoption rates to soar over 90%",
      linkUrl: "#",
    }
  ];

  return (
    <div className="features-section">
      {features.map((feature, i) => (
<div className="feature-card" key={i}>
  <div className="feature-img-wrapper">
    <div className={`feature-bg ${feature.bgClass} ${feature.shape}`}></div>
    {/* Decorative icons */}
    <img src="icons8-star.gif" alt="" className="decor decor-top-left" />
    <img src="icons8-hard-to-find-50.png" alt="" className="decor decor-bottom-right" />
    <img src="icons8-star-trek-symbol.svg" alt="" className="decor decor-top-right" />
    
    <img src={feature.img} alt={feature.title} className="feature-img" />
  </div>
  <h3 className="feature-title">{feature.title}</h3>
    <div className="feature-separator"></div>
  <p className="feature-text">
    {feature.text.split(feature.linkText)[0]}
    <a href={feature.linkUrl} className="feature-link">
      {feature.linkText}
    </a>
    {feature.text.split(feature.linkText)[1]}
  </p>
</div>
      ))}
    </div>
  );
};

export default FeaturesSection;
