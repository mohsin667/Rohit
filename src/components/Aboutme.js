import React from "react";

function Aboutme() {
  return (
    <div className="container">
      <div className="aboutme">
        <h2>
          <span>I am a designer</span> focused on creating digital experiences that empower people and solve real-world problems.
        </h2>
        <div className="eclips-row d-flex">
          <div className="eclips orange">
            <div className="circle"></div>
          </div>
          <div className="eclips black">
            <div className="circle"></div>
          </div>
          <div className="eclips yellow">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
