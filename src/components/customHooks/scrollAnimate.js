import React from 'react';

export const AnimateOnScroll = (animateState = false) => {
 const [animate, doAnimation] = React.useState(animateState);
 
 const containerRef = React.useRef(null)

 React.useLayoutEffect(() => {
  const topPos = element => element.getBoundingClientRect().top;
   
  const containerPos = topPos(containerRef.current)
   
  const onScroll = () => {
   const scrollPos = window.scrollY + window.innerHeight;
     
   if (containerPos < scrollPos) {
    doAnimation(state => ({ ...state, animateState: true }));
   }
  };

  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
 }, []);
 return [ animate, containerRef ];
}