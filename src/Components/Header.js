import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faTwitter,
    faTiktok,
    faYoutube,
    faFacebook,
    faSoundcloud
} from "@fortawesome/free-brands-svg-icons";

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
    return(
        <nav className="navbar">

        <a href="/"><p id="title">CAPRI</p></a>


        <nav className="pages">
            <ul>
                <li><a href="#hero">Current Issue</a></li>
                <li><a href="#archive">Archive</a></li>
                <li><a href="#donate">Donate</a></li>
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

        <a href="#contact">
        <button className="navButton">
            Get In Touch
        </button>
        </a>
        </nav>
    )
}

export default Header;