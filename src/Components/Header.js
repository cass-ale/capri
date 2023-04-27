import React, {useState} from "react";
import MobileMenu from "./MobileMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faTwitter,
    faTiktok,
    faYoutube,
    faFacebook,
    faSoundcloud
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';



const socials = [
    {
        icon: faInstagram,
        url: "https://www.instagram.com/capricatalogue/",
    },
    {
        icon: faTwitter,
        url: "https://twitter.com/capricatalogue",
    },
    {
        icon: faTiktok,
        url: "https://www.tiktok.com/@capricatalogue",
    },
    {
        icon: faYoutube,
        url: "https://www.youtube.com/@capricatalogue",
    },
    {
        icon: faFacebook,
        url: "https://www.facebook.com/capricatalogue",
    },
    {
        icon: faSoundcloud,
        url: "https://soundcloud.com/capricatalogue"
    },
]

function Header() {
const [showMenu, setShowMenu] = useState(false);
const toggleMenu = () => {
    setShowMenu(!showMenu);
}
const closeMenu = () => {
    setShowMenu(false);
}
const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setShowMenu(!showMenu);
  };


    return(
        <nav className="navbar">
        {showMenu ? (<section id="mobile"><FontAwesomeIcon icon={faClose} onClick={toggleMenu} size="3x" /></section>)
    : (<section id="mobile"><FontAwesomeIcon icon={faBars} onClick={toggleMenu} size="3x" /></section>)}


            {showMenu && <MobileMenu closeMenu={closeMenu} showMenu={showMenu} />}

        <p id="title"><Link to="/" onClick={handleClick}>CAPRI</Link></p>


        <nav className="pages">
            <ul>
                <li><Link to="/">CURRENT ISSUE</Link></li>
                <li><Link to="/archive">ARCHIVE</Link></li>
                <li><Link to="/donate">DONATE</Link></li>
            </ul>
        </nav>


        {<nav className="icons">
                <a href={socials[0].url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={socials[0].icon} size="1x" />
                </a>
                <a href={socials[1].url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={socials[1].icon} size="1x" />
                </a>
                <a href={socials[2].url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={socials[2].icon} size="1x" />
                </a>
                <a href={socials[3].url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={socials[3].icon} size="1x" />
                </a>
                <a href={socials[4].url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={socials[4].icon} size="1x" />
                </a>
                <a href={socials[5].url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={socials[5].icon} size="1x" />
                </a>
        </nav>}

        <Link to="/contact">
        <button className="navButton">
            Get In Touch
        </button>
        </Link>
        </nav>
    )
}

export default Header;