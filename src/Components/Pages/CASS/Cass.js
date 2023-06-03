import React, {useState, useEffect} from 'react'
import '../../../cass.modules.css';
import Header from './Cheader';
import Footer from './Cfooter';
import PopUp from './Cpopup';
import Cintro from './Cintro';
import CurrentWork from './CurrentWork';
import {
faGithub,
faLinkedin,
faHackerrank,
faFreeCodeCamp,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';
import AudioPlayer from 'react-h5-audio-player';
import songs from './Songs';
import ScrollToTopOnMount from '../../Scroll';




const socials = [
  {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/cass-ale/"
  },
  {
      icon: faGithub,
      url: "https://github.com/cass-ale"
  },
  {
      icon: faHackerrank,
      url: "https://www.hackerrank.com/cassale"
  },
  {
      icon: faFreeCodeCamp,
      url: "https://www.freecodecamp.org/cass-ale"
  },
  {
      icon: faEnvelope,
      url: "mailto:cass@caprimag.com"
  }
]






function Cass() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const [showWork, setShowWork] = useState(false);
  const openCurrent = () => {setShowWork(true);
  window.scrollTo({
    top: 975,
    behavior: "smooth"
  })}
  const [showPopUp, setShowPopUp] = useState(true);
  const showPopupHandler = () => setShowPopUp(false);
  const reopen = () => {setShowPopUp(true);
    window.scrollTo({
    top: 0,
    behavior: "smooth"
  });}
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
        <ScrollToTopOnMount />
        <Helmet>
        <title>C. J. ALÉRIA | Digital Designer</title>
        </Helmet>


        <header>
        <Header reopen={reopen} handleClick={handleClick} socials={socials}/>
        </header>


        <main className='cmain'>
        <AudioPlayer
        src={songs[currentSong].src}
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={handleNext}
        onEnded={handleNext}
        onClickPrevious={handleBack}
        layout = "horizontal-reverse"
        autoPlay = {true}
        loop = {false}/>
        {popup}

        <Cintro openCurrent={openCurrent} />
        {showWork && <CurrentWork />}



        </main>

        <footer>
        <Footer />
        </footer>
        </>
    )
}

export default Cass;