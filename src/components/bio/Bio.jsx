import React from 'react';
import styled from 'styled-components';
import { AnimateOnScroll } from '../customHooks/scrollAnimate';

const Bio = () => {
 const [state1, ref1]  = AnimateOnScroll()
 // const [state2, ref2]  = AnimateOnScroll()
 // const [state3, ref3]  = AnimateOnScroll()
 return (

    <Div animate={state1} ref={ref1}>
    <div className="bio">
    <div className="overlay"></div>
   </div> 
    <div className="bio-content">
     <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam quam eveniet ipsam rem dolorum impedit repellendus molestias explicabo consequuntur alias, saepe expedita, ducimus accusamus vitae quod nemo dicta voluptatem neque dolorem. Dolores dolor nobis doloribus veritatis ea architecto ad praesentium ipsum, natus ut odio reiciendis, libero earum quos in iusto?</h2></div>
    </Div>
  );
};

const Div = styled.div`
  position: relative;
  display: flex;
  height: 100vw;
  width: 100%;
  transform: translateX(${({ animate }) => (animate ? "0" : "-100vw")});
  transition: transform 1s;
`;


export default Bio;