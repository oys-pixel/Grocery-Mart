import React from "react";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <>
      <div className="banner-bottom1">
        <div className="row brog m-0">
          <div className="col-md-7 drift">
            <h3>
              Free Delivery
              <span>
                20% <i>Cashback</i>
              </span>
            </h3>
            <Link className="btn btn-style" href="/">
              Shop Now
            </Link>
          </div>
          <div className="col-md-5 offside d-flex align-items-center">
            <h4>Organic Foods</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
