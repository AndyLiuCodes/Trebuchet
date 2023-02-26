import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRouter from './routes/api.js';
import { closePool } from './utils/db.js';

const app = express();
dotenv.config();
app.use(express.json());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/api', apiRouter);

const SERVER_PORT = process.env.SERVER_PORT || 8080;

const server = app.listen(SERVER_PORT, function () {
  console.log(`Server Port: ${SERVER_PORT}`);
});

function closeApp() {
  if (server) {
    server.close(function (err) {
      if (err) throw err;
      console.log('Server closing');
      closePool(function (err) {
        if (err) throw err;
        process.exit();
      });
    });
  }
}
process.on('SIGTERM', closeApp);
process.once('SIGINT', closeApp);
