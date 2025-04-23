import React from "react";
import mainImage from "../../../Images/banner-img.png";
import { Link } from "react-router-dom";
// import Loading from "../../Includes/Loading";
import { MyNewImage } from "../../Product/Card";
function TopPage() {
  // const [myImage, setmyImage] = useState(false);

  return (
    <>
      <section id="start" className="banner py-5">
        <div className="banner-content">
          <div className="container pt-sm-5 pb-md-4">
            <div className="row align-items-center py-4">
              <div className="col-md-6">
                <p className="banner-sub mb-1">
                  Start your daily online shopping!
                </p>
                <h3 className="mb-md-5 mb-4 title">
                  Stay home &amp; we will deliver your daily need's
                </h3>
                <div className="d-flex align-items-center btnbanner mt-sm-5 mt-4">
                  <Link to="/" className="btn btnhook">
                    Shop Now
                  </Link>
                </div>
              </div>
              <div className="col-md-6 right-banner-2 position-relative p-md-0 mt-sm-0 mt-4">
                <div className="sub-banner-image mx-auto">
                  {/* <ImageWithLoader src={mainImage} alt="Loading image" /> */}
                  <MyNewImage src={mainImage} alt="front image" />
                  {/* {myImage && (
                    <Loading />
                    <img
                      src={mainImage}
                      className="img-fluid position-relative"
                      onLoad={() => setmyImage(true)}
                      alt=" "
                    />
                  } */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TopPage;
