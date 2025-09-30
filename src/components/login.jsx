import React, { useState } from "react";
import "./styles/LoginForm.css"; // Import external CSS
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

      const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3001/upload/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(`❌ ${data.message || "Login failed"}`);
        return;
      }

      // ✅ Display token in console only
     localStorage.setItem("token", data.token); // 🔑 Store JWT for protected API access

      // Show success toast
      toast.success("✅ Login successful 🎉");

            // ✅ Wait 2 seconds before navigating to dashboard
      setTimeout(() => {
        navigate("/dashboard"); // 🔑 Navigate after toast
      }, 2000); // 2000ms = 2 seconds

    } catch (err) {
      toast.error("❌ Network error. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Sign in to continue</p>

        {/* Email Input */}
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password Input with Toggle */}
        <div className="input-group password-group">
          <label>Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

        {/* Submit Button */}
        <button type="submit" className="login-btn">Login</button>

        {/* Footer */}
        <p className="login-footer">
          Don’t have an account? <Link to='/signup'>Sign up</Link><br></br>
          Return to <Link to='/'>Homepage</Link>
        </p>
      </form>
         {/* Toastify container */}
            <ToastContainer
        position="top-right"
        autoClose={3000}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
      />
    </div>
  );
};

export default LoginForm;
