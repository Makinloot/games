import React, { useState, useEffect, useRef, MouseEvent, ChangeEvent } from "react";
import logo from "../../logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const menuRef: {current: any} = useRef();
  const { width } = document.body.getBoundingClientRect();

  useEffect(() => {
    const handleClass = (
      e: any
    ): void => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClass);

    return () => {
      document.removeEventListener("mousedown", handleClass);
    };
  }, [width]);

  return (
    <div className="Header">
      <div className="container">
        <div className="Header-wrapper flex-row">
          <a href="/" className="Header-logo">
            <img src={logo} alt="logo" />
          </a>
          <nav className="Header-menu">
            <a href="/">Home</a>
            <a href="#">Browse</a>
            <a href="#">Contact</a>
          </nav>
          <div className="Header-burger">
            <div
              className={
                open ? "burger-menu flex-col active" : "burger-menu flex-col"
              }
              onClick={() => {
                setOpen(!open);
              }}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="burger-menu-content" ref={menuRef}>
              <a href="/">home</a>
              <a href="#">browse</a>
              <a href="#">contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
