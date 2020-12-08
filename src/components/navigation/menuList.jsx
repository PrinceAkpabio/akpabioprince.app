import React from 'react'
import { MenuItems } from './menuItems';
import { Link } from 'react-scroll';

export const Logo = () =>(
   <span id='Nav-logo'>Akpabio Prince</span>
)

export default function MenuList({menu}) {
 return (
  <div className={`Nav-menu-wrapper ${menu && 'active'}`}>
     <ul className='Nav-menu'>
     {
      MenuItems.map((Menu, idx) => (
     <li className={`Nav-menu-items ${menu && 'active'}`} key={idx}>
         <Link
         className='menu-links'
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
 )
}


