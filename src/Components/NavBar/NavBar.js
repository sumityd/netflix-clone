import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./NavBar.css";

export default function Navbar() {
  const [show, setHandelShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.screenY > 100) {
      setHandelShow(true);
    } else {
      setHandelShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__Contents">
        <img
          className="nav__logo"
          onClick={() => history.push("/")}
          src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
          alt="Netflix Logo"
        />
        <img
          className="nav__avatar"
          onClick={() => history.push("/profile")}
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Netflix Avatar"
        />
      </div>
    </div>
  );
}
