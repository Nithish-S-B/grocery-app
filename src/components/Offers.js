import React from "react";
import { ArrowRight, Clock } from "lucide-react";
import { offers } from "../data/data";

export default function Offers() {
  return (
    <section className="section offers-section" id="offers">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">🔥 Hot Deals</span>
          <h2 className="section-title">Special Offers</h2>
          <p className="section-sub">Limited-time deals you won't want to miss</p>
        </div>

        <div className="offers-grid">
          {offers.map((offer, i) => (
            <div
              key={offer.id}
              className="offer-card"
              style={{ background: offer.bg, animationDelay: `${i * 0.1}s` }}
            >
              <div className="offer-tag">
                <Clock size={12} /> {offer.tag}
              </div>
              <div className="offer-emoji">{offer.emoji}</div>
              <h3 className="offer-title">{offer.title}</h3>
              <p className="offer-sub">{offer.subtitle}</p>
              <div className="offer-discount">{offer.discount}</div>
              <button className="offer-cta">
                Grab Deal <ArrowRight size={15} />
              </button>
            </div>
          ))}
        </div>

        {/* Banner strip */}
        <div className="banner-strip">
          <div className="banner-content">
            {["🚚 Free Delivery", "🌿 100% Organic", "🔄 Easy Returns", "💳 Secure Payment", "🕐 Same-Day Delivery", "⭐ 50K+ Happy Customers"].map((item, i) => (
              <span key={i} className="banner-item">{item}</span>
            ))}
            {/* Repeat for seamless scroll */}
            {["🚚 Free Delivery", "🌿 100% Organic", "🔄 Easy Returns", "💳 Secure Payment", "🕐 Same-Day Delivery", "⭐ 50K+ Happy Customers"].map((item, i) => (
              <span key={`r-${i}`} className="banner-item">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
