import { Box, Button, Flex, Grid, Heading } from "@chakra-ui/react";
import { useFetchData } from "../customHook/useFatchData";
import { jsonUrls } from "../allJsonUrl/jsonUrls";

export const HomePage = () => {
  const {
    data: products,
    loading: productsLoading,
    error: productsError,
  } = useFetchData(jsonUrls.products);

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
  const skinCareProducts = products.filter((product) =>
    product.category.includes("Skin")
  );
  const faceCareProducts = products.filter((product) =>
    product.category.includes("Face")
  );
  const hairCareProducts = products.filter((product) =>
    product.category.includes("Hair")
  );
  const bodyCareProducts = products.filter((product) =>
    product.category.includes("Body")
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
    <div>
      {/* Skin Care Products */}
      <Heading as="h2" mb="4">
        Skin Care Products
      </Heading>
      <Grid templateColumns="repeat(4, 1fr)" gap="30px" p="30px">
        {skinCareProducts.map((product) => (
          <Box key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "300px" }}
            />
            <h3>{product.name}</h3>
          </Box>
        ))}
      </Grid>

      {/* Face Care Products */}
      <Heading as="h2" mb="4">
        Face Care Products
      </Heading>
      <Grid templateColumns="repeat(4, 1fr)" gap="30px" p="30px">
        {faceCareProducts.map((product) => (
          <Box key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "300px" }}
            />
            <h3>{product.name}</h3>
          </Box>
        ))}
      </Grid>

      {/* Hair Care Products */}
      <Heading as="h2" mb="4">
        Hair Care Products
      </Heading>
      <Grid templateColumns="repeat(4, 1fr)" gap="30px" p="30px">
        {hairCareProducts.map((product) => (
          <>
            <Box key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%", height: "300px" }}
              />
              <h3>{product.name}</h3>
            </Box>
          </>
        ))}
      </Grid>

      {/* Body Care Products */}
      <Heading as="h2" mb="4">
        Body Care Products
      </Heading>
      <Grid templateColumns="repeat(4, 1fr)" gap="30px" p="30px">
        {bodyCareProducts.map((product) => (
          <Box key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "300px" }}
            />
            <h3>{product.name}</h3>
          </Box>
        ))}
      </Grid>

      {/* Best Sellers */}
      <Heading as="h2" mb="4">
        Best Sellers
      </Heading>
      <Grid templateColumns="repeat(4, 1fr)" gap="30px" p="30px">
        {bestSellers.map((product) => (
          <Box key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "300px" }}
            />
            <h3>{product.name}</h3>
          </Box>
        ))}
      </Grid>

      {/* New Launches */}
      <Heading as="h2" mb="4">
        New Launches
      </Heading>
      <Grid templateColumns="repeat(4, 1fr)" gap="30px" p="30px">
        {newLaunches.map((product) => (
          <Box key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "300px" }}
            />
            <h3>{product.name}</h3>
          </Box>
        ))}
      </Grid>

      {/* Must Try Products */}
      <Heading as="h2" mb="4">
        Must Try Products
      </Heading>
      <Grid templateColumns="repeat(4, 1fr)" gap="30px" p="30px">
        {mustTries.map((product) => (
          <Box key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "300px" }}
            />
            <h3>{product.name}</h3>
          </Box>
        ))}
      </Grid>
    </div>
  );
};
