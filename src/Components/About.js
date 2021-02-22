import React from "react";
import style from "./About.module.css";

export default function About() {
  return (
    <div className={style.about}>
      <h3>I'M A FULL STACK DEVELOPER(FRONTEND FOCUSED)</h3>
      <div className={style.paragraphs}>
        <p>
          ajsf shdkjhf dfh jkd daskh kf skd kdsh kfds afhksa f asdjffsf vhdf
          fdsahk dsakf a askhdfa sfakdf fasd fdasjflka df adslfjslfa ldfjal
          fasdf asldfaldfj fja sdfadfjsdfa fdasfja adslfja adfjlas alsdf a
        </p>
        <p>
          ajsf shdkjhf dfh jkd daskh kf skd kdsh kfds afhksa f asdjffsf vhdf
          fdsahk dsakf a askhdfa sfakdf fasd fdasjflka df adslfjslfa ldfjal
          fasdf asldfaldfj fja sdfadfjsdfa fdasfja adslfja adfjlas alsdf a
        </p>
      </div>
      <div></div>
      <div className="skills">
        <i className="fab fa-html5"></i>
        <i className="fab fa-css3-alt"></i>
        <i className="fab fa-bootstrap"></i>
        <i className="fab fa-js-square"></i>
        <i className="fab fa-react"></i>
        <i className="fab fa-node"></i>
        <i className="fab fa-git"></i>
        <i className="fab fa-github-square"></i>
      </div>
    </div>
  );
}
