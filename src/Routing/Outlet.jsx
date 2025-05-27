import Header from "../Components/Includes/Header";
import Navbar from "../Components/Includes/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Includes/Footer";

function NavFooter() {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default NavFooter;
