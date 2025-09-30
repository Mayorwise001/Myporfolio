import React, { useRef, useEffect } from "react";
import "./styles/FeatureHighlight.css";
import { Link } from "react-router-dom";

const FeatureHighlight = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoEl = videoRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoEl) {
            if (entry.isIntersecting) {
              videoEl.play().catch(() => {}); // play when visible
            } else {
              videoEl.pause(); // pause when out of view
            }
          }
        });
      },
      { threshold: 0.5 } // play when 50% visible
    );

    if (videoEl) observer.observe(videoEl);

    return () => {
      if (videoEl) observer.unobserve(videoEl);
    };
  }, []);

  return (
    <section className="feature-highlight">
      {/* Centered Heading */}
      <h2 className="feature-highlight-heading">
        Simplify work. Empower your people.
      </h2>

      {/* Content row */}
      <div className="feature-highlight-content">
        {/* Left side video */}
        <div className="feature-highlight-video">
          <video
            ref={videoRef}
            src="featurehiglight.mp4"
            muted
            loop
            playsInline
            preload="auto"
          ></video>
        </div>

        {/* Right side text */}
        <div className="feature-highlight-text">
          <p>
            Inventory Management makes it simple to bring your people together, improve
            communication, and build a culture of trust and engagement across
            your organization.
          </p>
           <Link to='/login' className="feature-btn">Learn more</Link>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlight;
