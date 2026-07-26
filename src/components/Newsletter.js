import React, { useState } from "react";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="newsletter-section" id="newsletter">
      <div className="newsletter-inner">
        <div className="newsletter-left">
          <Mail size={40} className="newsletter-icon" />
          <h2>Get Fresh Deals in Your Inbox</h2>
          <p>Subscribe and get 15% off your first order. No spam, just freshness.</p>
          <ul className="newsletter-perks">
            {["Weekly fresh picks", "Exclusive member deals", "Seasonal recipes", "Early access to sales"].map((p) => (
              <li key={p}><CheckCircle size={15} /> {p}</li>
            ))}
          </ul>
        </div>
        <div className="newsletter-right">
          {submitted ? (
            <div className="success-msg">
              <CheckCircle size={48} />
              <h3>You're in! 🎉</h3>
              <p>Welcome to FreshMart family. Check your inbox for your 15% off coupon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="newsletter-form">
              <label>First Name</label>
              <input type="text" placeholder="Enter your name" required />
              <label>Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-primary">
                Subscribe & Save 15% <ArrowRight size={18} />
              </button>
              <p className="form-disclaimer">By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
