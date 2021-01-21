import React from 'react'

export const ParallaxScroll = (offsetYPos = 0) => {
 const [offsetY, setOffsetY] = React.useState(offsetYPos);
 // const [offsetX, setOffsetX] = React.useState(offsetXPos);

 React.useEffect(() => {
  const handleScrollY = () => setOffsetY(window.pageYOffset);

  window.addEventListener('scroll', handleScrollY);

  return () => window.removeEventListener('scroll', handleScrollY)

 }, [offsetY])
 // React.useEffect(() => {
 //  const handleScrollX = () => setOffsetX(window.pageXOffset);

 //  window.addEventListener('scroll', handleScrollX);

 //  return () => window.removeEventListener('scroll', handleScrollX)

 // }, [offsetX])
 
 return [offsetY, offsetYPos];
}


