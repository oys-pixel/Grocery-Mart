import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import PopUp from "../Pages/Home/PopUp";
import { CartContext } from "../Pages/Cart/CartReducer";

function Header() {
  const [popup, setPopup] = useState(false);
  const { state } = useContext(CartContext);
  const TotalItems = state.cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

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
            <span className="cart-count-badge">{TotalItems}</span>
            <button className="viewcart" type="button">
              <Link to="/cart">
                <i className="fas fa-shopping-bag" />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
