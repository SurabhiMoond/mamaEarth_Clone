import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { CgProfile } from "react-icons/cg";
import { SearchBar } from "./component/SearchBar";
import { AllRoutes } from "./allRoutes/AllRoutes";
import { SearchProvider } from "./context/searchContext";
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
      <SearchProvider>
        <SearchBar />
        <AllRoutes />
      </SearchProvider>
    </>
  );
}

export default App;
