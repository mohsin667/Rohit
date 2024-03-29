import React from "react";
import Banner from "../components/Banner";
import Journey from "../components/Journey";
import MySelf from "../components/MySelf";
import MyValues from "../components/MyValues";
import ProfileSummary from "../components/ProfileSummary";
import Skills from "../components/Skills";
import CaseStudy from "../components/CaseStudy";

function Terms() {
  const subtitle = ["My Journey", "My Skills", "My Values"]
  return (
    <div className="about">
      <div className="about-banner">
        <Banner banner="about" subtitle={subtitle}/>
      </div>
      <ProfileSummary />
      <Journey />
      <Skills />
      <MySelf />
      <MyValues />
      <CaseStudy />
    </div>
  );
}

export default Terms;
