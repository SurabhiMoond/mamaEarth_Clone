import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { FaTags } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { FaRupeeSign } from "react-icons/fa";
import { VscVerifiedFilled } from "react-icons/vsc";
import { Box, Button, Flex, Heading, Text, IconButton } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

export const Cart = () => {
  const { cart, updateCartQuantity, removeFromCart } = useContext(CartContext);

  const totalAmount = cart.reduce(
    (total, product) => total + product.price * (product.quantity || 1),
    0
  );

  const handleQuantityChange = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      updateCartQuantity(id, quantity);
    }
  };

  if (cart.length === 0) {
    return (
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Text>Your cart is empty.</Text>
      </Flex>
    );
  }

  return (
    <>
      <Heading
        as="h4"
        mb="4"
        textAlign="center"
        backgroundColor="#80c342"
        p={2}
        color="#ffffff"
      >
        Cart
      </Heading>
      <Flex direction="column" align="center" p={0}>
        <Flex width="80%" justify="space-between">
          <Box width="60%">
            {cart.map((product) => (
              <Flex
                key={product.id}
                borderWidth={1}
                borderRadius="lg"
                overflow="hidden"
                mb={4}
                p={2}
                alignItems="center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "200px",
                    marginRight: "16px",
                  }}
                />
                <Box flex="1">
                  <Text fontWeight="bold">{product.name}</Text>
                  <Text color={"#80c342"}>{product.shortDesc}</Text>
                  <Flex mt={2} alignItems="center">
                    <IoIosStar color="gold" />
                    <Text ml={1} mr={3}>
                      {product.rating}
                    </Text>
                    <VscVerifiedFilled color="#00aeef" />
                    <Text ml={1}>{product.reviews} Reviews</Text>
                  </Flex>
                  <Flex mt={2} alignItems="center">
                    <FaRupeeSign />
                    <Text ml={1} fontWeight="bold">
                      {product.price}
                    </Text>
                  </Flex>
                  <Flex
                    mt={2}
                    alignItems="center"
                    border="1px dotted #80c342"
                    color={"#00aeef"}
                    justify="space-around"
                    boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;"
                  >
                    <MinusIcon
                      onClick={() =>
                        handleQuantityChange(product.id, product.quantity - 1)
                      }
                    />
                    <Text mx={2}>{product.quantity}</Text>
                    <AddIcon
                      size="sm"
                      onClick={() =>
                        handleQuantityChange(product.id, product.quantity + 1)
                      }
                    />
                  </Flex>
                </Box>
              </Flex>
            ))}
          </Box>
          <Box width="30%" p={4} position="fixed" ml={"55%"}  >
            <Heading size="md">Price Summary</Heading>
            <Flex justify="space-between" mt={4}>
              <Text>Order Total</Text>
              <Flex alignItems="center">
                <FaRupeeSign />
                <Text ml={1}>{totalAmount.toFixed(2)}</Text>
              </Flex>
            </Flex>
            <Flex justify="space-between" mt={2}>
              <Text>Items Discount</Text>
              <Flex alignItems="center">
                <FaRupeeSign />
                <Text ml={1}>-107</Text>
              </Flex>
            </Flex>
            <Flex justify="space-between" mt={2}>
              <Text>Shipping</Text>
              <Flex alignItems="center">
                <Text ml={1}>Free</Text>
              </Flex>
            </Flex>
            <Flex justify="space-between" mt={2}>
              <Text>5% online payment discount</Text>
              <Flex alignItems="center">
                <FaRupeeSign />
                <Text ml={1}>-37.05</Text>
              </Flex>
            </Flex>
            <Flex justify="space-between" mt={4} fontWeight="bold">
              <Text>To Pay</Text>
              <Flex alignItems="center">
                <FaRupeeSign />
                <Text ml={1}>{(totalAmount - 107 - 37.05).toFixed(2)}</Text>
              </Flex>
            </Flex>
            <Button mt={4} width="100%" colorScheme="blue">
              Add address
            </Button>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
