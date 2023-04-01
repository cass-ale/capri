import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from 'react-router-dom';

function Donate() {
    return(
        <>
        <header>
            <Header />
        </header>

        <main>
        <Link to='/transparency'>Click to see receipts of our support.</Link>
        </main>

        <footer>
            <Footer />
        </footer>
        </>
    )
}

export default Donate;