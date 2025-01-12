import React from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/home';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import CogecoProject from './components/pages/CogecoProject';
import SchoolProject from './components/pages/SchoolProject';
import KnightsOfColumbus from './components/pages/KnightsOfColumbus';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faHeart, faFile, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter,faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faCoffee, faHeart, faTwitter, faLinkedin,faGithub, faFile, faEnvelope);
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/Projects' element={<Projects/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/CogecoProject' element={<CogecoProject/>}/>
          <Route path='/SchoolProject' element={<SchoolProject/>}/>
          <Route path='/KnightsOfColumbus' element={<KnightsOfColumbus/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
