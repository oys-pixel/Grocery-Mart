import React from "react";

function Cart() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Your Cart</h1>
            <div className="heading-cart d-flex justify-content-evenly align-items-center">
              <h4>Item</h4>
              <h4>Price</h4>
              <h4>Quantity</h4>
              <h4>Total</h4>
            </div>
          </div>
          {/* <div className="col-md-12">
            <p>Your cart is currently empty.</p>
          </div> */}

          <div className="col-md-12">
            <button className="btn btn-primary">Continue Shopping</button>
            <button className="btn btn-danger">Clear Cart</button>
            <button className="btn btn-success">Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
