import React from "react";
import Headphone from "../img/icons/headphone.png";
import Camera from "../img/icons/camera.png";

function MySelf() {
  return (
    <div className="my-self">
      <div className="container">
        <div className="my-self-wrapper">
          <div className="my-first-col">
            <h2>A little more about myself</h2>
            <div className="image-wrapper">
              <div className="image-card">
                Love Music
                <img src={Headphone} alt="" />
              </div>
              <div className="image-card">
                Photograph
                <img src={Camera} alt="" />
              </div>
            </div>
          </div>
          <div className="my-last-col">
            <div className="transparent-div">
              <p>I grew up in India and travel to many cities and my ability to quickly adjust to new challenges in life comes from that. Owing to my diverse upbringing, I embrace all Indian cultures and try to bring it to the designs I create. I found inspiration through traveling, interacting with new people from different cultures, and documenting visuals stories by using my photography skills. My hunger and curiosity for life drive me to experience everything and consume all that it has to offer. This thirst for life is evident in all of my work. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MySelf;
