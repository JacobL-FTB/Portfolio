import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Projects from './Components/Projects';
import NavBar from './Components/NavBar';
import About from './Components/About';

const App = () => {
  const [allProjects, setProjects] = useState([]);
  const [ProjectData, SetProjectData] = useState([]);

  useEffect(() => {
    const FetchProjects = async () => {
      const response = await fetch('http://localhost:3001/api/projects/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const projects = await response.json();
      console.log(projects);
      setProjects(projects);
    };
    FetchProjects();
  }, []);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects projects={allProjects} />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
