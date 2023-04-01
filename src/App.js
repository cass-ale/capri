import React from "react";
import './styles.modules.css';
import Home from "./Components/Home";
import Archive from './Components/Pages/Archive';
import Donate from './Components/Pages/Donate';
import Contact from './Components/Pages/Contact';
import Privacy from './Components/Pages/Privacy';
import Cookies from './Components/Pages/Cookies';
import Transparency from './Components/Pages/Transparency';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';



function App() {
  return (
    <div>
    <Router>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/archive" element={<Archive />} />
      <Route exact path="/donate" element={<Donate />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/privacy" element={<Privacy />} />
      <Route exact path="/cookies" element={<Cookies />} />
      <Route exact path='/transparency' element={<Transparency />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
