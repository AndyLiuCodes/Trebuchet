const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const apiRouter = require('./routes/api');
const db = require('./db');

const app = express();
dotenv.config();
app.use(express.json());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

db.sequelize
  .sync()
  .then(() => {
    console.log('SUCCESS: Database is synchronized');
  })
  .catch((error) => {
    console.error('ERROR: Failed to syncronized DB - ', error);
  });

app.use('/api', apiRouter);

const SERVER_PORT = process.env.SERVER_PORT || 8080;

const server = app.listen(SERVER_PORT, function () {
  console.log(`Server Port: ${SERVER_PORT}`);
});
