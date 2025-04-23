import React, { useState } from "react";
import { Link } from "react-router-dom";
import PopUp from "../Pages/Home/PopUp";

function Header() {
  const [popup, setPopup] = useState(false);
  return (
    
      <div className="head">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="user-1">
              <Link to="/">
                <i className="fas fa-user" />
              </Link>
            </div>
            <div className="cent-heading text-center ml-auto">
              <h1>
                <Link to="/">
                  Grocery Mart<span>Online Grocery Shopping</span>
                </Link>
              </h1>
            </div>
            <div className="topheadesearch position-absolute">
              <div className="mx-lg-2">
                <Link
                  to="/"
                  className="btn search-btn p-0"
                  title="search"
                  onClick={() => setPopup(true)}
                >
                  <i className="fas fa-search" />
                </Link>
                {popup && <PopUp close={() => setPopup(false)} />}
              </div>
            </div>
            <div className="cart">
              <form action="/" method="post" className="last">
                <input type="hidden" name="cmd" defaultValue="_cart" />
                <input type="hidden" name="display" defaultValue={1} />
                <button className="viewcart" type="button">
                  <i className="fas fa-shopping-bag" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
  
  );
}

export default Header;
