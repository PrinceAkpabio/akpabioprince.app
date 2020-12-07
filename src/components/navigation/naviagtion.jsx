import React from 'react'
import { MenuItems } from './menuItems';
// import Scroll from 'react-scroll';
import { Link} from 'react-scroll';

// const ScrollLink = Scroll.Link;

const Naviagtion = () => {
 return (
  <div className='Nav'>
   <span id='Nav-logo'>Akpabio Prince</span>

    <div className="Nav-menu-wrapper">
     <ul className='Nav-menu'>
     {
      MenuItems.map((menu, idx) => (
     <li className="Nav-menu-items" key={idx}>
        <Link
         to={menu.link}
         activeClass="active"
         smooth={true}
         duration={500}
        >{menu.name}</Link>
     </li>
      ))
     }
     </ul>
    </div>

    <span className="Nav-mb-menu"> <ion-icon name="menu-outline"></ion-icon> </span>
   
  </div>
 )
}

export default Naviagtion
