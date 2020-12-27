import React from 'react';
// import styled from 'styled-components';
import { BioContent } from './bioItems';
import waves from '../../Assets/images/waves.svg';
import { AnimateOnScroll } from '../customHooks/scrollAnimate';

const Bio = () => {
 const [state1, ref1]  = AnimateOnScroll()
 // const [state2, ref2]  = AnimateOnScroll()
 // const [state3, ref3]  = AnimateOnScroll()
 return (

    <div className='bio-wrapper container' ref={ref1}>
    
     <div className={`bio-content ${state1 && 'active'}`} >
       <h4>{BioContent.title1}</h4>
       <h1>{BioContent.title2}</h1>
       <p>{BioContent.bio}</p>
     </div>
     <ion-icon id='waves' src={waves}></ion-icon>
    </div>
  );
};

// const Div = styled.div`
//   position: relative;
//   display: flex;
//   height: 100%;
//   width: 100%;
// `;


export default Bio;