import { Box, Button, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { useFetchData } from "../customHook/useFatchData";
import { jsonUrls } from "../allJsonUrl/jsonUrls";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { VscVerifiedFilled } from "react-icons/vsc";
import { IoIosStar } from "react-icons/io";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaTags } from "react-icons/fa6";

export const HomePage = () => {
  const {
    data: products,
    loading: productsLoading,
    error: productsError,
  } = useFetchData(jsonUrls.products);

  const { addToCart } = useContext(CartContext);
  const loading = productsLoading;
  const error = productsError;

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
  const skinCareProducts = products.filter(
    (product) => product.category && product.category.includes("Skin")
  );

  const faceCareProducts = products.filter(
    (product) => product.category && product.category.includes("Face")
  );

  const hairCareProducts = products.filter(
    (product) => product.category && product.category.includes("Hair")
  );

  const bodyCareProducts = products.filter(
    (product) => product.category && product.category.includes("Body")
  );

  const bestSellers = products.filter(
    (product) => product.sellerTag === "BEST SELLER"
  );
  const newLaunches = products.filter(
    (product) => product.sellerTag === "NEW LAUNCH"
  );
  const mustTries = products.filter(
    (product) => product.sellerTag === "MUST TRY"
  );

  return (
    <div className="home-product-div">
      {/* Skin Care Products */}
      <div className="product-title-div">
        <Heading as="h4" mb="4">
          Skin Care Products
        </Heading>
        <p>
          Explore 100% toxin-free and safe skincare products by Mamaearth that
          are formulated with love and the goodness of natural ingredients
        </p>
      </div>
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap="30px"
        width={"80%"}
        mt={"0"}
        marginLeft={"8%"}
      >
        {skinCareProducts.map((product) => (
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

      {/* Face Care Products */}
      <div className="product-title-div">
        <Heading as="h4" mb="4">
          Face Care Products
        </Heading>
        <p>
          Explore 100% toxin-free and safe Face products, formulated with the
          goodness of natural ingredients and no harmful chemicals.
        </p>
      </div>
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap="30px"
        width={"80%"}
        mt={"0"}
        marginLeft={"8%"}
      >
        {faceCareProducts.map((product) => (
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

      {/* Hair Care Products */}
      <div className="product-title-div">
        <Heading as="h4" mb="4">
          Hair Care Products
        </Heading>
        <p>
          Explore 100% toxin-free and safe Hair products, formulated with the
          goodness of natural ingredients and no harmful chemicals.
        </p>
      </div>
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap="30px"
        width={"80%"}
        mt={"0"}
        marginLeft={"8%"}
      >
        {hairCareProducts.map((product) => (
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

      {/* Body Care Products */}
      <div className="product-title-div">
        <Heading as="h4" mb="4">
          Body Care Products
        </Heading>
        <p>
          Explore 100% toxin-free and safe Body products, formulated with the
          goodness of natural ingredients and no harmful chemicals.
        </p>
      </div>
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap="30px"
        width={"80%"}
        mt={"0"}
        marginLeft={"8%"}
      >
        {bodyCareProducts.map((product) => (
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

      {/* Must Try Products */}
      <div className="product-title-div">
        <Heading as="h4" mb="4">
          Must Try
        </Heading>
        <p>
          Explore 100% toxin-free and safe products, formulated with the
          goodness of natural ingredients and no harmful chemicals.
        </p>
      </div>
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap="30px"
        width={"80%"}
        mt={"0"}
        marginLeft={"8%"}
      >
        {mustTries.map((product) => (
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
