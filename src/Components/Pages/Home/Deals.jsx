import React from "react";
import img1 from "../../../Images/bgs3.jpg";
import img2 from "../../../Images/bgs5.jpg";
import img3 from "../../../Images/bgs4.jpg";

function Deals() {
  return (
    <>
      <div className="mydeals py-5">
        <div className="container py-md-5 py-4">
          <h2>Special Deals</h2>
          <div className="row">
            <div className="col-md-7 maniiy">
              <div className="manner">
                <img src={img1} alt=" " className="img-fluid" />
                <div className="mannerup1">
                  <h5>
                    30%<span>Off/-</span>
                  </h5>
                </div>
                <div className="mannerup">
                  <h4>
                    We Offer <span>Best Products</span>
                  </h4>
                </div>
              </div>
              <div className="manner">
                <img src={img2} alt=" " className="img-fluid" />
                <div className="mannerup">
                  <h4>
                    Best Store <span>For GROCERIES</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-5 maniy">
              <img src={img3} alt=" " className="img-fluid" />
              <div className="mannerdown text-end">
                <h4>
                  Big <span>Deals</span>
                </h4>
                <h5>
                  save up <span>to</span> 30%
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Deals;
