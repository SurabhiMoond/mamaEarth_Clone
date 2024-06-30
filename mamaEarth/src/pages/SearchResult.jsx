import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { SearchContext } from "../context/searchContext";
import { FaIndianRupeeSign, FaTags } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import { VscVerifiedFilled } from "react-icons/vsc";

export const SearchResult = () => {
  const { searchResults } = useContext(SearchContext);
  return (
    <div>
      {searchResults.length > 0 ? (
        <Grid
          templateColumns="repeat(4, 1fr)"
          gap="30px"
          width={"80%"}
          mt={"10"}
          marginLeft={"8%"}
        >
          {searchResults.map((product) => (
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
      ) : (
        <Flex justifyContent="center" alignItems="center" height="100vh">
          <p>"Oops...Sorry ! Product is not found !"</p>
        </Flex>
      )}
    </div>
  );
};
