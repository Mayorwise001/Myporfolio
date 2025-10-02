import React from "react";
import "./styles/hero-section.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="gsk-hero" id="about">
      {/* Decorative SVG shape */}
      <svg
        className="gsk-hero-svg"
        width="220"
        height="220"
        viewBox="0 0 220 220"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="110" cy="110" r="100" fill="#f72585" opacity="0.25" />
        <circle cx="110" cy="110" r="60" fill="#7209b7" opacity="5.12" />
      </svg>

      <div className="gsk-hero-content">
        <span className="gsk-hero-badge" aria-label="About">About</span>
        <span className="gsk-hero-eyebrow">Hi,</span>
        <h1 className="gsk-hero-title">
          <span className="gradient-text">I’m Mayowa Joseph Tomosori</span><h1 class="developer-roles">
  <span class="role role-1">A Frontend Developer</span>
  <span class="role role-2">A Backend Developer</span>
  <span class="role role-3">A Full Stack Developer</span>
</h1>
        </h1>

        <p className="gsk-hero-desc">
          I am a passionate full-stack web developer with experience in building visually
          stunning and highly functional applications. <br />
          <strong>
            From WordPress beginnings to mastering MERN stack, I constantly expand my
            skills and love solving real-world problems through technology.
          </strong>
        </p>

   


        <a
          href="#featured-projects"
          className="gsk-hero-cta info-btn"
          aria-label="Go to projects page"
        >
          View My Projects
          <svg
            width="22"
            height="22"
            fill="none"
            viewBox="0 0 24 24"
            className="cta-arrow"
            aria-hidden="true"
          >
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
</a>
      </div>

      <svg
        className="gsk-hero-svg"
        width="220"
        height="220"
        viewBox="0 0 220 220"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="110" cy="110" r="100" fill="#e0e7ef" opacity="0.25" />
        <circle cx="110" cy="110" r="60" fill="#ff7900" opacity="0.12" />
      </svg>

      <div className="gsk-hero-image-wrapper">
        <img
          src="My pic rem.jpg"
        // Replace with your photo
          alt="Portrait of Joseph Tomosori"
          className="gsk-hero-image"
        />
      </div>
    </section>
  );
};

export default HeroSection;
