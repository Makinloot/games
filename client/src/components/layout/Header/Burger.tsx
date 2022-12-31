import { useState, useRef, useEffect } from "react";

const Burger = () => {
  const [open, setOpen] = useState(false);
  const menuRef: { current: any } = useRef();

  // close burger menu if clicked outside burger
  useEffect(() => {
    const handleClass = (e: any): void => {
      if (!menuRef.current.contains(e.target)) setOpen(false)
    };

    document.addEventListener("mousedown", handleClass);
    return () => document.removeEventListener("mousedown", handleClass);
  }, []);

  return (
    <div className="Header-burger">
      <div
        className={open ? "burger-menu flex-col active" : "burger-menu flex-col"}
        onClick={() => setOpen(!open)}>
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
  );
};

export default Burger;