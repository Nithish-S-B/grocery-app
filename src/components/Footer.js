import React from "react";
import { Leaf, Instagram, Twitter, Facebook, Youtube, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logo">
            <Leaf size={22} className="logo-icon" />
            <span>Fresh<strong>Mart</strong></span>
          </div>
          <p>From our farm to your family's table. Fresh, organic, and always delivered with care.</p>
          <div className="social-links">
            {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="#!" className="social-link" aria-label="social"><Icon size={18} /></a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            {["Home", "Shop", "Offers & Deals", "About Us", "Blog", "Careers"].map((l) => (
              <li key={l}><a href="#!">{l}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Categories</h4>
          <ul>
            {["Fresh Fruits", "Vegetables", "Dairy & Eggs", "Bakery", "Meat & Fish", "Grains & Pulses"].map((l) => (
              <li key={l}><a href="#!">{l}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul className="contact-list">
            <li><MapPin size={15} /> 12 Green Lane, Chennai, Tamil Nadu</li>
            <li><Mail size={15} /> hello@freshmart.in</li>
            <li><Phone size={15} /> 1800-FRESH-MART</li>
          </ul>
          <div className="app-badges">
            <a href="#!" className="app-badge">📱 App Store</a>
            <a href="#!" className="app-badge">🤖 Play Store</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 FreshMart. All rights reserved.</p>
        <div className="footer-links">
          <a href="#!">Privacy Policy</a>
          <a href="#!">Terms of Service</a>
          <a href="#!">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
