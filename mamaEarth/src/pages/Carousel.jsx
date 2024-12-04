import { useState, useEffect, useContext } from "react";
import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import axios from "axios";
import { jsonUrls } from "../allJsonUrl/jsonUrls";
import { FaLessThan } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";
import { FaRegStar, FaTags } from "react-icons/fa";
 import { VscVerifiedFilled } from "react-icons/vsc";
  import { FaIndianRupeeSign } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import { CartContext } from "../context/CartContext";
export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(jsonUrls.products);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <p>Loading...</p>
      </Flex>
    );
  }

  if (!Array.isArray(products) || products.length === 0) {
    return (
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <p>No products found.</p>
      </Flex>
    );
  }

  const slidesCount = Math.ceil(products.length / 4);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slidesCount);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slidesCount) % slidesCount);
  };

  const startIndex = currentSlide * 4;
  const endIndex = startIndex + 4;
  const visibleProducts = products.slice(startIndex, endIndex);

  return (
    <div>
      <Flex
        justifyContent="center"
        alignItems="center"
        height="80vh"
        className="home-carousel"
        gap="10px"
      >
        <FaLessThan onClick={prevSlide} />

        <Grid templateColumns="repeat(4, 1fr)" gap="30px" mt={"0"}>
          {visibleProducts.map((product) => (
            <Box key={product.id} className="product-card">
              <div
                className="tag-div"
                style={{
                  backgroundColor:
                    product.sellerTag === "MUST TRY"
                      ? "#fd8f29"
                      : product.sellerTag === "NEW LAUNCH"
                      ? "#9f7aea"
                      : "#80c342",
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

        <FaGreaterThan onClick={nextSlide} />
      </Flex>
    </div>
  );
};
