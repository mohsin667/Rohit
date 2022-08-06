import React from "react";
import Frame from "../img/frame.png";

function Photography() {
  return (
    <div className="photograpy-container">
      <div className="container">
        <div className="text-body-column">
          <div className="name">Rohit Kataria</div>
          <div className="des">Photography</div>
          <div className="desc">
            <p>I found my passion for photography over 5 years ago and have experimented with various styles, subjects, and genres in a never-ending creative process. Rohit Kataria Photography is a platform where I showcase my work around photography and advertising.</p>
          </div>
          <a href="#" className="btn white wide">
            Visit Website
          </a>
        </div>
        <img className="frame" src={Frame} alt="photography" />
      </div>
    </div>
  );
}

export default Photography;
