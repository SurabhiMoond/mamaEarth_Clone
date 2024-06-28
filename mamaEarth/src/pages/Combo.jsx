import { useFetchData } from "../customHook/useFatchData";
import { jsonUrls } from "../allJsonUrl/jsonUrls";
import { Box, Flex, Grid } from "@chakra-ui/react";

export const Combo = () => {
  const { data, loading, error } = useFetchData(jsonUrls.products);
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
      <Grid templateColumns="repeat(4, 1fr)" gap="30px" p="30px">
        {comboProducts.map((product, index) => (
          <Box key={index} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "300px" }}
            />
            <h1>{product.name}</h1>
          </Box>
        ))}
      </Grid>
    </div>
  );
};
