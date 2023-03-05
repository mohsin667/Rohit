import React, { useEffect,useState,useRef } from "react";
import home from "../img/banner.png";
import about from "../img/about-banner.png";
import work from "../img/work.png";
import Aos from "aos";
import "aos/dist/aos.css";

function Banner(props) {
  const [transition,setTransition] = useState(document.body.scrollTop)
  const height = useRef(null)
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

  const handleOnScroll = (e) => {
    if(window.scrollY < height !== null && height.current.offsetHeight / 2) {
      setTransition(window.scrollY / 2);
    }
  }

  // console.log(height.current.height)

  useEffect(() => {
    Aos.init({ offset: 200, duration: 600, delay: 100 });
    window.addEventListener("scroll", handleOnScroll);
    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  }, []);

  console.log(transition)
  return (
    <div ref={height} className="banner" style={{backgroundImage: `url(${Banner()})`}}> 
      <div className="inner-content container" style={{transform: `translate(-50%, -${transition}%)`}}>
        {banner == "home" && (
          <span data-aos="fade-in" data-aos-duration="1000">
            Hello, I am
          </span>
        )}
        <h1 data-aos="fade-up" data-aos-duration="500" style={{ color: `${(banner == "about" || banner == "about") && "#fff"}` }}>
          Rohit Kataria
        </h1>
        {banner == "home" && (
          <div className="keySkills-bar" data-aos="fade-up" data-aos-duration="1200">
            <span>Product Designer</span>
            <div className="sp"></div>
            <span>Visual Designer</span>
            <div className="sp"></div>
            <span>Photographer</span>
          </div>
        )}
      </div>
      {/* <img ref={height} data-aos="fade-in" data-aos-duration="2000" id="banner-image" style={{ width: "100%" }} src={Banner()} alt="banner" /> */}
    </div>
  );
}
export default Banner;
