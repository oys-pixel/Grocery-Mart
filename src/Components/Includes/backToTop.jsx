import React, { useState, useEffect } from "react";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      id="movetop"
      className="back-to-top"
      style={{ display: visible ? "block" : "none" }}
      onClick={scrollToTop}
    >
      <span className="fas fa-level-up-alt" aria-hidden="true"></span>
    </button>
  );
}

export default BackToTop;
