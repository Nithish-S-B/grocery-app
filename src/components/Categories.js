import React from "react";
import { ArrowRight } from "lucide-react";
import { categories } from "../data/data";

export default function Categories() {
  return (
    <section className="section categories-section" id="categories">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Browse</span>
          <h2 className="section-title">Shop by Category</h2>
          <p className="section-sub">Everything fresh, organised just for you</p>
        </div>

        <div className="categories-grid">
          {categories.map((cat, i) => (
            <a
              key={cat.id}
              href="#shop"
              className="category-card"
              style={{ "--card-bg": cat.color, animationDelay: `${i * 0.08}s` }}
            >
              <div className="cat-icon">{cat.icon}</div>
              <div className="cat-info">
                <h3>{cat.name}</h3>
                <p>{cat.count} items</p>
              </div>
              <div className="cat-arrow">
                <ArrowRight size={16} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
