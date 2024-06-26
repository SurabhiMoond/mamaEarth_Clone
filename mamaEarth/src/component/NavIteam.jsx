import React, { useState } from "react";

export const NavIteam = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const links = [
    { to: "/", lable: "HOME" },
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
    <div className="nav-iteam-div">
      <div className="nav-iteam">
        {links.map((link, index) => (
          <div
            key={index}
            className="nav-item"
            onMouseEnter={() => handleOptionHover(link.label)}
            onMouseLeave={handleOptionLeave}
          >
            <a href={link.to}>{link.label}</a>
            {/* {selectedOption === link.label && (
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
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
};
