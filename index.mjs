import express from 'express';
import pg from 'pg';

const app = express();
const port = 3000;
const { Pool } = pg;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mahasiswa',
  password: 'maulina123',
  port: 5432,
});

app.get('/', (req, res) => {
  console.log("TEST DATA : ");
  pool
    .query('SELECT * FROM biodata')
    .then((testData) => {
      console.log(testData.rows);
      res.status(200).json(testData.rows);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});