import React from 'react';
import styled from 'styled-components';
import { BioContent } from './bioItems';
import waves from '../../Assets/images/waves.svg';
// import { AnimateOnScroll } from '../customHooks/scrollAnimate';

const Bio = () => {
//  const [state1, ref1]  = AnimateOnScroll()
 // const [state2, ref2]  = AnimateOnScroll()
 // const [state3, ref3]  = AnimateOnScroll()
 return (

    <Div id='bio-wrapper'>
    <div className="bio">
    <div className="overlay"></div>
   </div> 
     <div className="bio-content">
       <h4>{BioContent.title1}</h4>
       <h1>{BioContent.title2}</h1>
       <p>{BioContent.bio}</p></div>
     <ion-icon id='waves' src={waves}></ion-icon>
    </Div>
  );
};

const Div = styled.div`
  position: relative;
  display: flex;
  height: 200vw;
  width: 100%;
`;


export default Bio;