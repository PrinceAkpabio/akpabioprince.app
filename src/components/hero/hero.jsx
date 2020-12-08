import React from 'react'
import { HeroItems } from './heroItems';
import dots from '../../Assets/images/dots.svg';


function Hero() {
 return (
  <div className='hero container'>
     <div className="hero-imgs">
       <div className="hero-imgs-hero"></div>
       <div className="hero-imgs-dots">
        <ion-icon id='dots' src={dots}></ion-icon>
       </div>
       </div>
   <span className="hero-content">
    <h2>{HeroItems.intro}</h2>
    <h1>{HeroItems.name}</h1>
    <h3>{HeroItems.jd1}</h3>
   </span>
   
  </div>
 )
}

export default Hero;
