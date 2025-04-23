import React, { useState } from "react";
import { AllProducts } from "./Card";
import Card from "./Card";

function ProductCards() {
  const BigProduct = AllProducts.filter((item) => item.type === "Big Products");
  const [visibleCount, setVisibleCount] = useState(4);

  const toggleProducts = () => {
    visibleCount >= BigProduct.length
      ? setVisibleCount(4)
      : setVisibleCount((prev) => prev + 4);
  };

  return (
    <div className="new-products py-5">
      <div className="container py-md-5 py-4">
        <h3>Top Products</h3>
        <div className="row mb-4 bricks">
          {BigProduct.slice(0, visibleCount).map((item, index) => (
            <Card
              key={index}
              Img={item.Img}
              heading={item.heading}
              firstPrice={item.firstPrice}
              SecPrice={item.SecPrice}
            />
          ))}
        </div>
        {visibleCount < BigProduct.length ? (
          <button className="w3ls-cart less-btn" onClick={toggleProducts}>
            Show More
          </button>
        ) : (
          <button className="w3ls-cart less-btn" onClick={toggleProducts}>
            Show Less
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCards;
