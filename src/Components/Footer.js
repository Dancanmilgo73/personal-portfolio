import React from "react";
import style from "./Footer.module.css";
export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.icons}>
        <div className={style.icon}>
          <a
            href="https://github.com/Dancanmilgo73"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github-square"></i>
          </a>
          Github
        </div>
        <div className={style.icon}>
          <a
            href="https://www.linkedin.com/in/dancan-ngetich-151738175/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          LinkedIn
        </div>
        <div className={style.icon}>
          <a
            href="https://twitter.com/DancanKngetich"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          Twitter
        </div>
        <div className={style.icon}>
          <a
            href="https://dev.to/dancankngetich"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-dev"></i>
          </a>
          Dev.to
        </div>
      </div>
      <div className={style.design}>
        Designed and Developed by Dancan Ngetich &#169;2020
      </div>
    </div>
  );
}
