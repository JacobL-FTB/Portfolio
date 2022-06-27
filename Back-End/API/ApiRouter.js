const express = require('express');
const ProjectsRouter = require('./ProjectsRouter');
const APIRouter = express();

APIRouter.use('/projects', ProjectsRouter);

APIRouter.get('/', (req, res) => {
  res.send('api router working');
});

module.exports = APIRouter;
