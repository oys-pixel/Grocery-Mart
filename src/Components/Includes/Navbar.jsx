import React, { useEffect, useState } from "react";
import img1 from "../../Images/nav.png";
import { AllProducts } from "../Product/Card";
import { Link, useLocation } from "react-router-dom";
function Navbar() {
  const [dark, setDark] = useState("");
  const [active, setActive] = useState(false);
  const categories = ["Kitchen", "HouseHold"];
  const ToggleTheme = () => {
    setDark(dark !== "light" ? "light" : "dark");
  };
  useEffect(() => {
    if (localStorage.getItem("dark")) {
      setDark(JSON.parse(localStorage.getItem("dark")));
    }
  }, []);
  useEffect(() => {
    if (dark !== "") {
      document.body.setAttribute("data-theme", dark);
      localStorage.setItem("dark", JSON.stringify(dark));
    }
  }, [dark]);
  return (
    <div className="dipt fixed-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon fa icon-expand fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <Link className={`nav-link `}  aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products <i className="fas fa-angle-down" />
                </Link>
                <ul
                  className="dropdown-menu dropdown-menu-2"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <div className="row">
                    {categories.map((category) => {
                      const filteredItems = AllProducts.filter(
                        (item) => item.type === category
                      );
                      return (
                        <div key={category} className="col-lg-4 mt-lg-0 mt-4">
                          <ul className="multi-column-dropdown">
                            <h6>{category}</h6>
                            {filteredItems.map((item, index) => (
                              <li key={index}>
                                <Link to="/">
                                  {item.name} {item.isNew && <span>New</span>}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                    <div className="col-lg-4">
                      <div className="w3ls_products_pos">
                        <h4 className="mb-4">
                          30%<i>Off/-</i>
                        </h4>
                        <img src={img1} alt=" " className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  About Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages <i className="fas fa-angle-down" />
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/">
                      Blog Posts
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Blog Single
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Single
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Faq's
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Shortcodes
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/formic">
                  Formic
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/OtherContact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          {/* toggle switch for light and dark theme */}
          <div className="cont-ser-position">
            <nav className="navigation-dark">
              <div className="theme-switch-wrapper">
                <label className="theme-switch" htmlFor="checkbox">
                  <input type="checkbox" id="checkbox" />
                  <div className="mode-container" onClick={ToggleTheme}>
                    <i
                      className={`fas fa-${dark === "dark" ? "sun" : "moon"}`}
                    />
                  </div>
                </label>
              </div>
            </nav>
          </div>
          {/* //toggle switch for light and dark theme */}
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
