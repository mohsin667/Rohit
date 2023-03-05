import React from "react";
import Banner from "../components/Banner";
import Journey from "../components/Journey";
import MySelf from "../components/MySelf";
import MyValues from "../components/MyValues";
import ProfileSummary from "../components/ProfileSummary";
import Skills from "../components/Skills";
import CaseStudy from "../components/CaseStudy";
import MasWoak from "../components/MasWoak.js";

function Work() {
  const subtitle = ["Product Designer", "Visual Designer", "Photographer"]
  return (
    <div className="work">
      <div className="work-banner">
        <Banner banner="work" subtitle={subtitle}/>
      </div>
      <MasWoak />
    </div>
  );
}

export default Work;
