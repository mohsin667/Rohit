import React, { useEffect } from "react";
import home from "../img/banner.png";
import about from "../img/about-banner.png";
import work from "../img/work.png";
import Aos from "aos";
import "aos/dist/aos.css";
function Banner(props) {
  const { banner } = props;
  const Banner = () => {
    if (banner == "home") {
      return home;
    }
    if (banner == "about") {
      return about;
    }
    if (banner == "work") {
      return work;
    }
  };
  useEffect(() => {
    Aos.init({ offset: 200, duration: 600, delay: 100 });
  }, []);
  return (
    <div className="banner">
      <div className="inner-content container">
        {banner == "home" && (
          <span data-aos="fade-in" data-aos-duration="1000">
            Hello, I am
          </span>
        )}
        <h1 data-aos="fade-up" data-aos-duration="1000" style={{ color: `${(banner == "about" || banner == "about") && "#fff"}` }}>
          Rohit Kataria
        </h1>
        {banner == "home" && (
          <div className="keySkills-bar" data-aos="fade-up" data-aos-duration="1200">
            <span>UI/UX Designer</span>
            <div className="sp"></div>
            <span>Graphic Designer</span>
            <div className="sp"></div>
            <span>Photographer</span>
          </div>
        )}
      </div>
      <img data-aos="fade-in" data-aos-duration="2000" id="banner-image" style={{ width: "100%" }} src={Banner()} alt="banner" />
    </div>
  );
}

export default Banner;
