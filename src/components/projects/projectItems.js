import Pj1img from '../../Assets/images/project1img.jpg';
import Pj1Logo from '../../Assets/images/project1logo.webp';
import Pj2img from '../../Assets/images/project2img.png';
import Pj2Logo from '../../Assets/images/project2logo.png';
import Pj3Logo from '../../Assets/images/crown.svg';
import Pj4img from '../../Assets/images/speechImg.jpg';
import Pj4Logo from '../../Assets/images/mic-outline.svg';

export const ProjectItems = [
 {
  id: '1',
  pjImg: Pj1img,
  pjLogo: Pj1Logo,
  overlayColor: 
  `linear-gradient(
    to bottom,
    #d27d2f 0%,
    #a85f34 100%
  )`
  ,
  overlayText: 'Doula brand for passionate and aspiring birthworkers',
  pjLink: 'https://doulastartup.netlify.app/',
 },
 {
  id: '2',
  pjImg: Pj2img,
  pjLogo: Pj2Logo,
  overlayColor: 
    `linear-gradient(
      to bottom, 
      rgb(255, 1, 1) 0%, 
      rgb(172, 40, 62) 100%
  )`
  ,
  overlayText: 'Flixi Movie App',
  pjLink: 'https://flixiapp.netlify.app/',
 },
 {
  id: '3',
  pjImg: 'https://i.ibb.co/GCCdy8t/womens.png',
  pjLogo: Pj3Logo,
  overlayColor: 
  `linear-gradient(
    to bottom,
    #f0f0f0 0%,
    #242323 100%
  )`
  ,
  overlayText: 'Urban clothing store concept',
  pjLink: 'https://urbanclothing.netlify.app/',
 },
 {
  id: '4',
  pjImg: Pj4img,
  pjLogo: Pj4Logo,
  overlayColor: 
  `linear-gradient(
    to bottom,
    #262147 0%,
    #262147 100%
  )`
  ,
  overlayText: 'Fullstack Speech to text web app that doubles as a notepad',
  pjLink:`https://voicepadx.herokuapp.com/`,
 },
 {
  id: '5',
  pjImg: 'https://robohash.org/1?set=set2&size=180x180',
  // pjLogo: Pj1Logo,
  overlayColor: 
  `linear-gradient(rgba(7, 27, 82, 1)0%,
  rgba(0, 128, 128, 1)100%)`
  ,
  overlayText: 'Filter and search rolodex app',
  pjLink: 'https://monstersrolodexx.netlify.app/',
 },
]