import React, { useState,useEffect } from "react";
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
  const [pathName, setPathName] = useState(window.location.pathname)
  const [path,setPath] = useState('')
  
  useEffect(()=> {
    const refactor = pathName.split("/")
    const newPath = refactor[1]
    setPath(newPath)
    console.log("new")
  },[])
  return (
    <div className="header">
      <div className="container">
        <nav>
          <div className="logo">
            <Link to="/">
              <img src="/logo.svg" alt="" />
            </Link>
          </div>
          <div className={menu ? "navbar open" : "navbar close"}>
            <ul>
              <li className={`${path == undefined ? "active" : ""}`}>
                <Link to="/">Home</Link>
              </li>
              <li className={`${path == 'about' ? "active" : ""}`}>
                <Link to="/about">About</Link>
              </li>
              <li className={`${path ==  'work' ? "active" : ""}`}>
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
