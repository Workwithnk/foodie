import React from "react";
import logo from "../image/logo.png";
import { FaDev, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import "../CSS/Navbar.css";

function Navbar() {
  return (
    <div className="NavBar">
      <a href="https://foodie-796e2.web.app/" className="Nav_Details">
        <img src={logo} alt="Logo" />
        <h1>Foodie</h1>
      </a>
      <div className="NavBar_Follow">
        <a
          href="https://www.facebook.com/nikhil.kavathiya.378"
          className="socialIcons"
        >
          <FaFacebook className=" icon" />
        </a>
        <a
          href="https://www.instagram.com/i._.am._.nk/?igshid=1hevhi9xzvwul"
          className="socialIcons"
        >
          <FaInstagram className=" icon" />
        </a>
        <a href="https://dev.to/workwithnk" className="socialIcons">
          <FaDev className=" icon" />
        </a>
        <a href="https://github.com/workwithnk/" className="socialIcons">
          <FaGithub className="icon" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
