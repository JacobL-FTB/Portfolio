const express = require('express');
const client = require('../../DB/Index');
client.connect();
const ProjectsRouter = express();
const { GetAllProjects, GetProjectById } = require('../../DB/SeedFunctions');

ProjectsRouter.get('/', async (req, res) => {
  const Projects = await GetAllProjects();
  res.send(Projects);
});

ProjectsRouter.get('/id/:id', async (req, res) => {
  const { id } = req.params;
  const Project = await GetProjectById(id);
  res.send(Project);
});

module.exports = ProjectsRouter;
