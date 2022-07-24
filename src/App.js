import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import AboutMePage from "./pages/AboutMePage"
import ExperiencePage from "./pages/ExperiencePage"
import ProjectPage from "./pages/ProjectPage"

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
