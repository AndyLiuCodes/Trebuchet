import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mysql from 'mysql';

const app = express();
dotenv.config();
app.use(express.json());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.listen(8080, () => console.log(`Server Port: 8080`));

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DATABASE,
});

connection.connect();

connection.query('SELECT * from Servers', function (err, res, fields) {
  if (err) throw err;
  console.log(res);
});

connection.end();
