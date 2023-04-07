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


    useEffect((props) => {
      function handleResize() {
        if (window.innerWidth > 1600 && props.showMenu) {
          props.closeMenu(false);
        }
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [props.showMenu]);
  


    return (
        <div className="mobileMenu">
            <section className="formClose"><FontAwesomeIcon icon={faClose} onClick={onClick} size="2x"/></section>
          <nav className="mobileNav">
            <ul>
                <li><Link to="/" onClick={handleClick}>CURRENT ISSUE</Link></li><br />
                <li><Link to="/archive" onClick={handleClick}>ARCHIVE</Link></li><br />
                <li><Link to="/donate" onClick={handleClick}>DONATE</Link></li><br />
            </ul>
            <Link to="/contact" onClick={handleClick}>
                <button className="conButton" id="mobileButton">
                Get In Touch
                </button>
            </Link>
        </nav>
        </div>
    );
}

export default MobileMenu;