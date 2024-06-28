import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jsonUrls } from "../allJsonUrl/jsonUrls";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(jsonUrls.roles);
      const users = await res.json();

      const user = users.find((user) => user.email === email);

      if (user) {
        if (user.password === password) {
          if (user.role === "admin") {
            console.log("Admin login!", user);
            localStorage.setItem("loggedInAdmin", JSON.stringify(user));
            navigate("/body");
          } else {
            console.log("Login successful!", user);
            localStorage.setItem("loggedInUser", JSON.stringify(user));
            navigate("/");
          }
        } else {
          setErrorMessage("Password incorrect. Please try again.");
        }
      } else {
        setErrorMessage(
          <div>
            Email not registered. Please{" "}
            <Link to="/sign" style={{ color: "#00aeef" }}>
              sign up
            </Link>
            .
          </div>
        );
      }
    } catch (error) {
      console.error("Error while Login:", error);
      setErrorMessage("Error occurred. Please try again.");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {errorMessage && <div className="error">{errorMessage}</div>}
    </div>
  );
};
