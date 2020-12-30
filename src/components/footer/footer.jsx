import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/images/akpabioprincelogo.webp';
import twitter from '../../Assets/images/twitter.svg'
import linkedin from '../../Assets/images/linkedin.svg'
import github from '../../Assets/images/github.svg'
import mail from '../../Assets/images/email.svg'
const Footer = () => {

 const icons = [
  {
   id: 1,
   si: twitter,
   link: 'https://twitter.com/princeakpabio_'
  },
  {
   id: 2,
   si: linkedin,
   link: 'https://www.linkedin.com/in/princeakpabio/'
  },
  {
   id: 3,
   si: github,
   link: 'https://github.com/PrinceAkpabio'
  },
  {
   id: 4,
   si: mail,
   link: 'mailto:princeakpabio90@gmail.com'
  },
 ]
 return (
  <div className='footer'>
   <div className="footer-fixed">
    <h1>Start a project</h1>
    <p>Interested in working together? We should queue up a chat. I’ll buy the coffee.</p>
    <Link
     id='cta'
     to={{
      pathname: 'mailto:princeakpabio90@gmail.com'
     }}
     target='_blank'
    > Let's do this</Link>
   </div>

   <div className="footer-parallax">
    <span
     style={{
      backgroundImage: `url(${logo})`
     }}
     className="footer-logo"
    >
    </span>
    <h2
     className='footer-tagLine'>
     Living, learning, & leveling up one day at a time.</h2>
    <span className='footer-icons'>
    {
     
      icons.map(item => (
       <Link
       to={{
        pathname: item.link
       }}
        target='_blank'
        className='footer-links'
       >
       <ion-icon
        key={item.id}
        id='footer-socialIcons'
        src={item.si}>
       </ion-icon>
       </Link>

      ))  
    }
     </span>
   <p>Handcrafted by me &copy; BoostYourBusiness</p>
   </div>
  </div>
 )
}

export default Footer
