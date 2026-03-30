import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/CartSidebar.css';

function CartSidebar() {
  const {
    cart,
    isCartOpen,
    toggleCart,
    updateQuantity,
    removeFromCart,
    getTotalPrice
  } = useCart();

  // 🛑 Prevent crash if cart is somehow undefined
  if (!cart) return null;

  if (!isCartOpen) return null;

  return (
    <div className="cart-sidebar">
      <button onClick={toggleCart}>Close</button>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id}>
              <h4>{item.name}</h4>
              <p>${item.price}</p>

              <input
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.id, Number(e.target.value))
                }
              />

              <button onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}

          <h3>Total: ${getTotalPrice()}</h3>
        </>
      )}
    </div>
  );
}

export default CartSidebar;