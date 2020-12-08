import React from 'react'
import { HeroItems, HeroImg } from './heroItems';


function Hero() {
 return (
  <div className='hero container'>
   <div className="hero-imgs">
    {
     HeroImg.map((img, idx) => (
    <div key={idx} className={img.class}
      style={img}></div>
    ))}
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
