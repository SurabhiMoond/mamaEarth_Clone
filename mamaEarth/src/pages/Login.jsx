import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jsonUrls } from "../allJsonUrl/jsonUrls";
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Text } from "@chakra-ui/react";
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
            navigate("/dash");
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
          </div>
        );
      }
    } catch (error) {
      console.error("Error while Login:", error);
      setErrorMessage("Error occurred. Please try again.");
    }
  };

  return (
    <Flex height="80vh" alignItems="center" justifyContent="center">
      <Box
        p={8}
        maxWidth="500px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading
          mb={6}
          fontSize="28px"
          textAlign="center"
          color="#94c642"
        >
          Login
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl isRequired mb={4}>
            <FormLabel htmlFor="email">Email </FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired mb={6}>
            <FormLabel htmlFor="password">Password </FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button type="submit" color="#94c642" width="full" className="allBtn">
            Login
          </Button>
        </form>
        {errorMessage && (
          <Text color="red.500" mt={4} textAlign="center">
            {errorMessage}
          </Text>
        )}
      </Box>
    </Flex>
  );
};
