import React from "react";

function Parallaxcomponent() {
  return (
    <div className="parallax-wrapper">
      <div className="container">
        <div className="boxs">
          <div className="box orange">
            <h3>
              03<span>yrs</span>
            </h3>
            <h4>Total</h4>
            <h4>Experience</h4>
          </div>
          <div className="box">
            <h3>
              24<span>+</span>
            </h3>
            <h4>Projects</h4>
            <h4>Done</h4>
          </div>
          <div className="box yellow">
            <h3>
              20<span>+</span>
            </h3>
            <h4>Clients</h4>
            <h4>Worldwide</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parallaxcomponent;
