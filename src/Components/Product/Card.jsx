import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img1e from "../../Images/e1.png";
import img2e from "../../Images/e2.png";
import img3e from "../../Images/e3.png";
import img4e from "../../Images/e4.png";
import img5e from "../../Images/f1.png";
import img6e from "../../Images/f2.png";
import img7e from "../../Images/f3.png";
import img8e from "../../Images/f4.png";
import img1ee from "../../Images/ee1.png";
import img2ee from "../../Images/ee2.png";
import img3ee from "../../Images/ee3.png";
import img4ee from "../../Images/ee4.png";
import img5ee from "../../Images/f11.png";
import img6ee from "../../Images/f22.png";
import img7ee from "../../Images/f33.png";
import img8ee from "../../Images/f44.png";
// ////////////////////////////////////
import img1 from "../../Images/a1.png";
import img2 from "../../Images/a2.png";
import img3 from "../../Images/a3.png";
import img4 from "../../Images/b1.png";
import img5 from "../../Images/b2.png";
import img6 from "../../Images/b3.png";
import img7 from "../../Images/c1.png";
import img8 from "../../Images/c2.png";
import img9 from "../../Images/c3.png";
import img10 from "../../Images/d1.png";
import img11 from "../../Images/d2.png";
import img12 from "../../Images/d3.png";
import Loading from "../Includes/Loading";

function Card({ Img, heading, firstPrice, SecPrice }) {
  const [currentImage, setCurrentImage] = useState(Img[0]);
  const [isHovering, setIsHovering] = useState(false);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (!isHovering) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => Img[(Img.indexOf(prev) + 1) % Img.length]);
    }, 600);

    return () => clearInterval(interval);
  }, [isHovering, Img]);

  return (
    <div
      className="col-md-3 col-lg-3 col-sm-6 mt-5 brick image-container"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setCurrentImage(Img[0]);
      }}
    >
      <div className="bnrtwo_boxes brick1">
        <div className="hs-wrapper hs-wrapper1">
          {!loaded && <Loading />}
          <img
            src={currentImage}
            alt={heading}
            onLoad={() => setLoaded(true)}
            className="img-fluid image acti"
          />
          <div className="pdt uper-animate_sub">
            <ul>
              <li>
                <Link to="/">
                  <i className="fas fa-eye" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <h5>
          <Link to="/">{heading}</Link>
        </h5>
        <div className="simpleCart_shelfItem">
          <p>
            <span>{firstPrice}</span> <i className="item_price">{SecPrice}</i>
          </p>
          <form action="#" method="post">
            <button type="button" className="w3ls-cart">
              Add to cart
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Card;

export function SmallCard({ img, name, price2, price1 }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="col-md-4 col-lg-4 col-sm-4 bnrtwo_boxes">
      <div className="hs-wrapper">
        {!loaded && <Loading />}
        <img
          src={img}
          alt=" "
          onLoad={() => setLoaded(true)}
          className="img-fluid "
        />

        <div className="uper-animate">
          <ul>
            <li>
              <Link to="/">
                <i className="fas fa-eye" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <h5>
        <Link to="/">{name}</Link>
      </h5>
      <div className="simpleCart_shelfItem">
        <p>
          <span>{price1}</span> <i className="item_price">{price2}</i>
        </p>
        <button type="button" className="takecart">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export const AllProducts = [
  { type: "Kitchen", name: "Meat & Seafood" },
  { type: "Kitchen", name: "Snack Foods", isNew: true },
  { type: "Kitchen", name: "Oils, Vinegars" },
  { type: "Kitchen", name: "Pasta & Noodles", isNew: true },
  { type: "HouseHold", name: "Detergents" },
  { type: "HouseHold", name: "Floor & Other Cleaners" },
  { type: "HouseHold", name: "Pet Care", isNew: true },
  { type: "HouseHold", name: "Festive Decoratives" },
  {
    type: "Vegetables",
    img: img1,
    name: "Ladies Finger 500g",
    price1: "$380",
    price2: "$302",
  },
  {
    type: "Vegetables",
    img: img2,
    name: "Brinjal long 500g",
    price1: "$380",
    price2: "$302",
  },
  {
    type: "Vegetables",
    img: img3,
    name: "Palak 250g",
    price1: "$380",
    price2: "$302",
  },

  {
    type: "Meats",
    img: img4,
    name: "Prawns (Big)",
    price1: "$380",
    price2: "$302",
  },
  {
    type: "Meats",
    img: img5,
    name: "Silver Belly Fish",
    price1: "$380",
    price2: "$302",
  },
  {
    type: "Meats",
    img: img6,
    name: "Prawns Meat (Small)",
    price1: "$380",
    price2: "$302",
  },

  {
    type: "Bakery",
    img: img7,
    name: "Pista Soan Papdi",
    price1: "$380",
    price2: "$302",
  },
  {
    type: "Bakery",
    img: img8,
    name: "KARACHI Halwa Box",
    price1: "$380",
    price2: "$302",
  },
  {
    type: "Bakery",
    img: img9,
    name: "KARACHI Fruit Cookies",
    price1: "$380",
    price2: "$302",
  },

  {
    type: "Beverages",
    img: img10,
    name: "Thums Up Soft drink",
    price1: "$380",
    price2: "$302",
  },
  {
    type: "Beverages",
    img: img11,
    name: "Coca-Cola Can",
    price1: "$380",
    price2: "$302",
  },
  {
    type: "Beverages",
    img: img12,
    name: "Fanta PET Bottle",
    price1: "$380",
    price2: "$302",
  },

  {
    type: "Big Products",
    Img: [img1e, img1ee],
    heading: "ProV Pistachios",
    firstPrice: "$520",
    SecPrice: "$500",
  },
  {
    type: "Big Products",
    Img: [img2e, img2ee],
    heading: "Himalayan Cashews",
    firstPrice: "$380",
    SecPrice: "$370",
  },
  {
    type: "Big Products",
    Img: [img3e, img3ee],
    heading: "Kernels Walnuts",
    firstPrice: "$150",
    SecPrice: "$100",
  },
  {
    type: "Big Products",
    Img: [img4e, img4ee],
    heading: "Himalayan Almonds",
    firstPrice: "$280",
    SecPrice: "$250",
  },
  {
    type: "Big Products",
    Img: [img5e, img5ee],
    heading: "Yellow Arhar Dal",
    firstPrice: "$40",
    SecPrice: "$30",
  },
  {
    type: "Big Products",
    Img: [img6e, img6ee],
    heading: "Tata Sampann Poha",
    firstPrice: "$280",
    SecPrice: "$170",
  },
  {
    type: "Big Products",
    Img: [img7e, img7ee],
    heading: "Lay's Onion Chips",
    firstPrice: "$20",
    SecPrice: "$10",
  },
  {
    type: "Big Products",
    Img: [img8e, img8ee],
    heading: "Cadbury Dairy Milk",
    firstPrice: "$300",
    SecPrice: "$200",
  },
  {
    type: "Big Products",
    Img: [img1e, img1ee],
    heading: "ProV Pistachios",
    firstPrice: "$520",
    SecPrice: "$500",
  },
  {
    type: "Big Products",
    Img: [img2e, img2ee],
    heading: "Himalayan Cashews",
    firstPrice: "$380",
    SecPrice: "$370",
  },
  {
    type: "Big Products",
    Img: [img3e, img3ee],
    heading: "Kernels Walnuts",
    firstPrice: "$150",
    SecPrice: "$100",
  },
  {
    type: "Big Products",
    Img: [img4e, img4ee],
    heading: "Himalayan Almonds",
    firstPrice: "$280",
    SecPrice: "$250",
  },
  {
    type: "Big Products",
    Img: [img3e, img3ee],
    heading: "Kernels Walnuts",
    firstPrice: "$150",
    SecPrice: "$100",
  },
  {
    type: "Big Products",
    Img: [img4e, img4ee],
    heading: "Himalayan Almonds",
    firstPrice: "$280",
    SecPrice: "$250",
  },
  {
    type: "Big Products",
    Img: [img7e, img7ee],
    heading: "Lay's Onion Chips",
    firstPrice: "$20",
    SecPrice: "$10",
  },
  {
    type: "Big Products",
    Img: [img8e, img8ee],
    heading: "Cadbury Dairy Milk",
    firstPrice: "$300",
    SecPrice: "$200",
  },
  {
    type: "Big Products",
    Img: [img1e, img1ee],
    heading: "ProV Pistachios",
    firstPrice: "$520",
    SecPrice: "$500",
  },
  {
    type: "Big Products",
    Img: [img2e, img2ee],
    heading: "Himalayan Cashews",
    firstPrice: "$380",
    SecPrice: "$370",
  },
];
// export function ImageWithLoader({ src, alt }) {
//   const [imageLoaded, setImageLoaded] = useState(false);

//   return (
//     <>
//       {!imageLoaded && <Loading />}
//       <img
//         src={src}
//         alt={alt}
//         className={`img-fluid position-relative ${
//           !imageLoaded ? "d-none" : ""
//         }`}
//         onLoad={() => setImageLoaded(true)}
//       />
//     </>
//   );
// }
export function MyNewImage({ src, alt }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const newImage = new Image();
    newImage.src = src;
    newImage.alt = alt;
    newImage.onload = () => {

      setImageLoaded(true);
      
    };
  }, [src]);

  return (
    <>
      {!imageLoaded ? (
        <Loading />
      ) : (
        imageLoaded && (
          <img src={src} alt={alt} className="img-fluid position-relative " />
        )
      )}
    </>
  );
}
