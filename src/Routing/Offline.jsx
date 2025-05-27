import React, { useState } from "react";

function Offline() {
  const [active, setActive] = useState(false);

  return (
    <div className={`offline ${active ? "active" : ""}`}>
      <p>
        Y<span>O</span>U A<span>R</span>E
      </p>
      <p>
        <button
          className="power-button"
          onClick={() => setActive((prev) => !prev)}
        >
          <picture
            className={`power-line ${active ? "centered" : ""}`}
          ></picture>
          <picture className="power-circle"></picture>
        </button>
        FF<span>L</span>INE
      </p>
    </div>
  );
}

export default Offline;