import React from "react";
import style from "./Projects.module.css";
import recipeImg from "./Assets/recipe.png";
import joblistImg from "./Assets/joblist.png";
import portfolioImg from "./Assets/portfolio.png";
export default function Projects() {
  const projects = [
    {
      title: "Recipe Search",
      photo: recipeImg,
      url: "https://pensive-benz-57306a.netlify.app/",
    },
    {
      title: "Job Listing",
      photo: joblistImg,
      url: "https://cranky-curran-491579.netlify.app/",
    },
    { title: "Portfolio", photo: portfolioImg, url: "#" },
  ];
  return (
    <div className={style.project}>
      <h3>Projects</h3>
      <div className={style.container}>
        {projects.map((projo) => (
          <div className={style.card}>
            <img src={projo.photo} alt={projo.title} />
            <div className={style.overlay}>
              <div className={style.projoTitle}>{projo.title}</div>
              <a href={projo.url} target="_blank" rel="noopener noreferrer">
                <button>Demo</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
