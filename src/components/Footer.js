import React from "react";
import LinkedIn from "../img/icons/linked-in.png";
import Facebook from "../img/icons/facebook.png";
import Instagram from "../img/icons/instagram.png";
import Youtube from "../img/icons/youtube.png";
import {IoLogoBehance} from "react-icons/io5"
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-header">
          <h2>
            let's talk <span>design.</span>
          </h2>

          <div className="cta-section">
            <p>If you'd like to get in touch for Opportunities or <br />just to say hi!, feel free to reach out.</p>
            <a href="#" download className="btn white">
              Download CV
            </a>
          </div>
        </div>
        <div className="devider"></div>
        <div className="social-bar">
          <div className="logo white">
            <span>RK</span>
            Rohit Kataria
          </div>
          <div className="socialLinks">
            <a href="#">
              <IoLogoBehance size={33} color="#fff"/>
            </a>
            <a href="#">
              <img src={LinkedIn} alt="linked in" />
            </a>
            <a href="#">
              <img src={Facebook} alt="facebook" />
            </a>
            <a href="#">
              <img src={Instagram} alt="instagram" />
            </a>
            <a href="#">
              <img src={Youtube} alt="youtube" />
            </a>
          </div>
          <div className="route-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Work</a>
          </div>
        </div>
        <div className="contact-bar">
          <div className="contacts">
            <p>Get In Touch</p>
            <div className="action-links">
              Mail: <a href="mailto:rohitkataria.info@gmail.com">Rohitkataria.info@gmail.com</a>
            </div>
            <div className="action-links">
              For freelance projects: <a href="tel:+919971823440">+919971823440</a>, <a href="tel:+918076633269">+918076633269</a>
            </div>
            <div className="action-links">
              Phone: <a href="tel:+919971823440">+919971823440</a>, <a href="tel:+918076633269">+918076633269</a>
            </div>
          </div>
          <div className="links"></div>
        </div>
        <div className="disclaimer">
          Copyright 2022 @ Rohit Kataria. All Rights Reserved.
          <br />
          All photos are subject to copyright and may not be used without written consent from Rohit Kataria.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
