import React from "react";
import style from "./About.module.css";

export default function About() {
  return (
    <div className={style.about}>
      <h3>I'M A FULL STACK DEVELOPER(FRONTEND FOCUSED)</h3>
      <div className={style.paragraphs}>
        <div className={style.para}>
          <p>
            Hi, I am a full stack developer(frontend heavy) who specializes in
            Javascript technologies across the whole stack. I spend my time
            building personal projects and learning more about the MERN stack. I
            am open to frontend developer roles that are remote or on-site. If
            you have an idea for a website or want to upgrade your current
            website, contact me.
          </p>
        </div>
        <div className={style.para}>
          <p>
            I always stay attuned to the latest frameworks and technologies. I
            am eager to contribute to team success through hardwork, attention
            to detail and excellent organizational skills. Motivated to learn,
            grow and excel in software development.
          </p>
        </div>
      </div>

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
