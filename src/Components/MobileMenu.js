import React, { useEffect} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

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
        </nav>
        </div>
    );
}

export default MobileMenu;