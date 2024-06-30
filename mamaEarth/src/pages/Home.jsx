import { Heading } from "@chakra-ui/react";
import { Carousel } from "./Carousel";
import { HomePage } from "./HomePage";

export const Home = () => {
  return (
    <div className="home-main-div">
      <img
        src="https://st-images.honasa.in/web_wt_221275a10a.jpg?format=auto&width=&qualilty="
        alt=""
      />
      <div className="homePage-heading">
        <Heading>All Products</Heading>
        <p>
          Explore best-selling safe, natural, and 100% toxin-free baby and
          beauty products from Mamaearth. Get amazing deals and start your
          toxin-free skin, hair, and baby care journey.
        </p>
      </div>
      <Carousel />
      <HomePage />
    </div>
  );
};
