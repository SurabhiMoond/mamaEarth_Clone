import { Link } from 'react-router-dom';
import './App.css'
import { CgProfile } from "react-icons/cg";
import { SearchBar } from './component/SearchBar';
import { Home } from './pages/Home';
import { Footer } from './pages/Footer';
function App() {

  return (
    <>
      <div className="top-nav-line">
        <Link className="top-nav-line-links">
          <p>Asia's 1st Brand With MADE SAFE Certified Products</p>
          <p>Buy any 3 Products @Flat Rs. 899 Selected Products | Shop now </p>
          <CgProfile />
        </Link>
      </div>
      <SearchBar/>
     <Home/>
     {/* <Footer/> */}
     
    </>
  );
}

export default App
