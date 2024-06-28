import { useContext } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { LiaSearchSolid } from "react-icons/lia";
import { NavIteam } from "./NavIteam";
import { Login } from "../pages/Login";
import { Link } from "react-router-dom";
export const SearchBar = () => {
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="header">
      <div className="searchBar-main-div">
        <img
          className="img1"
          src="https://images.mamaearth.in/wysiwyg/mamaearth-logo.png?format=auto&fit=scale"
          alt="WebsiteLogo"
        />

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
              style={{ width: "500px", fontSize: "19px" }}
              type="text"
              id="searchBar-input"
              placeholder="Search.................."
              onChange={handleSearchChange}
            />
          </div>
          <button
            id="searchBtn"
            className="allBtn"
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
        <img
          className="img2"
          src="https://images.mamaearth.in/svg/gi-home-button.svg"
          alt="inside-searchBar-img"
        />
        <div className="cartUserImg" style={{ display: "flex", gap: "20px" }}>
          <div style={{ display: "flex" }}>
            <BsCart3 style={{ color: "#00aeef", fontSize: "24px" }} /> &nbsp;{" "}
            <p>Cart</p>
          </div>
          <div style={{ display: "flex" }}>
            <Link to="/login" element={<Login />}>
              <FaRegUser style={{ color: "#00aeef", fontSize: "24px" }} />
              {""}
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <NavIteam />
    </div>
  );
};
