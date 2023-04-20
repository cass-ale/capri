import React, {useState} from 'react'
import '../../../cass.modules.css';
import capri from '../../../Images/capri.png';
import simp from '../../../Images/simp.png';



function Cprojects() {

    const [isOpen, setIsOpen] = useState(false);
    const [simpOpen, setSimpOpen] = useState(false);

    const handleCapriClick = () => {
      setIsOpen(!isOpen);
      handleClickOne();
    };

    const handleSimpClick = () => {
    setSimpOpen(!simpOpen);
    handleClickTwo();
    };

    const handleClickOne = () => {
        window.scrollTo({
          top:725,
          behavior: "smooth"
        });
      };

      const handleClickTwo = () => {
        window.scrollTo({
          top: 1570,
          behavior: "smooth"
        });
      };

      return (
        <>
        <section className='projects'>
        <article className="capri-container">

        {!isOpen ? (
              <div className="capricircle"  onClick={handleCapriClick} >
                <p id='cjacapri'>CAPRI Media Official Website</p>
              </div>
            ) : (
              <div className="caprirectangle" onClick={handleCapriClick}>
              <a href="https://www.caprimag.com" target="_blank" rel="noopener noreferrer"><img src={capri} alt='The Official Website For CAPRI Media Entertainment. Coded From Scratch Using React.Js.' /></a>
                <p>The Official Website For CAPRI Media Entertainment. Coded From Scratch Using React.Js, This Website Is Able To Smoothly Transition Between Devices To Present A Modern And Responsive Experience To Users. CAPRI Media Is A Fashion And Art Production Company That Required A Website That Could Be As Sleek And Timeless As Their Works.
                 Github Repository For The Source Code Is Private At The Moment. Please Reach Out To View The Code Via Email. Click The Site To Enter Or Click Anywhere Else To Close.</p>
              </div>
            )}


            </article>

        <article className='simp-container'>

        {!simpOpen ? (
              <div className="simpcircle" onClick={handleSimpClick}>
                <p id='simpcxty'><span id='simp'>simpcxty</span> Official Website</p>
              </div>
            ) : (
              <div className="simprectangle" onClick={handleSimpClick}>
              <a href="https://www.simpcxty.com" target="_blank" rel="noopener noreferrer"><img src={simp} alt='The Official Website For Up And Coming Hip-Hop And R&B Artist, simpcxty. Coded From Scratch Using React.Js.' /></a>
                <p>The Official Website For Up And Coming Hip-Hop/R&B Artist, simpcxty. Born And Raised In Bessemer, AL, simpcxty Aims To Challenge Outdated Notions Of Masculinity And 
                Encourage Men To Embrace Their Emotions In The Name Of Bettering Mental Health. This Site Is Coded In React.Js And Is Easily Updated To Suit The Changing Styles Of The Musician; The Site Is Also High-Performing And Responsive To Capture The Eyes Of Potential Fans Whether They Be On Desktop Or Mobile. Github Repository For The Source Code Is Private At The Moment. Please Reach Out To View The Code Via Email. Click The Site To Enter Or Click Anywhere Else To Close. </p>
              </div>
            )}


            </article>

            </section>
                </>
      )
}

export default Cprojects;