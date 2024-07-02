import { Link} from "react-router-dom";
import "./App.css";
import { CgProfile } from "react-icons/cg";
import { SearchBar } from "./component/SearchBar";
import { AllRoutes } from "./allRoutes/AllRoutes";
import { SearchContext } from "./context/searchContext";
import { SearchResult } from "./pages/SearchResult";
import { useContext } from "react";
import { Footer } from "./pages/Footer";

function App() {
  const { isSearching } = useContext(SearchContext);

  return (
    <div className="app-div">
      <div className="top-nav-line">
        <Link className="top-nav-line-links">
          <p>Asia's 1st Brand With MADE SAFE Certified Products</p>
          <p>Buy any 3 Products @Flat Rs. 899 Selected Products | Shop now </p>
          <CgProfile />
        </Link>
      </div>
      <SearchBar />
      {isSearching ? <SearchResult /> : <AllRoutes />}
      <Footer/>
    </div>
  );
}

export default App;
