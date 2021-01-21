import React from 'react'
import { HeroItems } from './heroItems';
import dots from '../../Assets/images/dots.svg';


function Hero() {
 return (
  <div className='hero container'>
     <div className="hero-imgs">
       <div className="hero-imgs-hero"></div>
       </div>
       <div className="hero-imgs-content">
          <span className="hero-content">
            <h2>{HeroItems.intro}</h2>
            <h1>{HeroItems.name}</h1>
            <h3 id='jd'>{HeroItems.jd1}</h3>
          </span>
        <ion-icon id='dots' src={dots}> </ion-icon>
       </div>
   
   
  </div>
 )
}

export default Hero;
