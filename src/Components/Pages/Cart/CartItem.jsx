import { useContext } from "react";
import { CartContext } from "./CartReducer";
import { toast } from "react-toastify";

const CartItem = () => {
  const { state, dispatch } = useContext(CartContext);
  const { cartItems } = state;

  const RemoveItem = (item) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: item.id,
    });
    toast.info(" Removed from cart", {
      position: "bottom-left",
      autoClose: 500,
    });
  };
  if (cartItems.length === 0) {
    return (
      <tbody>
        <tr>
          <td colSpan="6" className="text-center py-5 fs-5">
            Your cart is empty
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody>
      {cartItems.map((item) => {
        const price = parseFloat(
          item.price2
            ? item.price2.replace("$", "")
            : item.SecPrice?.replace("$", "") || 0
        );

        return (
          <tr key={item.id}>
            <td>
              <img
                src={item.img || item.Img?.[0]}
                alt={item.name || item.heading}
                style={{ width: "60px", height: "60px", objectFit: "cover" }}
              />
            </td>
            <td>{item.name || item.heading}</td>
            <td>{item.price2 || item.SecPrice}</td>
            <td>
              <div className="d-flex justify-content-center align-items-center gap-2">
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() =>
                    dispatch({ type: "DECREASE_QUANTITY", payload: item.id })
                  }
                >
                  −
                </button>
                <span className="fw-semibold">{item.quantity}</span>
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() =>
                    dispatch({ type: "INCREASE_QUANTITY", payload: item.id })
                  }
                >
                  +
                </button>
              </div>
            </td>
            <td>${(price * item.quantity).toFixed(2)}</td>
            <td>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => RemoveItem(item)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trash-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"></path>
                </svg>
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default CartItem;
