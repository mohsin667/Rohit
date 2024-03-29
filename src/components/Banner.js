import React, { useEffect,useState,useRef } from "react";
import home from "../img/banner.png";
import about from "../img/about-banner.jpg";
import work from "../img/work.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

function Banner(props) {
  const [transition,setTransition] = useState(document.body.scrollTop)
  const [sY, setSY] = useState(-50)
  const height = useRef(null)
  const { banner } = props;
  const Banner = () => {
    if (banner === "home") {
      return home;
    }
    if (banner === "about") {
      return about;
    }
    if (banner === "work") {
      return work;
    }
  };
  
  const homeBanner = ()=> {
    console.log(sY)
    setSY(-50 + window.scrollY)
  }
  useEffect(() => {
    if(banner === "home") {
      window.addEventListener('scroll', homeBanner)
    }
    return () => window.removeEventListener('scroll', homeBanner)
  },[])

  // console.log(height.current.height)

  useEffect(() => {
    Aos.init({ offset: 200, duration: 600, delay: 100 });
  }, []);

  return (
    <div ref={height} className="banner" style={{backgroundImage: `url(${Banner()})`, backgroundPositionY:`${sY}px`, backgroundAttachment: banner=== "home" ? "scroll" : "fixed"}}> 
      <div className="inner-content container" style={{transform: `translate(-50%, -${transition}%)`}}>
        {banner == "home" && (
          <span data-aos="fade-in" data-aos-duration="1000">
            Hello, I am
          </span>
        )}
        <h1 data-aos="fade-up" data-aos-duration="500" style={{ color: `${(banner == "about" || banner == "about") && "#fff"}` }}>
          {banner == "work" ? "My Work" : "Rohit Kataria"}
        </h1>
        <div className="keySkills-bar" data-aos="fade-up" data-aos-duration="1200">
          <span>{props.subtitle[0]}</span>
          <div className="sp"></div>
          <span>{props.subtitle[1]}</span>
          <div className="sp"></div>
          <span>{props.subtitle[2]}</span>
        </div>
      </div>
      {/* <img ref={height} data-aos="fade-in" data-aos-duration="2000" id="banner-image" style={{ width: "100%" }} src={Banner()} alt="banner" /> */}
    </div>
  );
}
export default Banner;
