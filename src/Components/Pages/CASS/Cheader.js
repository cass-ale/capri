import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





function Cheader(props) {
    return(
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
                <a href={props.socials[4].url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={props.socials[4].icon} size="2x" />
                </a>
        </nav>}
        </nav>
    )
}

export default Cheader;