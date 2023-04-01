import React from "react";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div>
        <p>© CAPRI Media {new Date().getFullYear().toString()}. All Rights Reserved. Use of this site constitutes acceptance of our <Link to="/privacy">Privacy</Link> and <Link to="/cookies">Cookie</Link> policies. The material on this site may not be reproduced, distributed, transmitted, cached or otherwise used, except with the prior written permission of CAPRI Media.</p>
        </div>
    )
}

export default Footer;