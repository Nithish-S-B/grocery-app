import React from "react";
import { X, Trash2, ShoppingBag, Plus, Minus, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQty, totalItems, totalPrice, clearCart } = useCart();

  return (
    <>
      <div className={`cart-overlay${open ? " visible" : ""}`} onClick={onClose} />
      <div className={`cart-drawer${open ? " open" : ""}`}>
        <div className="cart-header">
          <div className="cart-title">
            <ShoppingBag size={22} />
            <h2>Your Cart</h2>
            {totalItems > 0 && <span className="cart-count">{totalItems} items</span>}
          </div>
          <button className="icon-btn" onClick={onClose}><X size={22} /></button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <div className="empty-icon">🛒</div>
            <h3>Your cart is empty</h3>
            <p>Add some fresh items to get started</p>
            <button className="btn-primary" onClick={onClose}>
              Start Shopping <ArrowRight size={16} />
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-emoji">{item.emoji}</div>
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <span>₹{item.price.toFixed(2)} / {item.unit}</span>
                  </div>
                  <div className="cart-item-controls">
                    <button className="qty-btn" onClick={() => updateQty(item.id, item.qty - 1)}><Minus size={12} /></button>
                    <span>{item.qty}</span>
                    <button className="qty-btn" onClick={() => updateQty(item.id, item.qty + 1)}><Plus size={12} /></button>
                  </div>
                  <div className="cart-item-price">
                    <strong>₹{(item.price * item.qty).toFixed(2)}</strong>
                    <button className="remove-btn" onClick={() => removeItem(item.id)}><Trash2 size={14} /></button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-summary">
                <div className="summary-row"><span>Subtotal</span><span>₹{totalPrice.toFixed(2)}</span></div>
                <div className="summary-row"><span>Delivery</span><span className="free">{totalPrice >= 499 ? "FREE" : "₹49"}</span></div>
                {totalPrice < 499 && (
                  <p className="delivery-hint">Add ₹{(499 - totalPrice).toFixed(2)} more for free delivery</p>
                )}
                <div className="summary-row total-row">
                  <strong>Total</strong>
                  <strong>₹{(totalPrice + (totalPrice >= 499 ? 0 : 49)).toFixed(2)}</strong>
                </div>
              </div>
              <button className="btn-primary checkout-btn">
                Proceed to Checkout <ArrowRight size={18} />
              </button>
              <button className="clear-btn" onClick={clearCart}>Clear Cart</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
