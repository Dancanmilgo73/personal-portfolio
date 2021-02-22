import React, { useState } from "react";
import style from "./Nav.module.css";
export default function Nav() {
  const [activeHam, setActiveHam] = useState(false);
  const handleClick = () => setActiveHam(activeHam ? false : true);
  return (
    <nav>
      <div className={style.title_name}>D.N</div>
      <div className={style.hamburger_menu} onClick={handleClick}>
        <span className={style.bar}></span>
        <span className={style.bar}></span>
        <span className={style.bar}></span>
      </div>
      <div className={style.navLinks}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}
