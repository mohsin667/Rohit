import React, { useState } from "react";
import Logo from "../img/logo.png";
import { GrMenu } from "react-icons/gr";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";

function Header(props) {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => setMenu(!menu);
  const [homeLink, setHomeLink] = useState(false);
  const [aboutLink, setAboutLink] = useState(false);
  const [workLink, setWorkLink] = useState(false);
  const [contactLink, setContactLink] = useState(false);
  const handleMouseOver = () => {
    props.setLinkGrow(true);
  };
  const handleMouseLeave = () => {
    props.setLinkGrow(false);
  };
  return (
    <div className="header">
      <div className="container">
        <nav>
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className={menu ? "navbar open" : "navbar close"}>
            <ul>
              <li onMouseOver={() => (handleMouseOver(), setHomeLink(true))} onMouseLeave={() => (handleMouseLeave(), setHomeLink(false))} className={`${homeLink ? "hovered-link" : ""} active`}>
                <Link to="/">Home</Link>
              </li>
              <li onMouseOver={() => (handleMouseOver(), setAboutLink(true))} onMouseLeave={() => (handleMouseLeave(), setAboutLink(false))} className={`${aboutLink ? "hovered-link" : ""}`}>
                <Link to="about">About</Link>
              </li>
              <li onMouseOver={() => (handleMouseOver(), setWorkLink(true))} onMouseLeave={() => (handleMouseLeave(), setWorkLink(false))} className={`${workLink ? "hovered-link" : ""}`}>
                <Link to="/work">Work</Link>
              </li>
            </ul>
            {menu && <CgClose className="menu-close-button" onClick={handleMenu} color="#fff" size={22} />}
          </div>
          <GrMenu onClick={handleMenu} className="hamburgerMenu" color="#000" size={20} />
        </nav>
      </div>
    </div>
  );
}
export default Header;
