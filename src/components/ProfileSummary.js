import React from "react";
import { Link } from "react-router-dom";
import Resume from "../img/work.jpg"
function ProfileSummary() {
  
  return (
    <div className="profile-summary">
      <div className="container">
        <div className="line-name">Profile</div>
        <h2 className="line-heading">
          <span>Hello, I'm Rohit Kataria</span> - UI/UX Designer based in India.
        </h2>
        <div className="summary">
          <address>Currently working as Product Designer at CarDekho Group | India.</address>
          <div className="bio">
            <p>An enthusiastic and professional Interactive Designer, who enjoys being part of a creative and productive team. I am interested in the future of interactive media, particularly digital technology and using industry-standard multimedia software packages, designing the interface, and testing the functionality of the end product. Having the urge to be pixel perfect and a strong understanding of a good UI UX is what keeps me motivated to perfect my work. Based in Delhi, India.</p>
            <a href="/CV.pdf" target="_blank" download className="btn">Download CV</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSummary;
