import React, { useState } from "react";
import "./styles/signup.css"; // external CSS
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom"; // NEW
import "react-toastify/dist/ReactToastify.css";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // NEW


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("❌ Passwords do not match");
      return;
    }

    try {
      const res = await fetch("http://localhost:3001/upload/signup", { // NEW (adjust port if needed)
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
        }),
      });

    //   
      const data = await res.json();

      if (!res.ok) {
        // Show exact error from backend
        toast.error(`❌ ${data.message || "Signup failed"}`);
        return;
      }

      // Success message
      toast.success("✅ Signup successful 🎉");

      // Redirect after a short delay
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      toast.error("❌ Network error. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="signup-title">Create Account</h2>
        <p className="signup-subtitle">Join us and get started</p>

        {/* First Name */}
        <div className="input-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Last Name */}
        <div className="input-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password */}
        <div className="input-group password-group">
          <label>Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁️" : "🙈"}
            </span>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="input-group password-group">
          <label>Confirm Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit */}
        <button type="submit" className="signup-btn">Sign Up</button>

        {/* Footer */}
        <p className="signup-footer">
          Already have an account? <Link to='/login'>Login</Link>
        </p>
      </form>
       <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default SignupForm;
