import React, { useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";






function MobileMenu(props) {

    const handleClick = () => {
        props.closeMenu();
      };
    useEffect(() => {
        function handleResize() {
          if (window.innerWidth > 768 && props.showMenu) {
            props.closeMenu();
          }
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      });



    return (
        <div className="mobileMenu">
          <nav className="mobileNav">
            <ul>
                <li><Link to="/" onClick={handleClick}>CURRENT ISSUE</Link></li><br />
            </ul>
            <hr id="line" />
            <Link className="mobileButtonContainer" to="/contact" onClick={handleClick}>
                <button className="mobileButton">
                Get In Touch
                </button>
            </Link>
            {<nav className="mobileIcons">
                <a href={props.socials[0].url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={props.socials[0].icon} size="1x" />
                </a>
                <a href={props.socials[1].url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={props.socials[1].icon} size="1x" />
                </a>
                <a href={props.socials[2].url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={props.socials[2].icon} size="1x" />
                </a>
                <a href={props.socials[3].url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={props.socials[3].icon} size="1x" />
                </a>
                <a href={props.socials[4].url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={props.socials[4].icon} size="1x" />
                </a>
                <a href={props.socials[5].url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={props.socials[5].icon} size="1x" />
                </a>
        </nav>}
        </nav>
        </div>
    );
}

export default MobileMenu;