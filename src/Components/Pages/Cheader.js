import React from 'react'
import { 
faGithub,
faLinkedin,
faHackerrank,
faFreeCodeCamp,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const socials = [
    {
        icon: faGithub,
        url: "https://github.com/cass-ale"
    },
    {
        icon: faLinkedin,
        url: "https://www.linkedin.com/in/cass-ale/"
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
        url: "mailto:cass.ale@outlook.com"
    }
]

const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

function Cheader() {
    return(
        <nav className='cheader'>
            <h1 onClick={handleClick}>C. J. ALÉRIA</h1>

            {<nav className="cicons">
                <a href={socials[0].url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={socials[0].icon} size="2x" />
                </a>
                <a href={socials[1].url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={socials[1].icon} size="2x" />
                </a>
                <a href={socials[2].url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={socials[2].icon} size="2x" />
                </a>
                <a href={socials[3].url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={socials[3].icon} size="2x" />
                </a>
                <a href={socials[4].url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={socials[4].icon} size="2x" />
                </a>
        </nav>}
        </nav>
    )
}

export default Cheader;