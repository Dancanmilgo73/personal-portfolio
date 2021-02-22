import React from "react";
import style from "./Projects.module.css";
import recipeImg from "./Assets/recipe.png";
import joblistImg from "./Assets/joblist.png";
import portfolioImg from "./Assets/portfolio.png";
export default function Projects() {
  const projects = [
    { title: "Recipe Search", photo: recipeImg },
    { title: "Job Listing", photo: joblistImg },
    { title: "Portfolio", photo: portfolioImg },
  ];
  return (
    <div className={style.project}>
      <h3>Projects</h3>
      <div className={style.container}>
        {projects.map((projo) => (
          <div className={style.card}>
            <img src={projo.photo} alt={projo.title} />
          </div>
        ))}
      </div>
    </div>
  );
}
