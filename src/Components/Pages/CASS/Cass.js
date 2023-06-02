import React, {useState, useEffect} from 'react'
import '../../../cass.modules.css';
import Header from './Cheader';
import Footer from './Cfooter';
import PopUp from './Cpopup';
import Cintro from './Cintro';
import CurrentWork from './CurrentWork';
import { Helmet } from 'react-helmet';
import AudioPlayer from 'react-h5-audio-player';
import songs from './Songs';
import ScrollToTopOnMount from '../../Scroll';




function Cass() {
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
        <title>C. J. ALÉRIA</title>
        </Helmet>


        <header>
        <Header reopen={reopen}/>
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