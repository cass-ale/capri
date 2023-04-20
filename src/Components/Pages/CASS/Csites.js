import React from 'react';
import '../../../cass.modules.css';
import capri from '../../../Images/capri.png';
import simp from '../../../Images/simp.png';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


function Csites() {
    return(
        <>
        <CarouselProvider
        naturalSlideWidth={999}
        naturalSlideHeight={650}
        totalSlides={2}
        interval={10000}
        isPlaying={true}
        dragEnabled={true}
        touchEnabled={true}>
        <Slider>
        <Slide index={0}><a href="https://www.caprimag.com" target="_blank" rel="noopener noreferrer"><img src={capri} className='img' alt='The Official Website For CAPRI Media Entertainment. Coded From Scratch Using React.Js.' /></a></Slide>
        <Slide index={1}><a href="https://www.simpcxty.com" target="_blank" rel="noopener noreferrer"><img src={simp} className='img' alt='The Official Website For Up And Coming Hip-Hop And R&B Artist, simpcxty. Coded From Scratch Using React.Js.' /></a></Slide>
        </Slider>
        </CarouselProvider>
        </>
    )
}

export default Csites;