import React, { useState, useEffect, useRef } from "react";
import MenuButton from "../button/menuButton";
import MenuList, { Logo } from "./menuList";

const Naviagtion = () => {
  const [menu, setMenu] = useState(false);
  const navRef = useRef();

  const ToggleMenu = () => {
    setMenu((prevMenu) => !prevMenu);
  };
  const handleClickOutside = (e) => {
    if (!navRef.current.contains(e.target)) {
      setMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty(
        "--scroll-y",
        `${window.scrollY}px`
      );
    };

    if (menu) {
      document.documentElement.style.getPropertyValue("--scroll-y");
      const body = document.body;
      body.style.height = "100vh";
      body.style.overflowY = "hidden";
    } else if (!menu) {
      document.documentElement.style.getPropertyValue("--scroll-y");
      const body = document.body;
      body.style.height = "";
      body.style.overflowY = "";
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [menu]);

  return (
    <div className="Nav">
      <Logo />
      <MenuList menu={menu} navRef={navRef} />
      <MenuButton ToggleMenu={ToggleMenu} menu={menu} />
    </div>
  );
};

export default Naviagtion;
