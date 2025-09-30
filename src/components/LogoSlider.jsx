import React from "react";
import "./styles/LogoSlider.css"; // Import external CSS

const LogoSlider = () => {
  const logos = [
    "image_1.png",
    "image_2.jpg",
    "image_3.jpg",
    "image_4.jpg",
    "image_5.jpg"
  ];

  return (
    <div className="slider">
        <h2>Trusted By</h2>
      <div className="slide-track">
        
        {/* Original logos */}
        {logos.map((logo, i) => (
          <div key={`logo-${i}`} className="slide">
            <img src={logo} alt={`Logo ${i}`} />
          </div>
        ))}

        {/* Duplicate logos for seamless loop */}
        {logos.map((logo, i) => (
          <div key={`logo-dup-${i}`} className="slide">
            <img src={logo} alt={`Logo duplicate ${i}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
