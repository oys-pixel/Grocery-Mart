import CartItem from "./CartItem";
import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "./CartReducer";
import { toast } from "react-toastify";

function Cart() {
  const { state, dispatch } = useContext(CartContext);
  const { cartItems } = state;
  const ClearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
    toast("Cart is empty");
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center fw-bold">Your Shopping Cart</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle text-center">
          <thead className="table-primary">
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <CartItem />
        </table>
      </div>
      <button
        className="btn btn-outline-danger"
        disabled={state.cartItems.length === 0}
        onClick={ClearCart}
      >
        Clear Cart
      </button>
    </div>
  );
}

export default Cart;
