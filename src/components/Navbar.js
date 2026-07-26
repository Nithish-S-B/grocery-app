import React, { useState, useEffect } from "react";
import { ShoppingCart, Search, Menu, X, Leaf, MapPin, Phone } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Navbar({ onCartOpen }) {
  const { totalItems } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="topbar">
        <div className="topbar-inner">
          <span className="topbar-item"><MapPin size={13} /> Free delivery on orders above ₹499</span>
          <span className="topbar-item"><Phone size={13} /> 1800-FRESH-MART</span>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          <a href="#home" className="logo">
            <Leaf size={24} className="logo-icon" />
            <span>Fresh<strong>Mart</strong></span>
          </a>

          <ul className={`nav-links${menuOpen ? " open" : ""}`}>
            {["Home", "Shop", "Offers", "About", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button className="icon-btn" onClick={() => setSearchOpen(!searchOpen)} aria-label="Search">
              <Search size={20} />
            </button>
            <button className="icon-btn cart-btn" onClick={onCartOpen} aria-label="Cart">
              <ShoppingCart size={20} />
              {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
            </button>
            <button className="icon-btn hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="search-bar">
            <div className="search-inner">
              <Search size={18} />
              <input autoFocus placeholder="Search for fruits, vegetables, dairy..." />
              <button onClick={() => setSearchOpen(false)}><X size={18} /></button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
