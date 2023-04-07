import React, { useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faTiktok,
  faYoutube,
  faFacebook,
  faSoundcloud
} from "@fortawesome/free-brands-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";


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

const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

function MobileMenu(props) {
    const onClick = () => {
        props.closeMenu();
    }


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
            <section className="formClose"><FontAwesomeIcon icon={faClose} onClick={onClick} size="2x"/></section>
          <nav className="mobileNav">
            <ul>
                <li><a href="/" onClick={handleClick}>CURRENT ISSUE</a></li><br />
                <li><a href="/archive" onClick={handleClick}>ARCHIVE</a></li><br />
                <li><a href="/donate" onClick={handleClick}>DONATE</a></li><br />
            </ul>
            <a href="/contact" onClick={handleClick}>
                <button className="conButton" id="mobileButton">
                Get In Touch
                </button>
            </a>
            {<nav className="mobileIcons">
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
        </nav>
        </div>
    );
}

export default MobileMenu;