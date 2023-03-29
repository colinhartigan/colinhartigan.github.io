import {useEffect, useState} from 'react';
import { BrowserRouter as Link, Route, HashRouter, Routes, Navigate, useLocation } from "react-router-dom";

import Home from './pages/home/Home.js';
import Career from './pages/career/Career.js'
import Projects from './pages/projects/Projects.js';
import Resume from './pages/resume/Resume.js';
import Contact from './pages/contact/Contact.js';
import About from './pages/about/About.js';

import Header from './components/Header';
import NotFound from './pages/notFound/NotFound.js';
import ECEproject from './pages/ECEproject/ECEproject.js';

function App() {

    return (
        <>
            <HashRouter basename='/'>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/career" element={<Career />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/ece1100" element={<ECEproject />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/contact" element={<Contact />} />

                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </HashRouter>

        </>
    );

}

export default App;
