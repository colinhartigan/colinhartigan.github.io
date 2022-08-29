import react from 'react';
import { BrowserRouter as Link, Route, HashRouter, Routes, Navigate } from "react-router-dom";

import Home from './pages/home/Home.js';
import Experience from './pages/experience/Experience.js'
import Projects from './pages/projects/Projects.js';
import Header from './components/Header';
import NotFound from './pages/notFound/NotFound.js';

function App() {

    return (
        <>
            <HashRouter basename='/'>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/projects" element={<Projects />} />

                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </HashRouter>

        </>
    );

}

export default App;
