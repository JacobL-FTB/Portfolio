require('dotenv').config();
const express = require('express');
const APIRouter = require('./Back-End/API/ApiRouter');

let PORT = process.env.PORT || 3001;

const app = express();

const morgan = require('morgan');
app.use(morgan('dev'));

const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use('/api', APIRouter);

app.use((err, req, res, next) => {
  res.status(400).send({
    name: err.name,
    message: err.message,
  });
});

app.use(express.static('build'));

app.listen(PORT, () => {
  console.log('server is up!', PORT);
});
