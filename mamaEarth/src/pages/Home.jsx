import { useEffect, useState } from "react";
import { Heading } from "@chakra-ui/react";
import { Carousel } from "./Carousel";
import { HomePage } from "./HomePage";

export const Home = () => {
  const [imageData, setImage] = useState([
    "https://st-images.honasa.in/Vitamin_C_Range_copy_565e1c779f.gif?width=&qualilty=",
    "https://st-images.honasa.in/web4_86fd5215f5.gif?width=&qualilty=",
    "https://st-images.honasa.in/web_wt_221275a10a.jpg?format=auto&width=&qualilty=",
  ]);

  const [imageId, setImageId] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setImageId((prev) => (prev+1) % imageData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [imageData.length]);

  return (
    <div className="home-main-div">
      <img src={imageData[imageId]} alt="carouselImage" />
      <div className="homePage-heading">
        <Heading style={{fontSize:"35px"}}>All Products</Heading>
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
