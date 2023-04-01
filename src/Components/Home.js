import React from "react";
import Header from "./Header";
import Main from './Main'
import Footer from './Footer';


function Home() {
    return(
        <>
        <header>
            <Header />
        </header>

        <main>
            <Main />
        </main>

        <footer>
            <Footer />
        </footer>
        </>
    );
};

export default Home;