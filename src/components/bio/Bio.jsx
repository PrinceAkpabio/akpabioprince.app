import React from 'react';
// import styled from 'styled-components';
import { BioContent } from './bioItems';
import waves from '../../Assets/images/waves.svg';
import { AnimateOnScroll } from '../customHooks/scrollAnimate';
import { Element } from 'react-scroll';

const Bio = () => {
 const [state1, ref1]  = AnimateOnScroll()
 // const [state2, ref2]  = AnimateOnScroll()
 // const [state3, ref3]  = AnimateOnScroll()
 return (

    <div className='bio-wrapper' ref={ref1}>
     <Element
       id='bio-component'
       name='bio-component'
     />
     <div className={`bio-content ${state1 && 'active'}`} >
       <h4>{BioContent.title2}</h4>
       <h1>{BioContent.title1}</h1>
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