import React from 'react'
import { Carousel } from './Carousel';

export const Home = () => {
  return (
    <div>
      <img
        src="https://st-images.honasa.in/web_07b15c5382.jpg?format=auto&width=&qualilty="
        alt=""
      />
      <div>
        <h1>Best Seller</h1>
        <p>
          Explore best-selling safe, natural, and 100% toxin-free baby and
          beauty products from Mamaearth. Get amazing deals and start your
          toxin-free skin, hair, and baby care journey.
        </p>
      </div>
      <Carousel />
    </div>
  );
}


