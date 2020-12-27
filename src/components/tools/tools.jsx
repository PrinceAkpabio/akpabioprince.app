import React from 'react'
import { TechItems } from './tech';
import { AnimateOnScroll } from "../customHooks/scrollAnimate";

const Tools = () => {
 const [state, ref] = AnimateOnScroll();
 const [animate, reff] = AnimateOnScroll();

 return (
  <div className='tools' >
   <h1 className={`techTitle ${state && 'active'}`} ref={ref}>Technologies i have worked with</h1>
   <span className="tools-container" >
   {
    TechItems.map((tech) => (
     <ion-icon
      ref={reff}
      key={tech.id}
      id={`${(animate && tech.id) ? 'tools-active' : 'tools'}`}
      src={tech.item} >
      </ion-icon>
    ))
   }
   </span>
  </div>
 )
}

export default Tools;
