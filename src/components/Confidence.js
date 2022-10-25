import React from "react";
import "./style.css";
function Confidence() {
  return (
    <div className="container-co">
      <div className="confidence">
        <h3>Buy with confidence</h3>
        <div className="co">
          <div className="co-one">
            <p className="co-p-one">Money Back Guarantee</p>
            <p className="co-p-two">
              Full 30-day guarantee, no questions asked.
            </p>
          </div>
          <div className="co-two">
            <p className="co-p-one">Keep Discount For Life</p>
            <p className="co-p-two">
              Your discount stays for as long as you subscribe.
            </p>
          </div>
          <div className="co-three">
            <p className="co-p-one">Cancel Whenever</p>
            <p className="co-p-two">
              No lock-in period. Cancel whenever you want.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Confidence;
