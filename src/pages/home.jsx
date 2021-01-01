import React from 'react';
import Bio from '../components/bio/Bio';
import Hero from '../components/hero/hero';
import { ParallaxScroll } from '../components/customHooks/parallaxScroll';
import { Element } from 'react-scroll';
import star from '../Assets/images/star.svg'
import moon from '../Assets/images/moon.svg'
import gear from '../Assets/images/gear.svg'
import Tools from '../components/tools/tools';
import Projects from '../components/projects/projects';
import Carousel from '../components/testimonies/carousel/carousell';
    



const HomePage = () => {
    const [offset] = ParallaxScroll();


    
return (
    <div className='Parallax container'
    >
        <ion-icon class={`star`} src={star}
            style={{
            '--offset': `${- offset * 0.7}px`    
        }}
        ></ion-icon>
        <ion-icon class={`moon`} src={moon}
        style={{
            '--offset': `${offset * 0.3}px`    
        }}
        ></ion-icon>
        <ion-icon class={`gear`} src={gear}
        style={{
            '--offset': `${offset * 0.5}deg`,    
            '--offset1': `${offset * 0.08}px`    
        }}
        ></ion-icon> 
        <div className="container"
        >
            <Hero />
            <Bio />
            <Tools />
            <Projects />
             <Element
       id='client-component'
       name='client-component'
     />
            <Carousel />
        </div>
        
 </div>
)}

export default HomePage;