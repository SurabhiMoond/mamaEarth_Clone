import { Box, Grid, Image, Text, Flex } from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Box bg="#f7f7fa" p="40px" mt="20px">
      <Grid
        templateColumns="3fr 1fr 1fr 1fr"
        gap="40px"
        borderBottom={"1px solid #efe3e3"}
        pb={"10px"}
      >
        <Box position="relative">
          <Image
            h={"100%"}
            src="https://images.mamaearth.in/wysiwyg/desktop_home_img.png?format=auto"
            alt="BrandImage"
          />
          <Image
            width={"150px"}
            position="absolute"
            top="20%"
            left="60%"
            src="https://images.mamaearth.in/wysiwyg/mamaearth-logo.png?format=auto&fit=scale"
          />
          <Text position={"absolute"} top="30%" left="40%" textAlign={"center"}>
            <b> WE PLANT GOODNESS </b>
            <p>
              509491 <br></br> Trees have got life already... Everytime you buy
              from us, we plant more trees!
            </p>
          </Text>
        </Box>
        <Box>
          <Text fontWeight="bold" mb="10px">
            USEFUL LINKS
          </Text>
          <Text>Privacy Policy</Text>
          <Text>Returns</Text>
          <Text>Terms & Conditions</Text>
          <Text>We're Safe</Text>
          <Text>Track Order</Text>
          <Text>
            <Link to={'/storelocator'}>Contact Us</Link>
          </Text>
          <Text>Sitemap</Text>
          <Text>About Us</Text>
        </Box>
        <Box>
          <Text fontWeight="bold" mb="10px">
            CATEGORIES
          </Text>
          <Text>Baby</Text>
          <Text>Beauty</Text>
          <Text>Hair</Text>
          <Text>Face</Text>
          <Text>Body</Text>
          <Text>Makeup</Text>
          <Text>Ingredient</Text>
          <Text>Gift Pack</Text>
        </Box>
        <Box>
          <Text fontWeight="bold" mb="10px">
            MY ACCOUNT
          </Text>
          <Text>Account</Text>
          <Text>Orders</Text>
          <Text>Addresses</Text>
        </Box>
      </Grid>
      <Box mt="20px">
        <Flex
          style={{
            fontSize: "40px",
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CiLinkedin />
          <CiTwitter />
          <FaInstagram />
          <FiYoutube />
        </Flex>
        <Flex
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Image
            src="https://images.mamaearth.in/wysiwyg/PLAYSTORE18Apr.png"
            alt="Google Play"
            mr="10px"
          />
          <Image
            src="https://images.mamaearth.in/wysiwyg/APPSTORE18Apr.png"
            alt="App Store"
          />
        </Flex>
      </Box>
      <Text textAlign="center" mt="20px">
        © 2024 Honasa Consumer Limited. All Rights Reserved
      </Text>
    </Box>
  );
};
