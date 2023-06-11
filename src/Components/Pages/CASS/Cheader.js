import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AudioPlayer from 'react-h5-audio-player';
import songs from './Songs';





function Cheader(props) {
    const [currentSong, setCurrentSong] = React.useState(0);
    const handleNext = () => {
      setCurrentSong(currentSong + 1);
      if (currentSong === songs.length - 1) {
        setCurrentSong(0);
      }
    }
    const handleBack = () => {
      setCurrentSong(currentSong - 1);
      if  (currentSong === 0) {
        setCurrentSong(songs.length - 1);
      }
    }
    return(
        <>
        <nav className='cheader'>
        <button onClick={props.reopen}>Need That Pop Up Again?</button>
            <h1 onClick={props.handleClick}>C. J. ALÉRIA</h1>

            {<nav className="cicons">
                <a href={props.socials[0].url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={props.socials[0].icon} size="2x" />
                </a>
                <a href={props.socials[1].url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={props.socials[1].icon} size="2x" />
                </a>
                <a href={props.socials[2].url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={props.socials[2].icon} size="2x" />
                </a>
                <a href={props.socials[3].url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={props.socials[3].icon} size="2x" />
                </a>
        </nav>}
        </nav>
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
        </>
    )
}

export default Cheader;