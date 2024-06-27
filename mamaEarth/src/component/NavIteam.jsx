import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Face } from "../pages/Face";
import { Hair } from "../pages/Hair";
import { Makeup } from "../pages/Makeup";
import { Body } from "../pages/Body";
import { Combo } from "../pages/Combo";
import { NewLaunch } from "../pages/NewLaunch";
import { StoreLocator } from "../pages/StoreLocator";

export const NavIteam = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const links = [
    { to: "/", label: "HOME", element: <Home /> },
    { to: "/face", label: "FACE", element: <Face /> },
    { to: "/hair", label: "HAIR", element: <Hair /> },
    { to: "/makeup", label: "MAKEUP", element: <Makeup /> },
    { to: "/body", label: "BODY", element: <Body /> },
    { to: "/combo", label: "COMBO", element: <Combo /> },
    { to: "/newlaunch", label: "NEW LAUNCH", element: <NewLaunch /> },
    { to: "/storelocator", label: "STORE LOCATOR", element: <StoreLocator /> },
  ];

  const handleOptionHover = (option) => {
    setSelectedOption(option);
  };

  const handleOptionLeave = () => {
    setSelectedOption(null);
  };

  return (
    <>
      <div className="nav-item-div">
        <div className="nav-iteam">
          {links.map((link, index) => (
            <div
              key={index}
              className="nav-item"
              onMouseEnter={() => handleOptionHover(link.label)}
              onMouseLeave={handleOptionLeave}
            >
              <NavLink to={link.to} activeClassName="active" exact>
                {link.label}
              </NavLink>
              {selectedOption === link.label && (
                <div className="option-details">
                  <p>Explore</p>
                  <ul>
                    <li>New Launch</li>
                    <li>Best Seller</li>
                    <li>Combo</li>
                  </ul>
                  <p>Selected Option: {link.label}</p>
                  <p>See All</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Routes>
        {links.map((link, index) => (
          <Route key={index} path={link.to} element={link.element} />
        ))}
      </Routes>
    </>
  );
};
