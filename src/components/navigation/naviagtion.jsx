import React, {useState} from 'react'
import { MenuItems } from './menuItems';
// import Scroll from 'react-scroll';
import { Link} from 'react-scroll';

// const ScrollLink = Scroll.Link;

const Naviagtion = () => {
 const [menu, setMenu] = useState(false)

 const ToggleMenu = () => {
  setMenu(prevMenu => !prevMenu)
 };
 return (
  <div className='Nav'>
   <span id='Nav-logo'>Akpabio Prince</span>

    <div className={`Nav-menu-wrapper ${menu && 'active'}`}>
     <ul className='Nav-menu'>
     {
      MenuItems.map((Menu, idx) => (
     <li className={`Nav-menu-items ${menu && 'active'}`} key={idx}>
        <Link
         to={Menu.link}
         activeClass="active"
         smooth={true}
         duration={500}
        >{Menu.name}</Link>
     </li>
      ))
     }
     </ul>
    </div>

   <span className="Nav-mb-menu"
   onClick={ToggleMenu}
   > {menu ? <ion-icon name="close-outline"></ion-icon> :<ion-icon name="menu-outline"></ion-icon>} </span>
   
  </div>
 )
}

export default Naviagtion
