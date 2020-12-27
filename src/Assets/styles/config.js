export function ClampBuilder( minWidthPx, maxWidthPx, minFontSize, maxFontSize ) {
  const root = document.querySelector( "html" );
  const pixelsPerRem = Number( getComputedStyle( root ).fontSize.slice( 0,-2 ) );

  const minWidth = minWidthPx / pixelsPerRem;
  const maxWidth = maxWidthPx / pixelsPerRem;

  const slope = ( maxFontSize - minFontSize ) / ( maxWidth - minWidth );
 const yAxisIntersection = -minWidth * slope + minFontSize;

  return `clamp( ${ minFontSize }rem, ${ yAxisIntersection }rem + ${ slope * 100 }vw, ${ maxFontSize }rem )`
}

export function ImgBuilder( minWidthPx, maxWidthPx, minFontSize, maxFontSize ) {
  const root = document.querySelector( "html" );
  const pixelsPerRem = Number( getComputedStyle( root ).fontSize.slice( 0,-2 ) );

  const minWidth = minWidthPx / pixelsPerRem;
  const maxWidth = maxWidthPx / pixelsPerRem;

  const slope = ( maxFontSize - minFontSize ) / ( maxWidth - minWidth );
 const yAxisIntersection = -minWidth * slope + minFontSize;

  return `clamp( ${ minFontSize }vh, ${ yAxisIntersection }vw + ${ slope * 90 }vw, ${ maxFontSize }vh )`
}


export const TextStyle = {
  '--clamphero': ImgBuilder('320', '695', '80', '110'),
  '--clampherosm': ImgBuilder('320', '695', '60', '80'),
  '--clampherotab': ImgBuilder('695', '1023', '60', '40'),
  '--clampherotablg': ImgBuilder('695', '1023', '40', '40'),
  '--clampimgsm': ImgBuilder('320', '695', '40', '110'),
  '--clampimg': ImgBuilder('320', '695', '75', '80'),
  '--clampdots': ImgBuilder('320', '695', '50', '65'),
  '--clampdotsm': ImgBuilder('320', '695', '50', '45'),
  '--clamph0': ClampBuilder('320', '840', '2', '2.5'),
  '--clamph1': ClampBuilder('320', '840', '2', '3'),
  '--clamph2': ClampBuilder('320', '840', '1.4', '2.8'),
  '--clamph3': ClampBuilder('320', '840', '1.2', '2.3'),
  '--clamph4': ClampBuilder('320', '840', '1', '2'),
  '--clampP': ClampBuilder('320', '840', '1.5', '1.7'),
  height: 'auto',
    zIndex: '-1'
}



// export function CalculateCh(element, fontSize) {
//   const zero = document.createElement("span");
//   zero.innerText = "0";
//   zero.style.position = "absolute";
//   zero.style.fontSize = fontSize;

//   element.appendChild(zero);
//   const chPixels = zero.getBoundingClientRect().width;
//   element.removeChild(zero);

//   return chPixels;
// }

