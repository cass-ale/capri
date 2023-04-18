import React, {useState, useEffect} from 'react'
import '../../cass.modules.css';
import Header from './Cheader';
import Footer from './Cfooter';
import PopUp from './Cpopup';
import capri from '../../Images/capri.png';
import simp from '../../Images/simp.png'




function Cass() {
    const [showPopUp, setShowPopUp] = useState(true);
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

    const showPopupHandler = () => setShowPopUp(false);

    const reopen = () => setShowPopUp(true);

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

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowPopUp(false);
      }, 30000);
     return () => clearTimeout(timer);
     }, [showPopUp]);
     let popup = null;
     if(showPopUp) {
       popup = <PopUp showPopupHandler={showPopupHandler}/>;
      }
  
  
  
      return(
        <>
        <header>
        <Header reopen={reopen}/>
        </header>

        <main className='cmain'>
            {popup}
            <h1>Cassian J. ALÉRIA | Certified Front-End Developer & UX/UI Designer</h1>


            <section className='projects'>

            <h2>Front-End Projects</h2>
            <p id='about'>After Receiving My Front-End Developer Certification Through Meta's Coursera Learning Program In March Of 2023, I Immediately Began Working On Publishing Live Websites Made With React.js
            To Solidify My Understanding Of Front End Development Principles And To Prepare Myself For The Tech Job Market. Below You Will Find Links To Full Sites I Have Created
            In React. These Projects Showcase My Understanding Of UX/Accessibility Design, Responsive Applications, And Organized Project Management. </p>

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
        </main>

        <footer>
        <Footer />
        </footer>
        </>
    )
}

export default Cass;