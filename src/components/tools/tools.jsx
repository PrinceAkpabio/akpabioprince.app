import React from 'react'
import html from '../../Assets/images/html.svg'
import css from '../../Assets/images/css.svg'
import js from '../../Assets/images/js.svg'
import react from '../../Assets/images/react.svg'
import python from '../../Assets/images/python.svg'

const Tools = () => {
 return (
  <div className='tools container'>
   <h1>Technologies i have worked with</h1>
   <span className="tools-container">

   <ion-icon
    id='tools'
    src={html} >
    </ion-icon>
   <ion-icon
    id='tools'
    src={css} >
    </ion-icon>
   <ion-icon
    id='tools'
    src={js} >
   </ion-icon>
   <ion-icon
    id='tools'
    src={react} >
    </ion-icon>
   <ion-icon
    id='tools'
    src={python} >
    </ion-icon>
   </span>
  </div>
 )
}

export default Tools;
