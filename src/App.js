import React from "react";
import { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Components/Pages/Contact";
import Header from "./Components/Includes/Header";
import Navbar from "./Components/Includes/Navbar";
import Footer from "./Components/Includes/Footer";
import Loading from "./Components/Includes/Loading";
import NoPage from "./Components/Pages/NoPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Formic from "./Components/Pages/Formic";
// import OtherForm from "./Components/Pages/OtherForm";
const Home = lazy(() => import("./Components/Pages/Home/Home"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/OtherContact" element={<Contact />} />
          <Route path="/" element={<Formic />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
