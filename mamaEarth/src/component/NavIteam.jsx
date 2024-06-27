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
                  {link.label === "FACE" && (
                    <div className="cardItemDiv">
                      <div className="firstItemList">
                        <p
                          style={{
                            color: "#00aeef",
                          }}
                        >
                          Explore
                        </p>
                        <p>New Launches</p>
                        <p>Best Sellers</p>
                        <p>Gift Packs</p>
                      </div>
                      <div className="secondItemList">
                        <p
                          style={{
                            color: "#00aeef",
                          }}
                        >
                          Face
                        </p>
                        <p>Face Wash </p>
                        <p>Face Mask </p>
                        <p>Face Cream</p>
                        <p>Face Serum</p>
                        <p>Face Scrub</p>
                        <p>Face Toner</p>
                        <p>Face Gel</p>
                        <p>Face Sheet Mask</p>
                        <p>Face Moisturiser</p>
                      </div>

                      <div className="thirdItemList">
                        <p>See All</p>
                      </div>
                    </div>
                  )}
                  {link.label === "HAIR" && (
                    <div className="cardItemDiv">
                      <div className="firstItemList">
                        <p
                          style={{
                            color: "#00aeef",
                          }}
                        >
                          Explore
                        </p>
                        <p>New Launches</p>
                        <p>Best Sellers</p>
                        <p>Combos</p>
                        <p>Gift Packs</p>
                      </div>
                      <div className="secondItemList">
                        <p
                          style={{
                            color: "#00aeef",
                          }}
                        >
                          Hair
                        </p>
                        <p>Shampoo </p>
                        <p>Conditioner </p>
                        <p>Hair Oil</p>
                        <p>Hair Mask</p>
                        <p>Hair Serum</p>
                      </div>

                      <div className="thirdItemList">
                        <p>See All</p>
                      </div>
                    </div>
                  )}
                  {link.label === "BODY" && (
                    <div className="cardItemDiv">
                      <div className="firstItemList">
                        <p
                          style={{
                            color: "#00aeef",
                          }}
                        >
                          Explore
                        </p>
                        <p>New Launches</p>
                        <p>Best Sellers</p>
                      </div>
                      <div className="secondItemList">
                        <p
                          style={{
                            color: "#00aeef",
                          }}
                        >
                          Body
                        </p>
                        <p>Body Wash </p>
                        <p>Body Scrub </p>
                        <p>Hand Cream</p>
                        <p>Body Lotion</p>
                      </div>

                      <div className="thirdItemList">
                        <p>See All</p>
                      </div>
                    </div>
                  )}
                  {link.label === "MAKEUP" && (
                    <div className="cardItemDiv">
                      <div className="firstItemList">
                        <p
                          style={{
                            color: "#00aeef",
                          }}
                        >
                          Explore
                        </p>
                        <p>New Launches</p>
                        <p>Best Sellers</p>
                        <p>Combos</p>
                        <p>Gift Packs</p>
                      </div>
                      <div className="secondItemList">
                        <p
                          style={{
                            color: "#00aeef",
                          }}
                        >
                          Beauty
                        </p>
                        <p>Face </p>
                        <p>Hair </p>
                        <p>Body</p>
                      </div>

                      <div className="thirdItemList">
                        <p>See All</p>
                      </div>
                    </div>
                  )}
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
