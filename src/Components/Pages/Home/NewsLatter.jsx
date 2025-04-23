import React from "react";

function NewsLatter() {
  return (
    <>
      <div className="newsletter">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-6 firstnews">
              <h3>Newsletter</h3>
              <p>Excepteur sint occaecat cupidatat non proident, sunt.</p>
            </div>
            <div className="col-md-12 col-lg-6 secondnews">
              <form action="#" method="post">
                <input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  required=""
                  fdprocessedid="mpea85"
                />
                <button className="btn btn-style" type="button">
                  <span className="fas fa-paper-plane" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsLatter;
