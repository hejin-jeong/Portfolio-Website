import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
import HomePage from "./pages/Home/HomePage"
import AboutMePage from "./pages/AboutMe/AboutMePage"
import ExperiencePage from "./pages/Experience/ExperiencePage"
import ProjectPage from "./pages/Project/ProjectPage"

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/aboutme' element={<AboutMePage />} />
        <Route path='/experience' element={<ExperiencePage />} />
        <Route path='/project' element={<ProjectPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
