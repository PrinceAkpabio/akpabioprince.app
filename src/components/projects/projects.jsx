import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectItems } from './projectItems';

function Projects() {
 return (
  <div className='projects'>
   <span className="projects-intro">
    <h2>My Recent Projects</h2>
    <p>Here are a few design projects I've worked on recently. Want to see more?
     <Link
      id='email'
      to={{ pathname: 'princeakpabio90@gmail.com' }} target="_blank">
      Email me.
      </Link>
    </p>
   </span>
    <div className="projects-container">
   {
    ProjectItems.map(items => (
      <div
       className="project"
       key={items.id}
     >
      <div className="project-container"
      style={{
        backgroundImage: `url(${items.pjImg})`,
        '--gradient': items.overlayColor
      }}
      >
       <span
        id='projectLogo'
        style={{
         backgroundImage: `url(${items.pjLogo})` ,
        }}
        />
       </div>
       <span
        className="overlay">
        <p
         id='overlay-text'>
         {items.overlayText}
        </p>
        <Link
         className="overlayLink"
         id='overlayLink'
         to={{ pathname: items.pjLink }}
         target="_blank"
        >
         Visit Website &gt;
        </Link>
       </span>
     </div>
    ))
   }
   </div>
  </div>
 )
}

export default Projects;
