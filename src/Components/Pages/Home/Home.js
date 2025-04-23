import React from "react";

import TopPage from "./TopPage";
import Banner from "./Banner";
import Deals from "./Deals";
import Brand from "./Brand";

import ProductCards from "../../Product/ProductCards";
import Product from "../../Product/Product";

function Home() {
  return (
    <>
      <TopPage />
      <Product />
      <Banner />
      <Deals />
      <ProductCards />
      <Brand />
    </>
  );
}

export default Home;
