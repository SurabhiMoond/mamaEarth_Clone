import { useState, useEffect } from "react";
import { Box, Button, Flex, Grid } from "@chakra-ui/react";
import axios from "axios";

export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/src//Data/products.json");
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
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <Button onClick={prevSlide}> &lt; </Button>

      <Grid templateColumns="repeat(4, 1fr)" gap="30px">
        {visibleProducts.map((product, index) => (
          <Box key={index} className="carousel">
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "300px" }}
            />
            <h1>{product.name}</h1>
          </Box>
        ))}
      </Grid>

      <Button onClick={nextSlide}>&gt;</Button>
    </Flex>
  );
};
