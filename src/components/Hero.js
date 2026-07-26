import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const slides = [
  {
    tag: "100% Organic",
    headline: "Farm Fresh\nGoodness\nDelivered",
    sub: "From our farm to your table — same-day delivery on all orders.",
    cta: "Shop Now",
    emoji: "🥬🍅🥕",
    accent: "#2d6a4f",
  },
  {
    tag: "Seasonal Picks",
    headline: "Nature's Best,\nEvery\nSeason",
    sub: "Handpicked seasonal produce at the peak of freshness.",
    cta: "Explore Seasonal",
    emoji: "🍓🫐🍇",
    accent: "#40916c",
  },
  {
    tag: "Zero Waste",
    headline: "Good for You.\nGood for\nthe Planet.",
    sub: "Eco-friendly packaging and locally sourced ingredients.",
    cta: "Learn More",
    emoji: "🌿🌱🪴",
    accent: "#1b4332",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % slides.length);
        setAnimating(false);
      }, 400);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[active];

  return (
    <section className="hero" id="home">
      <div className={`hero-content${animating ? " fade-out" : " fade-in"}`}>
        <span className="hero-tag">{slide.tag}</span>
        <h1 className="hero-headline">
          {slide.headline.split("\n").map((line, i) => (
            <span key={i} className="headline-line">{line}</span>
          ))}
        </h1>
        <p className="hero-sub">{slide.sub}</p>
        <div className="hero-actions">
          <a href="#shop" className="btn-primary">
            {slide.cta} <ArrowRight size={18} />
          </a>
          <a href="#offers" className="btn-ghost">View Offers</a>
        </div>
        <div className="hero-stats">
          <div className="stat"><strong>50K+</strong><span>Happy Customers</span></div>
          <div className="stat-divider" />
          <div className="stat"><strong>200+</strong><span>Fresh Products</span></div>
          <div className="stat-divider" />
          <div className="stat"><strong>1hr</strong><span>Fast Delivery</span></div>
        </div>
      </div>

      <div className={`hero-visual${animating ? " fade-out" : " fade-in"}`}>
        <div className="hero-circle">
          <div className="hero-emoji-main">{slide.emoji.split("")[0]}</div>
          <div className="orbit-item orbit-1">{slide.emoji.split("")[2]}</div>
          <div className="orbit-item orbit-2">{slide.emoji.split("")[4]}</div>
          <div className="orbit-item orbit-3">🌿</div>
        </div>
        <div className="floating-badge badge-1">
          <span>🚚</span> Free Delivery
        </div>
        <div className="floating-badge badge-2">
          <span>⭐</span> 4.9 Rated
        </div>
      </div>

      <div className="slide-indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`indicator${i === active ? " active" : ""}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>

      <a href="#categories" className="scroll-hint">
        <ChevronDown size={22} />
      </a>
    </section>
  );
}
