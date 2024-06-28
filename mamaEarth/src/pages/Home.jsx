import { Carousel } from './Carousel';
import { HomePage } from './HomePage';

export const Home = () => {
  return (
    <div>
      <img
        src="https://st-images.honasa.in/web_wt_221275a10a.jpg?format=auto&width=&qualilty="
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
      <HomePage />
    </div>
  );
}


