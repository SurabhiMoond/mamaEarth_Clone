import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jsonUrls } from "../allJsonUrl/jsonUrls";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(jsonUrls.roles, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          gender,
          password,
          dateOfBirth,
          role: "user",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to sign up.");
      }
      console.log("Signup successful!");
      navigate("/login");
    } catch (error) {
      console.error("Error while signup:", error);
      setErrorMessage("Failed to sign up. Please try again.");
    }
  };

  return (
    <div
      style={{ width: "400px", height: "600px", backgroundColor: "#f0f0ef" }}
    >
      <h2>Signup for the Goodness Inside</h2>
      {errorMessage && <div className="error">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>
            Email ID <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Gender</label>
          <div>
            <label>
              <input
                type="radio"
                value="Male"
                checked={gender === "Male"}
                onChange={(e) => setGender(e.target.value)}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                value="Female"
                checked={gender === "Female"}
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                value="Not Specified"
                checked={gender === "Not Specified"}
                onChange={(e) => setGender(e.target.value)}
              />
              Not Specified
            </label>
          </div>
        </div>
        <div>
          <label>Date of Birth</label>
          <input
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>
        <div>
          <label>
            Set Password <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="allBtn">
          Sign Up
        </button>
      </form>
    </div>
  );
};
