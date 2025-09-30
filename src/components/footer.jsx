import React, { useState } from "react";
import "./styles/footer.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email");
      return;
    }
    // Replace with API call
    alert(`✅ Thanks for subscribing, ${email}`);
    setEmail("");
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* About */}
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We are committed to simplifying work and empowering people by
            creating digital solutions that drive engagement, productivity, and
            growth across organizations.
          </p>
        </div>

        {/* Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#help">Help Center</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h3>Newsletter</h3>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
          <div className="social-icons">
            <a href="https://facebook.com"><FaFacebook /></a>
            <a href="https://twitter.com"><FaTwitter /></a>
            <a href="https://linkedin.com"><FaLinkedin /></a>
            <a href="https://instagram.com"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-section copyright">
        <p>© {new Date().getFullYear()} Mayorwise Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
