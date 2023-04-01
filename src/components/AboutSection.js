import React, { useEffect } from "react";
import rohitImage from "../img/rohit.png";
import Aos from "aos";
import "aos/dist/aos.css";

function AboutSection() {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="about-section">
          <div className="image-section">
            <img data-aos="fade-in" data-aos-duration="2000" src={rohitImage} alt="" />
          </div>
          <div className="textual-block">
            <h2 data-aos="fade-up" data-aos-duration="1000">
              About
            </h2>
            <p data-aos="fade-up" data-aos-duration="1200">
            A great, simple and elegant User Interface Experience has always elated me, designing the visual appeal and ensuring an effortless way of communication is a goal I always aim for. Hello, I am Rohit Kataria, an Interaction designer who graduated from the National Institute of Fashion Technology, India. In the past, I have worked with a few Start-ups, as well as large scale org. for eg. The Economics Times and presently I am working as a Product designer at Cardekho Group | India.
            </p>
            <div data-aos="fade-up" data-aos-duration="1500" className="btn-row">
              <a href="#" className="btn">
                Read More
              </a>
              <a href="./CV.pdf" download className="btn">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
