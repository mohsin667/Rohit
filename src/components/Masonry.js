import React, { useState } from "react";
import Masonry from "react-masonry-component";
import Slider from "react-slick";

const masonryOptions = {
  fitWidth: false,
  columnWidth: 300,
  gutter: 30,
  itemSelector: "photo-item"
};

function Mason() {
  const [active, setActive] = useState(0);
  const [isFirstClick, setIsFirstClick] = useState(false);
  const [photo, setPhoto] = useState([
    {
      obj1: [
        {
          imageUrl: "1"
        },
        {
          imageUrl: "2"
        },
        {
          imageUrl: "3"
        },
        {
          imageUrl: "4"
        },
        {
          imageUrl: "5"
        },
        {
          imageUrl: "6"
        },
        {
          imageUrl: "7"
        },
        {
          imageUrl: "8"
        }
      ]
    },
    {
      obj1: [
        {
          imageUrl: "2"
        },
        {
          imageUrl: "1"
        },
        {
          imageUrl: "5"
        },
        {
          imageUrl: "2"
        },
        {
          imageUrl: "8"
        },
        {
          imageUrl: "4"
        },
        {
          imageUrl: "7"
        },
        {
          imageUrl: "8"
        }
      ]
    },
    {
      obj1: [
        {
          imageUrl: "4"
        },
        {
          imageUrl: "1"
        },
        {
          imageUrl: "5"
        },
        {
          imageUrl: "2"
        },
        {
          imageUrl: "8"
        },
        {
          imageUrl: "4"
        },
        {
          imageUrl: "7"
        },
        {
          imageUrl: "8"
        }
      ]
    },
    {
      obj1: [
        {
          imageUrl: "5"
        },
        {
          imageUrl: "1"
        },
        {
          imageUrl: "5"
        },
        {
          imageUrl: "2"
        },
        {
          imageUrl: "8"
        },
        {
          imageUrl: "4"
        },
        {
          imageUrl: "7"
        },
        {
          imageUrl: "8"
        }
      ]
    },
    {
      obj1: [
        {
          imageUrl: "6"
        },
        {
          imageUrl: "2"
        },
        {
          imageUrl: "3"
        },
        {
          imageUrl: "4"
        },
        {
          imageUrl: "5"
        },
        {
          imageUrl: "6"
        },
        {
          imageUrl: "7"
        },
        {
          imageUrl: "8"
        }
      ]
    }
  ]);
  const [tabId, setTabId] = useState(["UI/UX", "Graphic", "Photography", "Model", "Travel"]);
  const habdleTab = index => {
    setActive(index);
    setIsFirstClick(true);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.05,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "16px",
    arrows: false
  };
  return (
    <div className="container masonry-container">
      <div className="row">
        <div className="masonry">
          <div className="tabs">
            <ul className="m-0 p-0 d-flex tab-ul">
              {tabId.map((id, index) => (
                <li className={index === active ? "active" : ""} key={index} onClick={e => habdleTab(index)}>
                  {id}
                </li>
              ))}
            </ul>
          </div>

          <div className="tab-content">
            <Slider className="mobileSlider" {...settings}>
              {photo[active].obj1.map((photo, index) => (
                <li key={index} className="content flow">
                  <a style={{ maxWidth: "350px" }} href="#">
                    <img src={require(`../img/tabs/tab-${1}-${photo.imageUrl}.png`)} />
                    <div className="overlay">
                      <h3>Leading Website Design for Top Real Estate Builder Of India</h3>
                      <span>UI/UX DESIGN</span>
                    </div>
                  </a>
                </li>
              ))}
            </Slider>

            <ul className="grid deskTab">
              {photo[active].obj1.map((photo, index) => (
                
                <li key={index} className="content flow">
                  <a href="#">
                    <img src={require(`../img/tabs/tab-${1}-${photo.imageUrl}.png`)} />
                    <div className="overlay">
                      <h3>Leading Website Design for Top Real Estate Builder Of India</h3>
                      <span>UI/UX DESIGN</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
            <div className="btn-row-center">
              <a href="#" className="btn wide">
                View All
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mason;
