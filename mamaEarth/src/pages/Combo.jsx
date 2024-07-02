import { useFetchData } from "../customHook/useFatchData";
import { jsonUrls } from "../allJsonUrl/jsonUrls";
import { FaTags } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { VscVerifiedFilled } from "react-icons/vsc";
import { Box, Button, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export const Combo = () => {
  const { data, loading, error } = useFetchData(jsonUrls.products);
  const { addToCart } = useContext(CartContext);
  const comboProducts = data.filter((product) => product.category === "Combo");
  if (loading) {
    return (
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <p>Loading...</p>
      </Flex>
    );
  }

  if (error) {
    return (
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <p>Error: {error.message}</p>
      </Flex>
    );
  }
  if (!Array.isArray(data) || data.length === 0) {
    return (
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <p>No products found.</p>
      </Flex>
    );
  }
  return (
    <div>
      <Heading
        as="h6"
        mb="4"
        textAlign={"center"}
        backgroundColor={"#80c342"}
        p={2}
        color={"#ffffff"}
      >
        Combo Products
      </Heading>
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap="30px"
        width={"80%"}
        mt={"0"}
        marginLeft={"8%"}
      >
        {comboProducts.map((product) => (
          <Box key={product.id} className="product-card">
            <div
              className="tag-div"
              style={{
                backgroundColor:
                  product.sellerTag === "MUST TRY"
                    ? "#80c342"
                    : product.sellerTag === "NEW LAUNCH"
                    ? "#9f7aea"
                    : "#fd8f29",
              }}
            >
              <FaTags /> <p>{product.sellerTag}</p>
            </div>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "300px" }}
            />

            <div className="card-textarea-mainDiv">
              <div className="card-text-area">
                <Text ml="1" fontSize="sm">
                  <Flex gap={3} className="rating-review-icon-div">
                    <div className="rating-review-icon">
                      <IoIosStar className="star-div" />
                      <p>{product.rating}</p>
                    </div>
                    <div className="rating-review-icon">
                      <VscVerifiedFilled color="#00aeef" />
                      <p>{product.reviews} Reviews</p>
                    </div>
                  </Flex>
                </Text>
                <div className="product-name-styl">
                  <h1>{product.name}</h1>
                  <p> {product.shortDesc}</p>
                </div>

                <Flex justifyContent={"center"} alignItems={"center"}>
                  <FaIndianRupeeSign fontSize={"20px"} />
                  {product.price}
                </Flex>
              </div>
            </div>
            <Button onClick={() => addToCart(product)} className="allBtn">
              Add to Cart
            </Button>
          </Box>
        ))}
      </Grid>
    </div>
  );
};
