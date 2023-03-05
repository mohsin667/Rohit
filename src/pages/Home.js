import React from "react";
import Banner from "../components/Banner";
import AboutSection from "../components/AboutSection";
import Mas from "../components/Masonry";
import Photography from "../components/Photography";
import Urbanguy from "../components/Urbanguy";
import Designpull from "../components/Designpull";
import Aboutme from "../components/Aboutme";
import Parallaxcomponent from "../components/Parallaxcomponent";
import Promotion from "../components/Promotion";

function Home() {
  const subtitle = ["Product Designer", "Visual Designer", "Photographer"]
  return (
    <>
      <Banner banner={"home"} subtitle={subtitle}/>
      <AboutSection />
      <div className="my-work">
        <h2 className="text-center">My work</h2>
      </div>
      <Mas />
      <Photography />
      <Urbanguy />
      <Designpull />
      <Aboutme />
      <Parallaxcomponent />
      <Promotion />
    </>
  );
}

export default Home;
