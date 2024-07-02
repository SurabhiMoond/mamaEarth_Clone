import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jsonUrls } from "../allJsonUrl/jsonUrls";
import { Box, Button, Flex, FormControl, FormLabel, Input, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { IoCloseSharp } from "react-icons/io5";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [close, setClose] = useState(true);
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
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Box
        p={8}
        maxWidth="600px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        {close && (
          <Link to="/">
            <IoCloseSharp
              onClick={() => setClose(false)}
              style={{ margin: "0 0  0 90%" }}
            />{" "}
          </Link>
        )}{" "}
        <p style={{ color: "#94c642", fontWeight: "bolder" }}>
          Signup for the Goodness Inside
        </p>
        {errorMessage && <div className="error">{errorMessage}</div>}
        <form onSubmit={handleSubmit}>
          <FormControl isRequired mb={2}>
            <FormLabel>Name </FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired mb={2}>
            <FormLabel>Email </FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired mb={2}>
            <FormLabel>Gender</FormLabel>
            <RadioGroup onChange={setGender} value={gender}>
              <Stack direction="row">
                <Radio value="Male">Male</Radio>
                <Radio value="Female">Female</Radio>
                <Radio value="Other">Other</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>DOB </FormLabel>
            <Input
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired mb={2}>
            <FormLabel>Password </FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button type="submit" className="allBtn" width="400px" color="#94c642">
            Sign Up
          </Button>
        </form>
      </Box>
    </Flex>
  );
};
