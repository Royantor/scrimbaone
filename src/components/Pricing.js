import React from "react";
import "./style.css";
function Pricing() {
  return (
    <section>
      <div className="price-header-img">
        <h3 className="price-header-name">Scrimba</h3>
      </div>
      <div className="pricing-grid">
        <div className="pricing-gird-one">
          <div className="pricing-content-one">
            <h3>Free member</h3>
            <p>Learn basic HTML, CSS, JavaScript and React</p>
            <h4>Access to intro courses</h4>
            <h4>Basic access to community</h4>
            <a href="#" className="grid-account">
              Create Free Account
            </a>
          </div>
        </div>
        <div className="pricing-gird-two">
          <div className="pricing-content-two">
            <h3>Pro member</h3>
            <p>All the content you need to become a hireable developer</p>
            <h4>77h Frontend Career Path</h4>
            <h4>All 60+ courses</h4>
            <h4>Full access to community</h4>
            <h4>Course certificates</h4>
            <a href="#" className="grid-account">
              Create Free Account
            </a>
          </div>
        </div>
        <div className="pricing-gird-three">
          <div className="pricing-content-three">
            <h3>Bootcamp</h3>
            <p>Fast-track your job readiness</p>
            <h4>Everything in Pro +</h4>
            <h4>Code reviews</h4>
            <h4>Dedicated study group</h4>
            <h4>Teacher-led sessions</h4>
            <a href="#" className="grid-account">
              Create Free Account
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
