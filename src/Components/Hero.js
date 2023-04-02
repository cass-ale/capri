import React, {useRef} from "react";

function Hero() {
    const targetRef = useRef(null);

    const handleClick = () => {
      targetRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    };
    return(
        <div className="heroContainer" ref={targetRef} onClick={handleClick}>
            <div className="heroText">THE CAPRI CATALOGUE</div>
        </div>
    )
}

export default Hero;