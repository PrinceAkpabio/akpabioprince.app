import React from "react";
import { Link } from "react-router-dom";
import { ProjectItems } from "./projectItems";
import { Element } from "react-scroll";

function Projects() {
  return (
    <div className="projects">
      <Element id="project-component" name="project-component" />
      <span className="projects-intro">
        <h1>My Recent Projects</h1>
        <p>
          Here are a few web development projects I've worked on recently. Want
          to see more?
          <Link
            id="email"
            to={{ pathname: "mailto:princeakpabio90@gmail.com" }}
            target="_blank"
          >
            Email me.
          </Link>
        </p>
      </span>
      <div className="projects-container">
        {ProjectItems.map((items) => (
          <div className="project" key={items.id}>
            <div
              className="project-container"
              style={{
                backgroundImage: `url(${items.pjImg})`,
                "--gradient": items.overlayColor,
              }}
            >
              <span
                id="projectLogo"
                style={{
                  backgroundImage: `url(${items.pjLogo})`,
                }}
              />
            </div>
            <span className="overlay">
              <p id="overlay-text">{items.overlayText}</p>
              <Link
                className="overlayLink"
                id="overlayLink"
                to={{ pathname: items.pjLink }}
                target="_blank"
              >
                Visit Website &gt;
              </Link>
              <Link
                className="overlayLink-github"
                id="overlayLink-github"
                to={{ pathname: items.pjgithub }}
                target="_blank"
              >
                Source Code &gt;
              </Link>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
