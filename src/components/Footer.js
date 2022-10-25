import React from "react";
import "./style.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-grid-one">
        <p>scrimba</p>
        <a href="#" className="footer-link">
          Home
        </a>

        <a href="#" className="footer-link">
          Plans & Pricing
        </a>

        <a href="#" className="footer-link">
          Gift membership
        </a>

        <a href="#" className="footer-link">
          Scholarship Program
        </a>

        <a href="#" className="footer-link">
          Teacher talent program
        </a>
      </div>
      <div className="footer-grid-two">
        <p>Community</p>

        <a href="#">Explore the community</a>

        <a href="#">Community Handbook</a>

        <a href="#">Podcast</a>

        <a href="#">YouTube</a>

        <a href="#">Blog</a>
      </div>
      <div className="footer-grid-three">
        <p>Courses</p>

        <a href="#">All courses</a>

        <a href="#">Free courses</a>

        <a href="#">Pro courses</a>

        <a href="#">Frontend Path</a>

        <a href="#">Self-paced Bootcamp</a>
      </div>
      <div className="footer-grid-four">
        <p>Company</p>

        <a href="#">About us</a>

        <a href="#">Careers</a>

        <a href="#">Support center</a>

        <a href="#">Terms</a>

        <a href="#">Privacy</a>
      </div>
    </div>
  );
}

export default Footer;
