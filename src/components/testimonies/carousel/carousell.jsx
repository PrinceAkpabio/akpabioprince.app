import React, { useReducer } from 'react';
import slidesReducer from '../slidesReducer/slidesReducer';
import slides from './slides-data'
import Slide from '../slide/slide';
import prev from '../../../Assets/images/Prev.svg'
import next from '../../../Assets/images/next.svg'

console.clear();

const initialState = {
  slideIndex: 0,
};

const Carousel = () => {
  const [state, dispatch] = useReducer(slidesReducer, initialState);

  return (
    
    <div className="slides" id="carousel">
     
      <ion-icon
        onClick={() => dispatch({ type: "PREV" })}
        src={prev}>
      </ion-icon>

      {slides.map((slide, i) => {
        let offset =  state.slideIndex - i ;
        return <Slide slide={slide} offset={offset} key={i} />;
      })}
  
        <ion-icon
        onClick={() => dispatch({ type: "NEXT" })}
        src={next}></ion-icon>
    </div>
  );
}

export default Carousel;

