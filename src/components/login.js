import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Use the useNavigate hook
  const navigate = useNavigate();

  const isAllowedGmail = /^sss@gmail\.com$/i.test(username);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isAllowedGmail) {
      console.log("Username:", username, "Password:", password);

      // Assuming successful login, navigate to the home page
      navigate("/Home");
    } else {
      setError("Access denied. Please enter a valid Gmail address.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h1 className="website-name">Art Gallery Website</h1>
        <p className="quotation">"Where Every Brushstroke Tells a Story"</p>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
        <p>
          Already have an account? <Link to="/registration">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
