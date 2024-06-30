import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { LiaSearchSolid } from "react-icons/lia";
import { NavIteam } from "./NavIteam";
import { Login } from "../pages/Login";
import { Link } from "react-router-dom";
import { SearchContext } from "../context/searchContext";
import { useContext } from "react";
import { Cart } from "../pages/Cart";
import { CartContext } from "../context/CartContext";
import { Text } from "@chakra-ui/react";

export const SearchBar = () => {
const { searchTerm, setSearchTerm } = useContext(SearchContext);
const { cart } = useContext(CartContext);
  const onSearchSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(searchTerm);
  };

  return (
    <div className="header">
      <div className="searchBar-main-div">
        <img
          className="img1"
          src="https://images.mamaearth.in/wysiwyg/mamaearth-logo.png?format=auto&fit=scale"
          alt="WebsiteLogo"
        />
        <form onSubmit={onSearchSubmit}>
          <div
            className="search-input-dev"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                border: "1px solid gray",
                display: "flex",
                alignItems: "center",
                padding: "8px",
                borderTopLeftRadius: "4px",
                borderBottomLeftRadius: "4px",
                width: "500px",
              }}
            >
              <LiaSearchSolid />
              &nbsp;
              <input
                style={{
                  width: "500px",
                  fontSize: "19px",
                  border: "none",
                  paddingLeft: "10px",
                }}
                type="text"
                value={searchTerm}
                id="searchBar-input"
                placeholder="Search..."
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button
              id="searchBtn"
              className="allBtn"
              type="submit"
              style={{
                width: "140px",
                padding: "8px",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                borderTopRightRadius: "4px",
                borderBottomRightRadius: "4px",
              }}
            >
              <IoSearchOutline /> Search
            </button>
          </div>
        </form>
        <img
          className="img2"
          src="https://images.mamaearth.in/svg/gi-home-button.svg"
          alt="inside-searchBar-img"
        />
        <div
          className="cartUserImg"
          style={{ display: "flex", gap: "20px", marginTop: "12px" }}
        >
          <div style={{ display: "flex" }}>
            <Link to="/cart" element={<Cart />}>
              <HiOutlineShoppingCart
                style={{ color: "#00aeef", fontSize: "30px" }}
              />
            </Link>
            <Text
              backgroundColor="#00aeef"
              borderRadius="50%"
              align={"center"}
              width={"20px"}
              height={"20px"}
              marginLeft="-8px"
              marginTop="-8px"
            >
              <p style={{ color: "white", textAlign:"center"}}>{cart.length}</p>
            </Text>
          </div>
          <div style={{ display: "flex" }}>
            <Link to="/login" element={<Login />}>
              <FaRegUser style={{ color: "#00aeef", fontSize: "28px" }} />
              &nbsp;{" "}
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <NavIteam />
    </div>
  );
};
