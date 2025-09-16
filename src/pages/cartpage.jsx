import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../stores/slices/cartSlices";

const CartPage = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2>Your Cart</h2>

      {items.length === 0 ? (
        <p>Your cart is empty 🛒</p>
      ) : (
        <>
          <div className="cart-list">
            {items.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.img} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>${item.price} × {item.qty}</p>
                </div>
                <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
              </div>
            ))}
          </div>

          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export default CartPage;
