import hero from '../../Assets/images/header.jpg';
import dots from '../../Assets/images/dotss.png';

export const HeroItems = {
 header: hero,
 dots: dots,
 intro: 'MY NAME IS',
 name: 'AKPABIO PRINCE',
 jd1: "I'M A FRONTEND DEVELOPER"
}
 
export const HeroImg = [
 {
  backgroundImage: `url(${HeroItems.header})`,
  class: 'hero-imgs-hero'
 },
 {
  backgroundImage: `url(${HeroItems.dots})`,
  class: 'hero-imgs-dots'
 }
]
