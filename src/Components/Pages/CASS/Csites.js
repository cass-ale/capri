import React from 'react';
import '../../../cass.modules.css';
import capri from '../../../Images/capri.png';
import simp from '../../../Images/simp.png';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


function Csites() {
    return(
        <>
        <CarouselProvider
        naturalSlideWidth={999}
        naturalSlideHeight={775}
        totalSlides={2}
        interval={10000}
        isPlaying={true}
        dragEnabled={true}
        touchEnabled={true}
        lockOnWindowScroll={true}
        infinite={true}>
        <Slider>
        <Slide index={0}>
            <img src={capri} className='img' alt='The Official Website For CAPRI Media Entertainment. Coded From Scratch Using React.Js.' />
            <p>The Official Website For CAPRI Media Entertainment. Coded From Scratch Using React.Js, This Website Is Able To Smoothly Transition Between Devices To Present A Modern And Responsive Experience To Users.
                 CAPRI Media Is A Fashion And Art Production Company That Required A Website That Could Be As Sleek And Timeless As Their Works.
                 Github Repository For The Source Code Is Private At The Moment. Please Reach Out To View The Code Via Email.</p>
            </Slide>
        <Slide index={1}>
            <img src={simp} className='img' alt='The Official Website For Up And Coming Hip-Hop And R&B Artist, simpcxty. Coded From Scratch Using React.Js.' />
            <p>The Official Website For Up And Coming Hip-Hop/R&B Artist, simpcxty. Born And Raised In Bessemer, AL, simpcxty Aims To Challenge Outdated Notions Of Masculinity And 
                Encourage Men To Embrace Their Emotions In The Name Of Bettering Mental Health. This Site Is Coded In React.Js And Is Easily Updated To Suit The Changing Styles Of The Musician; 
                The Site Is Also High-Performing And Responsive To Capture The Eyes Of Potential Fans Whether They Be On Desktop Or Mobile. Github Repository For The Source Code Is Private At The Moment. Please Reach Out To View The Code Via Email. </p>
            </Slide>
        </Slider>
        </CarouselProvider>
        </>
    )
}

export default Csites;