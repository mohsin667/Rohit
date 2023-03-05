import React from "react";
import Case from "../img/case.jpg"
function caseStudy() {
  return (
    <div className="case-study">
      <div className="container">
        <div className="row">
          <div className="case-study-container">
            <h2>Featured Casestudy</h2>
            <p>As the first designer at Iffort, I built the website, crafted the design system, and helped create a standout site experience for the client - ATS Greens.</p>
            <a href="#" className="btn white">
              View Case Study
            </a>
            <img src={Case} alt="case" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default caseStudy;
