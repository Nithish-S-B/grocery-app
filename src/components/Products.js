import React, { useState } from "react";
import { ShoppingCart, Star, Plus, Minus, Heart } from "lucide-react";
import { products } from "../data/data";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addItem, items, updateQty } = useCart();
  const cartItem = items.find((i) => i.id === product.id);
  const [wished, setWished] = useState(false);

  return (
    <div className="product-card">
      {product.badge && (
        <span className={`product-badge badge-${product.badge.toLowerCase().replace(" ", "-")}`}>
          {product.badge}
        </span>
      )}
      <button
        className={`wish-btn${wished ? " wished" : ""}`}
        onClick={() => setWished(!wished)}
        aria-label="Wishlist"
      >
        <Heart size={16} fill={wished ? "#e74c3c" : "none"} color={wished ? "#e74c3c" : "#999"} />
      </button>

      <div className="product-emoji">{product.emoji}</div>

      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-rating">
          <Star size={13} fill="#f59e0b" color="#f59e0b" />
          <span>{product.rating}</span>
          <span className="review-count">({product.reviews})</span>
        </div>
        <div className="product-price-row">
          <div>
            <span className="product-price">₹{product.price.toFixed(2)}</span>
            {product.oldPrice && <span className="product-old-price">₹{product.oldPrice.toFixed(2)}</span>}
            <span className="product-unit"> / {product.unit}</span>
          </div>
        </div>
      </div>

      <div className="product-footer">
        {cartItem ? (
          <div className="qty-control">
            <button onClick={() => updateQty(product.id, cartItem.qty - 1)} className="qty-btn">
              <Minus size={14} />
            </button>
            <span className="qty-num">{cartItem.qty}</span>
            <button onClick={() => updateQty(product.id, cartItem.qty + 1)} className="qty-btn">
              <Plus size={14} />
            </button>
          </div>
        ) : (
          <button className="add-cart-btn" onClick={() => addItem(product)}>
            <ShoppingCart size={15} /> Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

const allCategories = ["All", ...new Set(products.map((p) => p.category))];

export default function Products() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? products
    : products.filter((p) => p.category === activeFilter);

  return (
    <section className="section products-section" id="shop">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Products</span>
          <h2 className="section-title">Fresh Picks for You</h2>
          <p className="section-sub">Sourced daily from local farms and trusted suppliers</p>
        </div>

        <div className="filter-tabs">
          {allCategories.map((cat) => (
            <button
              key={cat}
              className={`filter-tab${activeFilter === cat ? " active" : ""}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
