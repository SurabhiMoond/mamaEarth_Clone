import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const NavIteam = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const links = [
    { to: "/", label: "HOME" },
    { to: "/face", label: "FACE" },
    { to: "/hair", label: "HAIR" },
    { to: "/makeup", label: "MAKEUP" },
    { to: "/body", label: "BODY" },
    { to: "/combo", label: "COMBO" },
    { to: "/newlaunch", label: "NEW LAUNCH" },
    { to: "/storelocator", label: "STORE LOCATOR" },
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
                        <Link to={"/face-new-launch"}>
                          <p>New Launches</p>
                        </Link>
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
    </>
  );
};
