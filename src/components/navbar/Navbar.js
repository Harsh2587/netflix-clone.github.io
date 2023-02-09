import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <img
        className="nav__logo"
        src="https://assets.nflxext.com/en_us/home/logo_v7.png"
        alt="Netflix Logo"
      />

      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Smiley Logo"
      />
    </div>
  );
};

export default Navbar;
