import React from "react";
import { Link } from "react-router-dom";

function PopUp({ close }) {
  return (
    <>
      <div id="search" class="pop-overlay">
        <div class="popup">
          <form action="error.html" method="GET" class="search-box">
            <input type="search" placeholder="Enter Keyword..." autofocus="" />
            <button type="button" class="btn">
              <span class="fas fa-search" aria-hidden="true"></span>
            </button>
          </form>
        </div>
        <Link class="closeer" to="/" onClick={close}>
          ×
        </Link>
      </div>
    </>
  );
}

export default PopUp;
