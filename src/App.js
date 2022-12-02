import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Projects from './Components/Projects';
import NavBar from './Components/NavBar';
import About from './Components/About';
import SingleProject from './Components/SingleProject';

const App = () => {
  const [allProjects, setProjects] = useState([]);
  const [ProjectData, SetProjectData] = useState([]);

  const GetProjectData = async (id) => {
    const response = await fetch(
      'http://localhost:3001/api/projects/id/' + id + ''
    );
    const project = await response.json();
    SetProjectData(project);
    return project;
  };

  useEffect(() => {
    const FetchProjects = async () => {
      const response = await fetch('http://localhost:3001/api/projects/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const projects = await response.json();
      setProjects(projects);
    };
    FetchProjects();
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Projects"
          element={
            <Projects projects={allProjects} getprojectdata={GetProjectData} />
          }
        />
        <Route path="/About" element={<About />} />
        <Route
          path="/Project/:id"
          element={
            <SingleProject
              ProjectData={ProjectData}
              getprojectdata={GetProjectData}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
