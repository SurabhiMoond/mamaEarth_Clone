import React from "react";
import { Box, Heading, Text, Flex, Icon, Button, AspectRatio } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaClock, FaEnvelope, FaPhone } from "react-icons/fa";
import { MdDirections } from "react-icons/md";

const AddressCard = ({ title, address, hours, email, phone }) => (
  <Box p={4} borderBottom="1px solid #ddd">
    <Heading as="h4" size="md" mb={2}>
      {title}
    </Heading>
    <Flex align="center" mb={2}>
      <Icon as={FaMapMarkerAlt} mr={2} color="#00aeef" />
      <Text>{address}</Text>
    </Flex>
    <Flex align="center" mb={2}>
      <Icon as={FaClock} mr={2} color="#00aeef" />
      <Text>{hours}</Text>
    </Flex>
    {email && (
      <Flex align="center" mb={2}>
        <Icon as={FaEnvelope} mr={2} color="#00aeef" />
        <Text>{email}</Text>
      </Flex>
    )}
    {phone && (
      <Flex align="center" mb={2}>
        <Icon as={FaPhone} mr={2} color="#00aeef" />
        <Text>{phone}</Text>
      </Flex>
    )}
    <Button
      leftIcon={<MdDirections />}
      backgroundColor="#59a30e"
      color={"white"}
      size="sm"
    >
      Get Directions
    </Button>
  </Box>
);

export const StoreLocator = () => (
  <Flex maxWidth={"80%"} marginLeft={"10%"}>
    <Box flex="1" p={4}>
      <AddressCard
        title="Shipra Mall"
        address="LG -Kiosk Shipra Mall, Vaibhav Khand, Indirapuram , Ghaziabad, Uttar Pradesh, 201014"
        hours="11:00 AM - 10:00 PM"
        email="gzb.shipra@mamaearth.in"
      />
      <AddressCard
        title="DLF Avenue"
        address="129-B,Ground Floor, District Center, New Delhi, Delhi, 110017"
        hours="11:00 AM - 11:00 PM"
        phone="011-4106-4902"
        email="del.dlfavenue@mamaearth.in"
      />
    </Box>
    <Box
      flex="1"
      p={4}
      style={{ width: "100%", height: "90%", marginTop: "7%" }}
    >
      {/* <img
        src="https://images.livemint.com/rf/Image-621x414/LiveMint/Period1/2015/11/20/Photos/googlemaps-kltG--621x414@LiveMint.jpg"
        alt="Map"
        style={{ width: "100%",height: "90%", marginTop:"7%"}}
      /> */}
      <AspectRatio ratio={16 / 9}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng" />
      </AspectRatio>
    </Box>
  </Flex>
);


