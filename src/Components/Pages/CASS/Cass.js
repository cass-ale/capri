import React, {useState, useEffect} from 'react'
import '../../../cass.modules.css';
import Header from './Cheader';
import Footer from './Cfooter';
import Csites from './Csites';
import PopUp from './Cpopup';
import { Helmet } from 'react-helmet';
import AudioPlayer from 'react-h5-audio-player';
import songs from './Songs';




function Cass() {
  const [showPopUp, setShowPopUp] = useState(true);
  const showPopupHandler = () => setShowPopUp(false);
  const reopen = () => setShowPopUp(true);
  const [currentSong, setCurrentSong] = useState(0);
  const handleNext = () => {
    setCurrentSong(currentSong + 1);
    if (currentSong === songs.length - 1) {
      setCurrentSong(0);
  }
}
const handleBack = () => {
  setCurrentSong(currentSong - 1);
  if (currentSong === 0) {
    setCurrentSong(songs.length - 1);
  }
}

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

        <Helmet>
        <title>C. J. ALÉRIA</title>
        </Helmet>


        <header>
        <Header reopen={reopen}/>
        </header>


        <main className='cmain'>
        <AudioPlayer
        src= {songs[currentSong].src}
        showSkipControls= {true}
        showJumpControls= {false}
        onClickNext= {handleNext}
        onEnded={handleNext}
        onClickPrevious={handleBack}
        layout= "horizontal-reverse"
        autoPlay= {true}
        loop ={false}/>
        {popup}

            <h1>Cassian J. ALÉRIA | Certified Front-End Developer & UX/UI Designer</h1>




            <h2>Front-End Projects</h2>
            <p id='about'>After Receiving My <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/Q3TW5TCE2NN7" target="_blank" rel="noopener noreferrer">Front-End Developer Certification</a> Through Meta's Coursera Learning Program In March Of 2023, I Immediately Began Working On Publishing Live Websites Made With React.js
            To Solidify My Understanding Of Front End Development Principles And To Prepare Myself For The Tech Job Market. Below You Will Find Links To Full Sites I Have Created
            In React. These Projects Showcase My Understanding Of UX/Accessibility Design, Responsive Applications, And Organized Project Management. </p>
            <Csites />
          <div className='caro'>
            <a href="https://www.caprimag.com" target="_blank" rel="noopener noreferrer"><button><span id='cjacapri'>CAPRI Media</span></button></a>
            <a href="https://www.simpcxty.com" target="_blank" rel="noopener noreferrer"><button><span id='simp'>simpcxty</span></button></a>
          </div>

        </main>

        <footer>
        <Footer />
        </footer>
        </>
    )
}

export default Cass;