//TODO: Signup page
import { Link, Outlet, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./SignUp.css";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (validationErrors.length === 0) {
      // Skipping this part until database

      // Reset the form fields
      setUsername("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");

      // Redirect to the homepage (you can modify this based on your routing configuration)
      localStorage.setItem("username", username);
      navigate("/HomePage");
    } else {
      setErrorMessages(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = [];

    // Rule: Username cannot be empty
    if (username.trim() === "") {
      errors.push("- Please type your username");
    }

    // Rule: First name cannot be empty
    if (firstName.trim() === "") {
      errors.push("- Please type your first name");
    }

    // Rule: Last name cannot be empty
    if (lastName.trim() === "") {
      errors.push("- Please type your last name");
    }

    // Rule: Password must have a capital letter
    if (!/[A-Z]/.test(password)) {
      errors.push("- Please include at least 1 capital letter");
    }

    // Rule: Email must contain "@"
    if (!email.includes("@")) {
      errors.push("- Please type your email");
    }

    return errors;
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="title">Sign Up</h1>
        <form className="form" action="./components/connect.php" onSubmit={handleSubmit} method="POST">
          <div className="input-container">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password*</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="submit-btn" type="submit" value="send">
            Sign Up
          </button>

          {errorMessages.length > 0 && (
            <div className="error-messages">
              {errorMessages.map((errorMessage, index) => (
                <p key={index} className="error-message">
                  {errorMessage}
                </p>
              ))}
            </div>
          )}

          <p className="signin-text">
            Already have an account? <Link to="/signin">Sign in</Link>
          </p>
        </form>
      </div>
      <Outlet />
    </div>
  );
}