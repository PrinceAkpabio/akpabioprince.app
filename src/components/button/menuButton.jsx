import React from 'react'

export default function MenuButton({menu, ToggleMenu}) {
 return (
   <span className="Nav-mb-menu"
   onClick={ToggleMenu}
   > {menu ? <ion-icon name="close-outline"></ion-icon> :<ion-icon name="menu-outline"></ion-icon>} </span>
 )
}


