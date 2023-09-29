import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import SearchComponent from "../SearchComponent";
const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [allClasses, setAllClasses] = useState("");
  const [activeLink, setActiveLink] = useState(null);

  const links = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "Movies", path: "/movies" },
    { id: 3, text: "TV Shows", path: "/tv-shows" },
    // { id: 4, text: "About", path: "/about" },
  ];

  const handleLinkClick = (id) => {
    setActiveLink(id);
  };
  window.onscroll = () => {
    if (window.scrollY < 200) {
      setAllClasses("nav-transparent");
      // nav.classList.remove("nav-transparent");
    } else {
      setAllClasses("nav-colored");
      // nav.classList.remove("nav-colored");
    }
  };
  return (
    <div id="header" className={allClasses}>
      <header>
        <div className="logo">
          Movie<span>Stream</span>
        </div>
        <nav className="nav-links">
          <ul>
            {links.map((link) => (
              <li key={link.id} className="nav-link">
                <Link onClick={() => handleLinkClick(link.id)} to={link.path} style={{
                    color:
                      activeLink === link.id
                        ? "#008b3e" // Change the color for the active link
                        : "#fff", // Default color for other links
                  }}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="search">
          {/* <input type="text" className="textfield" placeholder="Search..." />
          <button className="btnSearch">
            <i className="fa-regular fa-magnifying-glass"></i>
          </button> */}
           <SearchComponent />
        </div>

        <div className="nav-collapse">
          <button
            className="toggle btn-collapse"
            onClick={() => setSearchOpen((prev) => !prev)}
          >
            <i className="fa-regular fa-magnifying-glass"></i>
          </button>
          <button
            className="toggle btn-collapse"
            onClick={() => setNavbarOpen((prev) => !prev)}
          >
            <i className="fa-regular fa-bars"></i>
          </button>
          <div className={` searchToggle${searchOpen ? " showSearch" : ""}`}>
            <div className={` search2`}>
              {/* <input type="text" className="textfield" placeholder="Search..." />
              <button className="btnSearch">
                <i className="fa-regular fa-magnifying-glass"></i>
              </button> */}
              <SearchComponent />
            </div>
          </div>

          <ul id="toggleMenu"
            className={`menu-nav${navbarOpen ? " show-menu" : ""}`}>
            {links.map((link) => (
              <li key={link.id} className="nav-link">
                <Link onClick={() => handleLinkClick(link.id)} to={link.path} style={{
                    color:
                      activeLink === link.id
                        ? "#008b3e" // Change the color for the active link
                        : "#fff", // Default color for other links
                  }}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
