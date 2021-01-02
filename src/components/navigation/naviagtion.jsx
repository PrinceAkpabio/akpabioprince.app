import React, {useState} from 'react'
import MenuButton from '../button/menuButton';
import MenuList, { Logo } from './menuList';
// import Scroll from 'react-scroll';
// import { Link} from 'react-scroll';

// const ScrollLink = Scroll.Link;

const Naviagtion = () => {
 const [menu, setMenu] = useState(false)

 const ToggleMenu = () => {
  setMenu(prevMenu => !prevMenu)
 };
 return (
   <div className='Nav'>
    <Logo />
    <MenuList menu={menu} ToggleMenu={ToggleMenu} />
    <MenuButton ToggleMenu={ToggleMenu} menu={menu} />
   
  </div>
 )
}

export default Naviagtion
