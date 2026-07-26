import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "../data/data";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((p) => (p + 1) % testimonials.length);

  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Reviews</span>
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-sub">Real stories from people who love FreshMart</p>
        </div>

        <div className="testimonials-wrapper">
          <div className="testimonials-cards">
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                className={`testimonial-card${i === active ? " active" : i === (active - 1 + testimonials.length) % testimonials.length ? " prev" : " next"}`}
              >
                <Quote size={32} className="quote-icon" />
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-rating">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={15} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.avatar}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonial-controls">
            <button className="ctrl-btn" onClick={prev}><ChevronLeft size={20} /></button>
            <div className="testimonial-dots">
              {testimonials.map((_, i) => (
                <button key={i} className={`dot${i === active ? " active" : ""}`} onClick={() => setActive(i)} />
              ))}
            </div>
            <button className="ctrl-btn" onClick={next}><ChevronRight size={20} /></button>
          </div>
        </div>

        {/* Trust badges */}
        <div className="trust-badges">
          {[
            { icon: "🏆", label: "Best Grocery App 2024" },
            { icon: "🌱", label: "Certified Organic" },
            { icon: "🔒", label: "Secure & Trusted" },
            { icon: "♻️", label: "Eco-Friendly" },
          ].map((badge) => (
            <div key={badge.label} className="trust-badge">
              <span>{badge.icon}</span>
              <p>{badge.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
