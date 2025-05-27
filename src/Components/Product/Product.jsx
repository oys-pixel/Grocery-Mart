import React, { lazy, Suspense, useContext, useState } from "react";
import videoImg from "../../Images/image1.jpg";
import { AllProducts, SmallCard } from "./Card";
import { CartContext } from "../Pages/Cart/CartReducer";
import { toast } from "react-toastify";

function Product() {
  const [activeTab, setActiveTab] = useState("Vegetables");
  const categories = ["Vegetables", "Meats", "Bakery", "Beverages"];
  const { dispatch } = useContext(CartContext);
  const addToCart = (item) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: item,
    });
    toast.info(" Added to Cart", {
      position: "bottom-left",
      autoClose: 500,
    });
  };

  return (
    <div className="bnrtwo py-5">
      <div className="container py-lg-5 py-4">
        <div className="row align-items-center">
          <div className="col-lg-5 vid_btn">
            <div className="position-relative">
              <img src={videoImg} alt="" className="img-fluid radius-image" />
              <a
                href="#small-dialog"
                className="popup-with-zoom-anim play-view text-center position-absolute"
              >
                <span className="vidicon">
                  <span className="fa fa-play"></span>
                </span>
              </a>
              <div id="small-dialog" className="zoom-anim-dialog mfp-hide">
                <iframe
                  src="https://player.vimeo.com/video/106183791?h=b24e6f79f8"
                  title="About our Store"
                  allow="autoplay; fullscreen"
                  allowFullScreen=""
                ></iframe>
              </div>
            </div>
          </div>
          <div className="col-lg-7 wthree_banner_bottom_right">
            <ul className="nav nav-tabs" id="myTab">
              {categories.map((category) => (
                <li className="nav-item" key={category}>
                  <button
                    className={`nav-link ${
                      activeTab === category ? "active" : ""
                    }`}
                    type="button"
                    onClick={() => setActiveTab(category)}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
            <div className="row agile_ecommerce_tabs">
              {AllProducts.map(
                (item, index) =>
                  activeTab === item.type && (
                    <SmallCard
                      key={index}
                      name={item.name}
                      img={item.img}
                      price1={item.price1}
                      price2={item.price2}
                      onClick={() => addToCart(item)}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
