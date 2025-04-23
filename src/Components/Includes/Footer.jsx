import React from "react";
import { Link } from "react-router-dom";
import NewsLatter from "../Pages/Home/NewsLatter";
import BackToTop from "./backToTop";

function Footer() {
  return (
    <>
      <NewsLatter />
      <div className="footer pt-5">
        <div className="container py-4">
          <div className="row end-solvs">
            <div className="col-md-6 col-sm-6 col-lg-3 end-solv">
              <h3>Contact</h3>
              <ul className="address">
                <li>
                  <i className="fas fa-map-marker-alt" />
                  London, 235 Terry, 10001
                </li>
                <li>
                  <i className="fas fa-envelope-open-text" />
                  <Link to="mailto:info@example.com">info@example.com</Link>
                </li>
                <li>
                  <Link to="tel:+44-000-888-999">
                    <i className="fas fa-phone-alt" />
                    ++44-000-888-999
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-3 end-solv">
              <h3>Information</h3>
              <ul className="info">
                <li>
                  <Link to="/">
                    <i className="fas fa-angle-right" />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fas fa-angle-right" />
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fas fa-angle-right" />
                    Shortcodes
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fas fa-angle-right" />
                    FAQ's
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fas fa-angle-right" />
                    Special Products
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-3 end-solv">
              <h3>Category</h3>
              <ul className="info">
                <li>
                  <Link to="/">
                    <i className="fas fa-angle-right" />
                    Fruits &amp; Vegetables
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fas fa-angle-right" />
                    Meats &amp; Seafood
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fas fa-angle-right" />
                    Bakery &amp; Pastry
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fas fa-angle-right" />
                    Beverages
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fas fa-angle-right" />
                    Breakfast &amp; Dairy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-3 end-solv">
              <h3>Profile</h3>
              <ul className="info">
                <li>
                  <Link to="/">
                    <i className="fas fa-angle-right" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fas fa-angle-right" />
                    Today's Deals
                  </Link>
                </li>
              </ul>
              <h4>Follow Us</h4>
              <div className="media">
                <ul>
                  <li>
                    <Link to="/" className="facebook">
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="twitter">
                      <i className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="google">
                      <i className="fab fa-google-plus-g" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="pinterest">
                      <i className="fab fa-pinterest-p" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copy mt-4">
          <div className="container">
            <p className="copy-text">
              © 2021 Grocery Mart. All rights reserved. Design by
              <Link to="/">W3Layouts</Link>
            </p>
          </div>
        </div>
      </div>
      <BackToTop />
    </>
  );
}

export default Footer;
